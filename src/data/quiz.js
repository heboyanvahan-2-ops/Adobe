/**
 * Թեստերի մակարդակներ — նույն հարցերը, ինչ /product/photoshop բաժիններում։
 */

import { photoshopSectionQuiz } from './photoshopSectionQuiz';
import { photoshopLessons } from './photoshopLessons';

/** @typedef {{ question: string, options: [string,string,string,string], correctIndex: number }} QuizQuestion */
/** @typedef {{ level: number, title: string, subtitle: string, productId: string, questions: QuizQuestion[] }} QuizLevel */

/** Երթուղու հիմքը թեստի մակարդակների ընտրիչի համար `react-router`-ում */
export const quizBasePath = '/quiz';

/**
 * @param {string} productId
 * @returns {QuizLevel | undefined}
 */
export function getQuizLevelByProductId(productId) {
  return quizLevels.find((l) => l.productId === productId);
}

/** @returns {number} */
export function getTotalQuizQuestions() {
  return quizLevels.reduce((sum, level) => sum + level.questions.length, 0);
}

/** @type {QuizLevel[]} */
export const quizLevels = photoshopLessons
  .filter((lesson) => (photoshopSectionQuiz[lesson.id]?.length ?? 0) > 0)
  .map((lesson, index) => ({
    level: index + 1,
    productId: lesson.id,
    title: `Մակարդակ ${index + 1} · ${lesson.title}`,
    subtitle: `Adobe Photoshop — ${lesson.title}`,
    questions: photoshopSectionQuiz[lesson.id],
  }));
