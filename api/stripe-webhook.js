// Stripe webhook: checkout.session.completed → označit zaplaceno → vygenerovat
// mapu na pozadí (waitUntil) → Stripe dostane 200 okamžitě.
//
// KLÍČOVÉ: podpis se ověřuje proti RAW tělu requestu — proto tělo čteme ručně
// ze streamu a nikdy nesaháme na req.body (to bylo jádro dubnového problému
// s webhookem u kvízu).

const Stripe = require("stripe");
const { waitUntil } = require("@vercel/functions");
const { generateMapa } = require("../lib/generator");
const { supabase } = require("../lib/db");

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end();
  }

  let event;
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const raw = await readRawBody(req);
    const sig = req.headers["stripe-signature"];
    event = stripe.webhooks.constructEvent(raw, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("webhook podpis:", err.message);
    return res.status(400).json({ error: "invalid_signature" });
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const mapaId = session.metadata?.mapa_id;

      if (mapaId) {
        const db = supabase();
        await db.from("mapy").update({
          status: "paid",
          payment_id: session.payment_intent || session.id,
          email: session.customer_details?.email || undefined,
        }).eq("id", mapaId);

        // Generování běží dál po odeslání odpovědi (do maxDuration funkce).
        waitUntil(
          generateMapa(mapaId).catch((e) => console.error("generateMapa selhalo:", mapaId, e.message))
        );
      } else {
        console.error("webhook: session bez metadata.mapa_id", session.id);
      }
    }
    return res.status(200).json({ received: true });
  } catch (err) {
    console.error("webhook zpracování:", err);
    // 200 i tak — Stripe by jinak opakoval a generátor je idempotentní;
    // selhání dořeší admin (status error + tlačítko Vygenerovat znovu).
    return res.status(200).json({ received: true, warn: true });
  }
};
