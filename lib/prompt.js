// Prompt pro generování Mapy života — převzato 1:1 z odladěného prototypu
// (mapa-zivota-v2-FINAL), rozšířeno o podmíněný ascendent a instrukci rodu.

// Steinerův rámec sedmiletek (kostra časové osy)
const SEPTENNIA = [
  [0, 7,  "tělo a smysly — utváření fyzického základu, důvěra ve svět, napodobování"],
  [7, 14, "cítění a duše — rozvoj citového života, autorita, fantazie, rytmus"],
  [14, 21, "myšlení a individualita — probuzení vlastního úsudku, ideály, hledání pravdy"],
  [21, 28, "pocitová duše — první samostatné zakotvení ve světě, vztahy, identita skrze prožitek"],
  [28, 35, "rozumová duše — budování, zodpovědnost, vyjasňování hodnot a směru"],
  [35, 42, "vědomá duše — zrání, integrace, otázka pravého já a smyslu"],
  [42, 49, "duchovní zrání — obrat dovnitř, transformace, hledání hlubšího povolání"],
  [49, 56, "moudrost a předávání — zrání darů, učitelství, služba z plnosti"],
  [56, 63, "duchovní svoboda — odpoutávání, esence, nadhled"],
  [63, 70, "integrace a odkaz — celistvost, smíření, předávání moudrosti dál"],
];

function septenniaBlock() {
  return SEPTENNIA.map(([a, b, t]) => `- ${a}–${b} let: ${t}`).join("\n");
}

function currentSeptenary(a) {
  const start = Math.floor(a / 7) * 7;
  return { start, end: start + 7 };
}

// Planetární cykly vázané na věk (univerzální body, bez efemerid)
function planetaryCycles(a) {
  const ev = [];
  const near = (target, label, span = 1.5) => {
    if (Math.abs(a - target) <= span) ev.push(`PRÁVĚ TEĎ (~${target} let): ${label}`);
    else if (a < target && target - a <= 4) ev.push(`BLÍŽÍ SE (~${target} let): ${label}`);
    else if (a > target && a - target <= 4) ev.push(`NEDÁVNO PROŠLO (~${target} let): ${label}`);
  };
  near(29, "Saturnův návrat — dospělost duše, převzetí vlastní autority a zodpovědnosti");
  near(59, "Druhý Saturnův návrat — zralost, bilance, nová životní etapa");
  near(36, "Saturnův čtvrtcyklus — konsolidace, prověření základů");
  near(44, "Saturnova opozice — tlak na pravdivost struktur, co už neslouží");
  near(51, "Saturnův čtvrtcyklus — restrukturalizace ze zralosti");
  [12, 24, 36, 48, 60].forEach(t => near(t, "Jupiterův návrat — otevření, růst, nové příležitosti a víra"));
  near(42, "Uranova opozice — krize/probuzení středu života, touha po autenticitě a svobodě");
  near(50, "Chironův návrat — integrace nejhlubšího zranění v léčivý dar");
  return ev.length ? ev.join("\n") : "(v tomto věku žádný z velkých planetárních mezníků není těsně aktivní — popisuj plynulé zrání cyklu)";
}

function answersBlock(decoded) {
  const fmt = (arr) => arr.map((x, i) => `${i + 1}. ${x.q}\n   → ${x.a}`).join("\n");
  return `FÁZE 1 — jádro duše (jak vnímá svět, co ji zraňuje, vzorce, dary):\n${fmt(decoded.phase1)}\n\nFÁZE 2 — upřesnění v rámci hvězdného rodu:\n${fmt(decoded.phase2)}`;
}

