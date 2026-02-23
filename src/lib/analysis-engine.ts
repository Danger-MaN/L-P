import { questions, nutrients, type Language } from "./survey-data";

export interface DeficiencyResult {
  nutrientId: string;
  score: number;
  maxPossible: number;
  percentage: number;
  level: "low" | "moderate" | "high";
}

export interface ToxicityResult {
  nutrientId: string;
  score: number;
  maxPossible: number;
  percentage: number;
  level: "low" | "moderate" | "high";
}

export function analyzeDeficiencies(answers: Record<string, boolean>): DeficiencyResult[] {
  const scores: Record<string, number> = {};
  const maxScores: Record<string, number> = {};

  for (const q of questions) {
    for (const d of q.deficiencies) {
      maxScores[d.nutrient] = (maxScores[d.nutrient] || 0) + d.score;
    }
  }

  for (const q of questions) {
    if (answers[q.id]) {
      for (const d of q.deficiencies) {
        scores[d.nutrient] = (scores[d.nutrient] || 0) + d.score;
      }
    }
  }

  const results: DeficiencyResult[] = Object.keys(maxScores)
    .map((nutrientId) => {
      const score = scores[nutrientId] || 0;
      const maxPossible = maxScores[nutrientId];
      const percentage = Math.round((score / maxPossible) * 100);
      const level: "low" | "moderate" | "high" =
        percentage >= 60 ? "high" : percentage >= 30 ? "moderate" : "low";
      return { nutrientId, score, maxPossible, percentage, level };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.percentage - a.percentage);

  return results;
}

export function analyzeToxicity(answers: Record<string, boolean>): ToxicityResult[] {
  const scores: Record<string, number> = {};
  const maxScores: Record<string, number> = {};

  for (const q of questions) {
    if (!q.toxicity) continue;
    for (const t of q.toxicity) {
      maxScores[t.nutrient] = (maxScores[t.nutrient] || 0) + t.score;
    }
  }

  for (const q of questions) {
    if (!q.toxicity || !answers[q.id]) continue;
    for (const t of q.toxicity) {
      scores[t.nutrient] = (scores[t.nutrient] || 0) + t.score;
    }
  }

  const results: ToxicityResult[] = Object.keys(maxScores)
    .map((nutrientId) => {
      const score = scores[nutrientId] || 0;
      const maxPossible = maxScores[nutrientId];
      const percentage = Math.round((score / maxPossible) * 100);
      const level: "low" | "moderate" | "high" =
        percentage >= 60 ? "high" : percentage >= 30 ? "moderate" : "low";
      return { nutrientId, score, maxPossible, percentage, level };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.percentage - a.percentage);

  return results;
}

export function getLabel(obj: { en: string; ar: string }, lang: Language) {
  return obj[lang];
}
