// Dekódování odpovědí z kvízu: indexy uložené v Supabase (results.answers)
// → čitelné dvojice otázka/odpověď pro prompt Mapy života.
//
// Vstup: answers = { phase1: [3,2,4,...], phase2: [0,1,...] }, groupResult = "Pleiades" apod.

const { QUESTIONS } = require("./questions");

function decodeAnswers(answers, groupResult) {
  const warnings = [];
  if (!answers || !Array.isArray(answers.phase1) || !Array.isArray(answers.phase2)) {
    return { ok: false, error: "Chybí uložené odpovědi (answers)." };
  }

  const group = QUESTIONS.phase2[groupResult];
  if (!group) {
    return { ok: false, error: `Neznámý hvězdný rod "${groupResult}" — nelze dekódovat fázi 2.` };
  }

  const dec = (questions, indices, label) => {
    if (indices.length !== questions.length) {
      warnings.push(`${label}: počet odpovědí (${indices.length}) nesedí na počet otázek (${questions.length}).`);
    }
    return questions.map((q, i) => {
      const idx = indices[i];
      const a = Number.isInteger(idx) && q.options[idx] !== undefined
        ? q.options[idx]
        : "(odpověď nezaznamenána)";
      if (a === "(odpověď nezaznamenána)") warnings.push(`${label} otázka ${i + 1}: index ${idx} mimo rozsah.`);
      return { q: q.text, a };
    });
  };

  return {
    ok: true,
    groupName: group.groupName,
    phase1: dec(QUESTIONS.phase1, answers.phase1, "Fáze 1"),
    phase2: dec(group.questions, answers.phase2, "Fáze 2"),
    warnings,
  };
}

module.exports = { decodeAnswers };
