// Generátor PDF pro Mapu života přes @react-pdf/renderer.
// Bez JSX (čistý React.createElement) — běží jako Node modul na Vercelu bez build kroku.
// Font EB Garamond (Regular/Bold/Italic) přibalený v projektu kvůli české diakritice.

const React = require("react");
const path = require("path");
const { Document, Page, Text, View, Font, StyleSheet, renderToBuffer } = require("@react-pdf/renderer");

const FONT_DIR = path.join(process.cwd(), "fonts");
Font.register({
  family: "EBGaramond",
  fonts: [
    { src: path.join(FONT_DIR, "EBGaramond-Regular.ttf"), fontWeight: "normal" },
    { src: path.join(FONT_DIR, "EBGaramond-Bold.ttf"), fontWeight: "bold" },
    { src: path.join(FONT_DIR, "EBGaramond-Italic.ttf"), fontStyle: "italic" },
  ],
});
// Vypnout dělení slov (čeština by se dělila špatně).
Font.registerHyphenationCallback((word) => [word]);

const C = {
  bg: "#0d1430",
  bgSoft: "#141d44",
  gold: "#d4af6a",
  goldBright: "#f0d9a0",
  text: "#e8e6df",
  textSoft: "#b9b6ab",
  border: "#3a3f5c",
};

const st = StyleSheet.create({
  page: { backgroundColor: C.bg, color: C.text, fontFamily: "EBGaramond", fontSize: 11.5, lineHeight: 1.6, paddingTop: 52, paddingBottom: 58, paddingHorizontal: 56 },
  kicker: { color: C.gold, fontSize: 10, letterSpacing: 4, textAlign: "center", marginBottom: 6 },
  title: { color: C.goldBright, fontSize: 30, textAlign: "center", marginBottom: 2 },
  subtitle: { color: C.textSoft, fontSize: 12, fontStyle: "italic", textAlign: "center", marginBottom: 22 },
  card: { borderWidth: 1, borderColor: C.gold, borderRadius: 6, backgroundColor: C.bgSoft, padding: 16, marginBottom: 24 },
  cardRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 4 },
  cardLabel: { color: C.textSoft, fontSize: 10, letterSpacing: 1 },
  cardValue: { color: C.text, fontSize: 11.5 },
  h2: { color: C.gold, fontSize: 17, marginTop: 18, marginBottom: 8 },
  h2rule: { borderBottomWidth: 0.7, borderBottomColor: C.gold, opacity: 0.55, marginBottom: 10 },
  h3: { color: C.goldBright, fontSize: 13, marginTop: 10, marginBottom: 5 },
  p: { marginBottom: 8, textAlign: "justify" },
  li: { flexDirection: "row", marginBottom: 5, paddingLeft: 6 },
  liBullet: { color: C.gold, width: 14 },
  liText: { flex: 1, textAlign: "justify" },
  bold: { fontWeight: "bold", color: C.goldBright },
  footer: { position: "absolute", bottom: 26, left: 56, right: 56, flexDirection: "row", justifyContent: "space-between", color: C.textSoft, fontSize: 9 },
});

const h = React.createElement;

// Inline markdown (**tučně**) → pole Text elementů.
function inline(text, keyBase) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map((p, i) => {
    const m = p.match(/^\*\*([^*]+)\*\*$/);
    return m
      ? h(Text, { key: `${keyBase}-${i}`, style: st.bold }, m[1])
      : h(Text, { key: `${keyBase}-${i}` }, p.replace(/(^|[^*])\*([^*]+)\*/g, "$1$2"));
  });
}

// Markdown → react-pdf elementy (řádek po řádku, stejná logika jako web renderer).
function mdToElements(md) {
  const out = [];
  let k = 0;
  for (const raw of String(md).split("\n")) {
    const line = raw.trimEnd();
    if (!line.trim()) continue;
    if (line.startsWith("## ")) {
      out.push(h(Text, { key: k++, style: st.h2 }, line.slice(3)));
      out.push(h(View, { key: k++, style: st.h2rule }));
    } else if (line.startsWith("### ")) {
      out.push(h(Text, { key: k++, style: st.h3 }, line.slice(4)));
    } else if (/^[-*•]\s+/.test(line)) {
      out.push(h(View, { key: k++, style: st.li },
        h(Text, { style: st.liBullet }, "✦"),
        h(Text, { style: st.liText }, ...inline(line.replace(/^[-*•]\s+/, ""), `li${k}`))
      ));
    } else {
      out.push(h(Text, { key: k++, style: st.p }, ...inline(line, `p${k}`)));
    }
  }
  return out;
}

// profil: { name, starLineage, sun, ascendant|null, lifePath }
async function renderMapaPDF({ name, starLineage, profil, markdown }) {
  const rows = [
    ["JMÉNO", name],
    ["HVĚZDNÝ ROD", starLineage],
    ["SLUNCE", profil.sun],
    ...(profil.ascendant ? [["ASCENDENT", profil.ascendant]] : []),
    ["ČÍSLO ŽIVOTNÍ CESTY", String(profil.lifePath)],
  ];

  const doc = h(Document, { title: `Mapa života — ${name}`, author: "Oáza Adamanthea" },
    h(Page, { size: "A4", style: st.page },
      h(Text, { style: st.kicker }, "OÁZA ADAMANTHEA"),
      h(Text, { style: st.title }, "Mapa života"),
      h(Text, { style: st.subtitle }, "osobní průvodce cykly tvé duše"),
      h(View, { style: st.card },
        ...rows.map((r, i) => h(View, { key: i, style: st.cardRow },
          h(Text, { style: st.cardLabel }, r[0]),
          h(Text, { style: st.cardValue }, r[1] || "—")
        ))
      ),
      ...mdToElements(markdown),
      h(Text, { style: st.footer, fixed: true, render: ({ pageNumber, totalPages }) => null }),
      h(View, { style: st.footer, fixed: true },
        h(Text, null, "Oáza Adamanthea — Crystal & Retreat centrum"),
        h(Text, { render: ({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}` })
      )
    )
  );

  return renderToBuffer(doc);
}

module.exports = { renderMapaPDF };