// profile: { name, starLineage, sun, ascendant|null, lifePath, age, rodInstrukce, decoded }
function buildPrompt(profile) {
  const { name, starLineage, sun, ascendant, lifePath, age, rodInstrukce, decoded } = profile;
  const yearNow = new Date().getFullYear();
  const cyc = currentSeptenary(age);
  const ascLine = ascendant ? `, Ascendent: ${ascendant}` : "";

  return `Jsi moudrý duchovní průvodce z Oázy Adamanthea. Píšeš hluboce osobní "Mapu života" pro člověka, který už prošel kvízem a zná svůj hvězdný původ. Tato mapa není o tom KDO je — to už ví. Je o tom KAM směřuje a JAK pracovat s tím, co v sobě nese, v čase.

Piš česky, vroucně a poeticky, ale zároveň konkrétně a prakticky — člověk má po přečtení vědět, na čem pracovat. Oslovuj přímo "ty". ${rodInstrukce} Nepoužívej klišé ani vágní fráze. Tohle NENÍ obecný popis hvězdného rodu — je to mapa TÉTO konkrétní duše. Opírej se o její vlastní odpovědi níže: vracej se k nim, pojmenovávej její konkrétní vzorce, citlivě s nimi pracuj.

Údaje o člověku:
- Jméno: ${name}
- Hvězdný rod: ${starLineage}
- Slunce: ${sun}${ascLine}, číslo životní cesty: ${lifePath}
- Aktuální věk: ${age} let (rok ${yearNow}), nachází se v 7letém cyklu ${cyc.start}–${cyc.end} let

DŮLEŽITÉ: Datum, čas a místo narození slouží POUZE pro výpočet astrologie a numerologie. V textu je nikdy nezmiňuj ani neuváděj.

VLASTNÍ ODPOVĚDI TÉTO DUŠE Z KVÍZU (toto je tvůj hlavní zdroj personalizace — pracuj s nimi konkrétně, ne obecně):
${answersBlock(decoded)}

RÁMEC SEDMILETÝCH CYKLŮ (kostra časové osy — drž se těchto témat, nevař fáze z obecné paměti):
${septenniaBlock()}

PLANETÁRNÍ CYKLY AKTIVNÍ V TOMTO VĚKU (${age} let) — nebeské "počasí", které vrství přes sedmiletky. Zapracuj je do sekce o aktuálním cyklu a cestě vpřed jako hlubší rytmus, ne jako věštbu:
${planetaryCycles(age)}

Napiš mapu přesně v těchto sekcích, každou uveď nadpisem druhé úrovně (##):

## Časová osa tvé duše
Rozděl život na 7leté cykly podle rámce výše. Každý uplynulý cyklus uveď nadpisem třetí úrovně (### 0–7 let, ### 7–14 let, …) a napiš STRUČNĚ (2–3 věty): jeho téma dle rámce + jak se nejspíš projevilo právě u TÉTO duše (propoj s jejími odpověďmi). Aktuální cyklus (${cyc.start}–${cyc.end} let) a nejbližší 1–2 budoucí rozepiš PODROBNĚJI — to je těžiště — a vetkni do nich relevantní planetární cykly z přehledu výše. U budoucích cyklů piš jako pozvání a směřování, ne jako věštbu.

## Klíčové lekce této inkarnace
3–5 hlavních lekcí, které si tato duše přišla zpracovat. Odvoď je z jejích konkrétních odpovědí.

## Výzvy, které tě formují
Konkrétní vnitřní vzorce, zranění a bloky — pojmenuj přesně ty, které vystupují z jejích odpovědí, a vysvětli proč tu jsou.

## Dary, které neseš
Silné stránky a schopnosti, které tato duše přináší světu, a jak je naplno otevřít.

## Kde se právě nacházíš
Specificky pro věk ${age}, cyklus ${cyc.start}–${cyc.end} a rok ${yearNow} — propoj sedmiletkové téma s aktivními planetárními cykly a vysvětli, jaká energie je teď ve hře a proč.

## Cesta vpřed
Konkrétní, praktické kroky a práce se sebou — co dělat, čeho si všímat, jak léčit a růst. Navaž na aktuální cyklus a jeho planetární rytmus.

Piš plynule, formátuj v Markdownu (## nadpisy sekcí, ### nadpisy cyklů, **tučně** pro zdůraznění, odrážky kde to dává smysl).`;
}

module.exports = { buildPrompt, currentSeptenary };
