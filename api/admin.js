// Admin API (chráněno heslem v hlavičce x-admin-heslo == env ADMIN_HESLO).
// GET  ?akce=list                 → přehled všech map
// POST {akce:'regenerovat', id}   → vynucené nové vygenerování + odeslání
// POST {akce:'poslat', id}        → jen znovu poslat e-mail (bez nového generování)

const { supabase } = require("../lib/db");
const { generateMapa } = require("../lib/generator");

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");

  const heslo = req.headers["x-admin-heslo"];
  if (!process.env.ADMIN_HESLO || heslo !== process.env.ADMIN_HESLO) {
    return res.status(401).json({ error: "unauthorized" });
  }

  try {
    const db = supabase();

    if (req.method === "GET") {
      const { data } = await db.from("mapy")
        .select("id, code, name, email, status, model, created_at, generated_at, sent_at, viewed_at, error_detail")
        .order("created_at", { ascending: false })
        .limit(200);
      return res.status(200).json({ mapy: data || [] });
    }

    if (req.method === "POST") {
      const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
      const { akce, id } = body;
      if (!id) return res.status(400).json({ error: "chybi_id" });

      if (akce === "regenerovat") {
        const r = await generateMapa(id, { force: true });
        return res.status(200).json({ ok: true, r });
      }
      if (akce === "poslat") {
        const r = await generateMapa(id, { resendOnly: true });
        return res.status(200).json({ ok: true, r });
      }
      return res.status(400).json({ error: "neznama_akce" });
    }

    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "method_not_allowed" });
  } catch (err) {
    console.error("admin error:", err);
    return res.status(500).json({ error: "server", detail: String(err.message || err).slice(0, 300) });
  }
};
