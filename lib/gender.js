// Odhad gramatického rodu z křestního jména (pro oslovení v mapě a e-mailu).
// Nejednoznačná jména → neutrál (mapa se formuluje bez rodově zabarvených tvarů).

const MALE_A = new Set(["honza","jirka","ondra","pepa","franta","standa","tonda","jarda","kuba","vojta","matya","zbyna","luka","nikita","ilja","sasa-m"]);
const AMBIGUOUS = new Set(["misa","sasa","nikola","alex","rene","jindra","mira","lada","vlasta","robin","andrea-sk","stepa","pata","kaja","jara","sky"]);
const FEMALE_NON_A = new Set(["dagmar","miriam","ester","ingrid","karin","nikol","doris","ruth","dora","noemi","rachel","karolin","elen","ellen","ines","agnes","mercedes","dolores","lilien","zoe","chloe","amelie","emilie","rozalie","natalie","amalie","otylie","cecilie","julie","marie","lucie","alice","sofie","zofie","evelin","katrin"]);

function norm(name) {
  return String(name || "")
    .trim().split(/\s+/)[0]
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// → { rod: 'f' | 'm' | 'x', instrukce }
function detectRod(name) {
  const n = norm(name);
  let rod = "x";
  if (n) {
    if (AMBIGUOUS.has(n)) rod = "x";
    else if (MALE_A.has(n)) rod = "m";
    else if (FEMALE_NON_A.has(n)) rod = "f";
    else if (/[ae]$/.test(n)) rod = n.endsWith("e") && !/ie$/.test(n) ? "x" : "f";
    else rod = "m";
  }
  const instrukce = rod === "f"
    ? "Oslovuj v ženském rodě (např. ‚přišla jsi', ‚naučila ses')."
    : rod === "m"
      ? "Oslovuj v mužském rodě (např. ‚přišel jsi', ‚naučil ses')."
      : "Rod není jistý — formuluj věty tak, aby nevyžadovaly rodově zabarvené tvary (vyhni se příčestím typu přišel/přišla; používej přítomný čas, rozkazovací způsob, podstatná jména).";
  return { rod, instrukce };
}

module.exports = { detectRod };
