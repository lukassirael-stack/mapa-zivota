// GET  /api/checkout?kod=HVEZDA-XXXXX → info pro landing (jméno, rod, stav mapy)
// POST /api/checkout {kod}            → vytvoří/najde záznam v `mapy` a Stripe Checkout session (444 Kč)

const Stripe = require("stripe");
const { supabase } = require("../lib/db");

const CENA_HALERE = 44400; // 444 Kč

function normKod(k) {
  return String(k || "").trim().toUpperCase();
}

async function najdiVysledek(db, kod) {
  const { data } = await db.from("results")
    .select("code, name, email, final_type, answers")
    .eq("code", kod)
    .maybeSingle();
  return data || null;
}

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  const db = supabase();

  try {
    if (req.method === "GET") {
      const kod = normKod(req.query.kod);
      if (!/^HVEZDA-[A-Z0-9]{4,8}$/.test(kod)) {
        return res.status(400).json({ error: "neplatny_kod" });
      }
      const vysledek = await najdiVysledek(db, kod);
      if (!vysledek) return res.status(404).json({ error: "nenalezen" });
      if (!vysledek.answers) return res.status(409).json({ error: "bez_odpovedi" });

      const { data: mapa } = await db.from("mapy")
        .select("id, status").eq("code", kod)
        .order("created_at", { ascending: false }).limit(1).maybeSingle();

      return res.status(200).json({
        name: vysledek.name,
        starLineage: vysledek.final_type,
        mapa: mapa ? { id: mapa.id, status: mapa.status } : null,
      });
    }

    if (req.method === "POST") {
      const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
      const kod = normKod(body.kod);
      if (!/^HVEZDA-[A-Z0-9]{4,8}$/.test(kod)) {
        return res.status(400).json({ error: "neplatny_kod" });
      }
      const vysledek = await najdiVysledek(db, kod);
      if (!vysledek) return res.status(404).json({ error: "nenalezen" });
      if (!vysledek.answers) return res.status(409).json({ error: "bez_odpovedi" });

      // Existující mapa pro tento kód? (odeslanou znovu neprodáváme, rozpracovanou recyklujeme)
      const { data: existujici } = await db.from("mapy")
        .select("id, status").eq("code", kod)
        .order("created_at", { ascending: false }).limit(1).maybeSingle();

      if (existujici && ["sent", "generated", "paid"].includes(existujici.status)) {
        return res.status(409).json({ error: "uz_zaplaceno", mapaId: existujici.id });
      }

      let mapaId = existujici?.id;
      if (!mapaId) {
        const { data: nova, error: eIns } = await db.from("mapy")
          .insert({ code: kod, email: vysledek.email, name: vysledek.name, status: "created" })
          .select("id").single();
        if (eIns) throw eIns;
        mapaId = nova.id;
      }

      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
      const siteUrl = (process.env.SITE_URL || `https://${req.headers.host}`).replace(/\/$/, "");

      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        customer_email: vysledek.email || undefined,
        line_items: [{
          quantity: 1,
          price_data: {
            currency: "czk",
            unit_amount: CENA_HALERE,
            product_data: {
              name: "Mapa života — Oáza Adamanthea",
              description: `Osobní mapa duše pro ${vysledek.name} (${vysledek.final_type})`,
            },
          },
        }],
        metadata: { mapa_id: mapaId, kod },
        success_url: `${siteUrl}/dekujeme?m=${mapaId}`,
        cancel_url: `${siteUrl}/?kod=${encodeURIComponent(kod)}`,
      });

      await db.from("mapy").update({ payment_id: session.id }).eq("id", mapaId);

      return res.status(200).json({ url: session.url });
    }

    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "method_not_allowed" });
  } catch (err) {
    console.error("checkout error:", err);
    return res.status(500).json({ error: "server", detail: String(err.message || err).slice(0, 200) });
  }
};
