/**
 * Տարածում է ճիշտ պատասխանները տարբեր տարբերակների վրա (0–3)։
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const quizPath = path.join(__dirname, '../src/data/photoshopSectionQuiz.js');

const TARGET_PATTERN = [1, 2, 3, 0, 2];

function moveCorrectToIndex(question, targetIndex) {
  const correctAnswer = question.options[question.correctIndex];
  const wrongAnswers = question.options.filter((_, i) => i !== question.correctIndex);
  const options = [];
  let wrongIdx = 0;

  for (let i = 0; i < 4; i += 1) {
    if (i === targetIndex) {
      options.push(correctAnswer);
    } else {
      options.push(wrongAnswers[wrongIdx]);
      wrongIdx += 1;
    }
  }

  return {
    ...question,
    options,
    correctIndex: targetIndex,
  };
}

const mod = await import(`file://${quizPath.replace(/\\/g, '/')}`);
const { photoshopSectionQuiz } = mod;

let globalIdx = 0;
const shuffled = {};

for (const [sectionId, questions] of Object.entries(photoshopSectionQuiz)) {
  shuffled[sectionId] = questions.map((question) => {
    const targetIndex = TARGET_PATTERN[globalIdx % TARGET_PATTERN.length];
    globalIdx += 1;
    return moveCorrectToIndex(question, targetIndex);
  });
}

function formatQuestion(q, indent) {
  const optLines = q.options
    .map((opt) => `${indent}        '${opt.replace(/'/g, "\\'")}',`)
    .join('\n');

  return `${indent}    {
${indent}      question: '${q.question.replace(/'/g, "\\'")}',
${indent}      options: [
${optLines}
${indent}      ],
${indent}      correctIndex: ${q.correctIndex},
${indent}    }`;
}

const sections = Object.entries(shuffled)
  .map(([id, questions]) => {
    const key = `'${id}'`;
    const body = questions.map((q) => formatQuestion(q, '  ')).join(',\n');
    return `  ${key}: [\n${body},\n  ]`;
  })
  .join(',\n\n');

const output = `/**
 * 5 հարց յուրաքանչյուր Adobe Photoshop բաժնի համար (Word դասագրք)։
 * Յուրաքանչյուր հարցում 4 պատասխան, 1-ը ճիշտ է։
 */

/** @typedef {{ question: string, options: [string,string,string,string], correctIndex: number }} SectionQuizQuestion */

/** @type {Record<string, SectionQuizQuestion[]>} */
export const photoshopSectionQuiz = {
${sections},
};

export function getSectionQuiz(lessonId) {
  return photoshopSectionQuiz[lessonId] ?? [];
}
`;

fs.writeFileSync(quizPath, output, 'utf8');

const counts = [0, 0, 0, 0];
Object.values(shuffled)
  .flat()
  .forEach((q) => {
    counts[q.correctIndex] += 1;
  });

console.log('Updated quiz answers. correctIndex distribution:', counts);
