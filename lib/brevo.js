// Odeslání transakčního e-mailu přes Brevo API v3 — šablona + PDF příloha v jednom volání.
// Env: BREVO_API_KEY, BREVO_TEMPLATE_ID (=2), volitelně BREVO_SENDER_EMAIL, BREVO_REPLY_EMAIL.
// Šablona #2 „Mapa života" používá proměnné: params.JMENO, params.ODKAZ, params.ROD.

const SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || "info@oaza-adamanthea.cz";
const SENDER_NAME = "Oáza Adamanthea";
// Odesílá se z adresy info@ (ověřená doména); odpovědi míří do schránky, kterou čteme.
const REPLY_EMAIL = process.env.BREVO_REPLY_EMAIL || "oaza.adamanthea@gmail.com";

async function sendMapaEmail({ toEmail, toName, params, pdfBuffer, pdfName }) {
  const templateId = parseInt(process.env.BREVO_TEMPLATE_ID, 10);
  if (!templateId) throw new Error("Chybí BREVO_TEMPLATE_ID.");
  if (!process.env.BREVO_API_KEY) throw new Error("Chybí BREVO_API_KEY.");

  const body = {
    templateId,
    sender: { name: SENDER_NAME, email: SENDER_EMAIL },
    replyTo: { name: SENDER_NAME, email: REPLY_EMAIL },
    to: [{ email: toEmail, name: toName || undefined }],
    params,
  };
  if (pdfBuffer) {
    body.attachment = [{ name: pdfName || "Mapa-zivota.pdf", content: pdfBuffer.toString("base64") }];
  }

  const r = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: { "Content-Type": "application/json", "api-key": process.env.BREVO_API_KEY },
    body: JSON.stringify(body),
  });
  if (!r.ok) {
    const detail = await r.text().catch(() => "");
    throw new Error(`Brevo odpovědělo ${r.status}: ${detail.slice(0, 300)}`);
  }
  return r.json();
}

module.exports = { sendMapaEmail };
