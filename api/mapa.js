// GET /api/mapa?m={id} → stav a (když je hotová) obsah mapy.
// Používá stránka mapa.html a polling na děkovné stránce po platbě.

const { supabase } = require("../lib/db");

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "method_not_allowed" });
  }

  const id = String(req.query.m || "").trim();
  if (!/^[0-9a-f-]{36}$/i.test(id)) return res.status(400).json({ error: "neplatne_id" });

  try {
    const db = supabase();
    const { data: mapa } = await db.from("mapy")
      .select("id, name, code, status, obsah, profil, generated_at")
      .eq("id", id).maybeSingle();
    if (!mapa) return res.status(404).json({ error: "nenalezena" });

    const hotova = ["generated", "sent"].includes(mapa.status) && mapa.obsah;

    if (hotova) {
      // první zobrazení
      db.from("mapy").update({ viewed_at: new Date().toISOString() })
        .eq("id", id).is("viewed_at", null).then(() => {});
      return res.status(200).json({
        status: mapa.status,
        name: mapa.name,
        starLineage: mapa.profil?.starLineage || null,
        profil: mapa.profil || null,
        obsah: mapa.obsah,
      });
    }

    return res.status(200).json({ status: mapa.status, name: mapa.name });
  } catch (err) {
    console.error("mapa error:", err);
    return res.status(500).json({ error: "server" });
  }
};
