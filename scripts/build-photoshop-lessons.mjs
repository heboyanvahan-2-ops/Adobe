import fs from 'node:fs';

const paras = JSON.parse(fs.readFileSync('scripts/docx-paragraphs.json', 'utf8'));

function slice(start, end) {
  return paras
    .filter((p) => p.i >= start && p.i <= end && p.text)
    .map((p) => p.text);
}

function imagesIn(start, end) {
  return paras
    .filter((p) => p.i >= start && p.i <= end && p.image)
    .map((p) => ({
      src: p.image,
      alt: p.text || 'Adobe Photoshop',
      caption: p.text || undefined,
    }));
}

function stepsFrom(start, end) {
  return slice(start, end);
}

function splitMergedStatus(text) {
  const marker = 'Գործիքների վահանակին';
  const idx = text.indexOf(marker);
  if (idx === -1) return [text];
  const a = text.slice(0, idx).replace(/:$/, ':').trim();
  const b = text.slice(idx).trim();
  return [a, b].filter(Boolean);
}

function cleanParagraphs(arr) {
  const out = [];
  for (const p of arr) {
    if (p.includes('Գործիքների վահանակին') && p.includes('Վիճակի տողը')) {
      out.push(...splitMergedStatus(p));
    } else out.push(p);
  }
  return out;
}

/** @type {import('../src/data/photoshopLessons.js').PhotoshopLesson[]} */
const lessons = [
  {
    id: 'intro',
    title: 'Adobe Photoshop խմբագրիչ',
    paragraphs: slice(2, 4),
    steps: [paras.find((p) => p.i === 5)?.text].filter(Boolean),
  },
  {
    id: 'interface',
    title: 'Խմբագրիչի պատուհան',
    paragraphs: cleanParagraphs(slice(7, 9)),
    sections: [
      {
        title: 'Պատուհանի տարրերը',
        paragraphs: cleanParagraphs([paras.find((p) => p.i === 7)?.text].filter(Boolean)),
        image: {
          src: '/images/photoshop-lessons/lesson-01.png',
          alt: 'Adobe Photoshop խմբագրիչի պատուհան',
        },
      },
      {
        title: 'Վերնագիր և վիճակի տող',
        paragraphs: cleanParagraphs(slice(8, 9)),
      },
    ],
  },
  {
    id: 'tools',
    title: 'Գործիքների վահանակ',
    paragraphs: [
      'Գործիքների վահանակին տեղակայված են պատկեր ստեղծելու և խմբագրելու համար անհրաժեշտ գործիքները:',
    ],
    sections: [
      {
        title: 'Գործիք ընտրելը',
        steps: stepsFrom(10, 12),
      },
      {
        title: 'Օժանդակ գործիք',
        steps: stepsFrom(13, 16),
      },
      {
        title: 'Հատկությունների վահանակ',
        paragraphs: slice(17, 17),
      },
      {
        title: 'Մենյուի տող և օժանդակ վահանակներ',
        paragraphs: slice(18, 19),
      },
    ],
  },
  {
    id: 'new-doc',
    title: 'Նոր փաստաթուղթ և ելք',
    sections: [
      {
        title: 'File → New',
        paragraphs: slice(20, 20),
        steps: stepsFrom(21, 24),
      },
      {
        title: 'Ծրագրից դուրս գալ',
        paragraphs: slice(25, 25),
        steps: stepsFrom(26, 27),
      },
    ],
  },
  {
    id: 'image-work',
    title: 'Աշխատանք պատկերի հետ',
    sections: [
      {
        title: 'Zoom և Navigator',
        paragraphs: slice(28, 28),
        steps: stepsFrom(29, 35),
        image: {
          src: '/images/photoshop-lessons/lesson-02.png',
          alt: 'Zoom գործիք և Navigator վահանակ',
        },
      },
      {
        title: 'Image Size',
        paragraphs: slice(37, 37),
        steps: stepsFrom(38, 39),
        image: {
          src: '/images/photoshop-lessons/lesson-03.png',
          alt: 'Image Size պատուհան',
        },
      },
    ],
  },
  {
    id: 'selection',
    title: 'Նշված տիրույթ',
    paragraphs: slice(42, 43),
    sections: [
      {
        title: 'Rectangular Marquee (▭)',
        steps: stepsFrom(44, 47),
      },
      {
        title: 'Lasso (🧲)',
        steps: stepsFrom(48, 52),
      },
      {
        title: 'Polygonal Lasso (⌗)',
        steps: stepsFrom(53, 59),
      },
      {
        title: 'Magnetic Lasso',
        steps: stepsFrom(60, 66),
      },
      {
        title: 'Magic Wand (🪄)',
        paragraphs: [paras.find((p) => p.i === 67)?.text].filter(Boolean),
        steps: stepsFrom(68, 71),
        image: {
          src: '/images/photoshop-lessons/lesson-04.png',
          alt: 'Magic Wand — Tolerance (նկ. 4.8.)',
          caption: 'նկ. 4.8. — Tolerance դաշտ',
        },
      },
      {
        title: 'Feather, Inverse, Crop',
        paragraphs: [
          paras.find((p) => p.i === 73)?.text,
          paras.find((p) => p.i === 78)?.text,
        ].filter(Boolean),
        steps: stepsFrom(74, 76).concat(stepsFrom(79, 81)),
        image: {
          src: '/images/photoshop-lessons/lesson-05.png',
          alt: 'Feather Selection (նկ. 4.9.)',
          caption: 'նկ. 4.9. — Feather Radius',
        },
      },
    ],
  },
  {
    id: 'colors',
    title: 'Նկարչության գործիքներ',
    paragraphs: slice(82, 83),
    sections: [
      {
        title: 'Հիմնական և ֆոնի գույն',
        steps: stepsFrom(85, 88),
        image: {
          src: '/images/photoshop-lessons/lesson-06.png',
          alt: 'Color Picker — հիմնական և ֆոնի գույներ',
        },
      },
    ],
  },
  {
    id: 'layers',
    title: 'Աշխատանք շերտերի հետ',
    paragraphs: slice(91, 92),
    sections: [
      {
        title: 'Շերտերի վահանակ',
        steps: stepsFrom(93, 95),
        image: {
          src: '/images/photoshop-lessons/lesson-07.png',
          alt: 'Layers վահանակ',
        },
      },
      {
        title: 'Շերտերի վերադրում',
        steps: stepsFrom(97, 101),
        image: {
          src: '/images/photoshop-lessons/lesson-08.png',
          alt: 'Բազմաշերտ պատկեր',
        },
      },
      {
        title: 'Շերտի կարգավորում',
        steps: stepsFrom(102, 111),
      },
    ],
  },
  {
    id: 'retouch',
    title: 'Շտկում և ցայտունություն',
    paragraphs: slice(112, 113),
    sections: [
      {
        title: 'Sharpen',
        steps: stepsFrom(114, 118),
      },
      {
        title: 'Dust & Scratches',
        paragraphs: slice(119, 119),
        steps: stepsFrom(120, 124),
      },
    ],
  },
];

