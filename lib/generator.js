// Hlavní pipeline Mapy života: záznam v `mapy` → data z `results` → dekódování
// odpovědí → astrologie → prompt → Claude API → uložení → PDF → Brevo e-mail.
//
// Idempotence: pokud je mapa už odeslaná (status 'sent') a nejde o vynucené
// přegenerování/přeposlání, nic se neděje — dvojitý webhook nic nerozbije.

const { supabase } = require("./db");
const { decodeAnswers } = require("./decode");
const { buildAstro, calcAge } = require("./astro");
const { detectRod } = require("./gender");
const { buildPrompt } = require("./prompt");
const { renderMapaPDF } = require("./pdf");
const { sendMapaEmail } = require("./brevo");

const MODEL = "claude-sonnet-4-6";

async function callClaude(prompt) {
  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 9000,
      messages: [{ role: "user", content: prompt }],
    }),
  });
  if (!r.ok) {
    const detail = await r.text().catch(() => "");
    throw new Error(`Anthropic API ${r.status}: ${detail.slice(0, 300)}`);
  }
  const data = await r.json();
  const text = (data.content || []).filter(b => b.type === "text").map(b => b.text).join("\n").trim();
  if (!text) throw new Error("Prázdná odpověď z Claude API.");
  return text;
}

// opts: { force: true } = přegenerovat i hotovou; { resendOnly: true } = jen znovu poslat e-mail
async function generateMapa(mapaId, opts = {}) {
  const db = supabase();

  const { data: mapa, error: e1 } = await db.from("mapy").select("*").eq("id", mapaId).single();
  if (e1 || !mapa) throw new Error(`Mapa ${mapaId} nenalezena.`);

  if (mapa.status === "sent" && !opts.force && !opts.resendOnly) {
    return { skipped: true, reason: "už odeslána" };
  }

  try {
    const { data: result, error: e2 } = await db.from("results").select("*").eq("code", mapa.code).single();
    if (e2 || !result) throw new Error(`Výsledek kvízu pro kód ${mapa.code} nenalezen.`);

    // ── profil ──
    const astro = buildAstro(result);
    if (!astro.ok) throw new Error(astro.error);
    const age = calcAge(astro.year, astro.month, astro.day);
    const { rod, instrukce } = detectRod(result.name);

    let obsah = mapa.obsah;
    const needGenerate = !obsah || opts.force || !mapa.generated_at;

    if (needGenerate && !opts.resendOnly) {
      const decoded = decodeAnswers(result.answers, result.group_result);
      if (!decoded.ok) throw new Error(decoded.error);

      const prompt = buildPrompt({
        name: result.name,
        starLineage: result.final_type,
        sun: astro.sun,
        ascendant: astro.ascendant,
        lifePath: astro.lifePath,
        age,
        rodInstrukce: instrukce,
        decoded,
      });

      obsah = await callClaude(prompt);

      await db.from("mapy").update({
        obsah,
        model: MODEL,
        status: "generated",
        generated_at: new Date().toISOString(),
        profil: {
          sun: astro.sun,
          ascendant: astro.ascendant,
          lifePath: astro.lifePath,
          age,
          rod,
          starLineage: result.final_type,
          warnings: decoded.warnings,
        },
        error_detail: null,
      }).eq("id", mapaId);
    }

    if (!obsah) throw new Error("Mapa nemá obsah k odeslání.");

    // ── PDF + e-mail ──
    const pdfBuffer = await renderMapaPDF({
      name: result.name,
      starLineage: result.final_type,
      profil: { sun: astro.sun, ascendant: astro.ascendant, lifePath: astro.lifePath },
      markdown: obsah,
    });

    const siteUrl = (process.env.SITE_URL || "").replace(/\/$/, "");
    const odkaz = `${siteUrl}/mapa?m=${mapa.id}`;

    await sendMapaEmail({
      toEmail: mapa.email || result.email,
      toName: result.name,
      params: { JMENO: result.name, ODKAZ: odkaz, ROD: result.final_type },
      pdfBuffer,
      pdfName: "Mapa-zivota-Oaza-Adamanthea.pdf",
    });

    await db.from("mapy").update({
      status: "sent",
      sent_at: new Date().toISOString(),
    }).eq("id", mapaId);

    return { ok: true, odkaz };
  } catch (err) {
    await db.from("mapy").update({
      status: "error",
      error_detail: String(err.message || err).slice(0, 900),
    }).eq("id", mapaId);
    throw err;
  }
}

module.exports = { generateMapa };