function esc(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function fmtImage(img, indent = '        ') {
  if (!img) return '';
  let s = `${indent}image: {\n`;
  s += `${indent}  src: '${esc(img.src)}',\n`;
  s += `${indent}  alt: '${esc(img.alt)}',\n`;
  if (img.caption) s += `${indent}  caption: '${esc(img.caption)}',\n`;
  s += `${indent}},\n`;
  return s;
}

function fmtArr(arr, key, indent) {
  if (!arr?.length) return '';
  let s = `${indent}${key}: [\n`;
  for (const item of arr) s += `${indent}  '${esc(item)}',\n`;
  s += `${indent}],\n`;
  return s;
}

function fmtSection(sec, indent = '      ') {
  let s = `${indent}{\n`;
  if (sec.title) s += `${indent}  title: '${esc(sec.title)}',\n`;
  s += fmtArr(sec.paragraphs, 'paragraphs', `${indent}  `);
  s += fmtArr(sec.steps, 'steps', `${indent}  `);
  if (sec.image) s += fmtImage(sec.image, `${indent}  `);
  s += `${indent}},\n`;
  return s;
}

function fmtLesson(l) {
  let s = '  {\n';
  s += `    id: '${l.id}',\n`;
  s += `    title: '${esc(l.title)}',\n`;
  s += fmtArr(l.paragraphs, 'paragraphs', '    ');
  s += fmtArr(l.steps, 'steps', '    ');
  if (l.images?.length) {
    s += '    images: [\n';
    for (const img of l.images) {
      s += '      {\n';
      s += `        src: '${esc(img.src)}',\n`;
      s += `        alt: '${esc(img.alt)}',\n`;
      if (img.caption) s += `        caption: '${esc(img.caption)}',\n`;
      s += '      },\n';
    }
    s += '    ],\n';
  }
  if (l.sections?.length) {
    s += '    sections: [\n';
    for (const sec of l.sections) s += fmtSection(sec);
    s += '    ],\n';
  }
  s += '  }';
  return s;
}

const out = `/**
 * Adobe Photoshop — учебные разделы из 2.docx (9-րդ դասարան).
 * Тексты и иллюстрации извлечены из Word-файла.
 */

/** @typedef {{ src: string, alt: string, caption?: string }} LessonImage */
/** @typedef {{ title?: string, paragraphs?: string[], steps?: string[], image?: LessonImage }} LessonSection */
/** @typedef {{ id: string, title: string, paragraphs?: string[], steps?: string[], images?: LessonImage[], sections?: LessonSection[] }} PhotoshopLesson */

/** @type {PhotoshopLesson[]} */
export const photoshopLessons = [
${lessons.map(fmtLesson).join(',\n')}
];

export function getPhotoshopLessonById(id) {
  return photoshopLessons.find((l) => l.id === id);
}
`;

fs.writeFileSync('src/data/photoshopLessons.js', out, 'utf8');
console.log('Wrote', lessons.length, 'lessons');
