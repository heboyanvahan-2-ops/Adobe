import fs from 'node:fs';

const extract = fs.readFileSync('scripts/docx-extract.txt', 'utf8');

const intro1 =
  'Adobe Photoshop խմբագրիչը նախատեսված է կետային գրաֆիկայի օգնությամբ պատկերներ ստեղծելու և դրանք խմբագրելու համար: Այս խմբագրիչից հաջողությամբ օգտվում են նաև լուսանկարիչները՝ լուսանկարները շտկելու, գունային մշակման ենթարկելու, դրանց գեղարվեստական էֆեկտներ տալու համար։';

const interface1 =
  'Adobe Photoshop խմբագրիչի պատուհանը ներառում է հետևյալ տարրերը. պատուհանի վերնագիր, պատուհանի ղեկավարման կոճակներ, մենյուի տող, աշխատանքային տիրույթ, գործիքների վահանակ, հատկությունների վահանակ և վիճակի տող:';

const interface2 =
  'Պատուհանի վերնագիրը ցույց է տալիս ծրագրի տարբերանշանն ու անվանումը՝ Adobe Photoshop:';

const interface3 =
  'Վիճակի տողը նախատեսված է ընթացիկ պատուհանի, աշխատանքային սկավarrassակների և ակտիվ գործիքի պարամետրերը ցուցադրելու համար:';

const layers1 =
  'Adobe Photoshop գրաֆիկական խմբագրիչում շերտը նման է նկար կրող թափանցիկ ժապավենի։ Նման շերտերի վերադրմամբ կարելի է մի քանի կարերից բաղկացած պատկեր ստանալ։';

const retouch1 =
  'Պատկերները, լուսանկարները հաճախ թerություններ են ունենում՝ խnor, անցանկալի բծեր և այլն։ Adobe Photoshop խմբագրիչում նման թerությունները վերացնելու հզոր միջոցներ կան։';

// Pull exact lines from extract when possible
function lineIncludes(substr) {
  return extract.split(/\r?\n/).find((l) => l.includes(substr)) ?? '';
}

const statusLine = lineIncludes('Վիճակի տողը նախատեսված');
const layersLine = lineIncludes('շերտը նման է');
const retouchLine = lineIncludes('թerություններ են ունենում');

const content = `/**
 * Учебные разделы Adobe Photoshop — по материалу 9-го класса.
 */

/** @typedef {{ id: string, title: string, paragraphs: string[], steps?: string[] }} PhotoshopLesson */

/** @type {PhotoshopLesson[]} */
export const photoshopLessons = ${JSON.stringify(
  [
    {
      id: 'intro',
      title: 'Photoshop խմբագրիչ',
      paragraphs: [intro1],
      steps: ['Start → All Programs → Adobe Photoshop'],
    },
    {
      id: 'interface',
      title: 'Խմբագրիչի պատուհան',
      paragraphs: [
        interface1.replace('37934902540', '').trim() || interface1,
        interface2,
        statusLine || interface3,
      ],
    },
    {
      id: 'tools',
      title: 'Գործիքների վահանակ',
      paragraphs: [
        lineIncludes('Գործիքների վահանակին') ||
          'Գործիքների վահանակին տեղակայված են պատկեր ստեղծելու և խմբագրելու համար անհրաժեշտ գործիքները:',
        lineIncludes('Հատկությունների վահանակը') ||
          'Հատկությունների վահանակը հնարավորություն է տալիս սահմանել ընտրված գործիքի պարամետրերը:',
        lineIncludes('Մենյուի տողը') ||
          'Մենյուի տողը բազմաթիվ հրամաններ է պարունակում, որոնք խմբավորված են ըստ նշանակության.',
      ],
      steps: [
        'մկնիկի ցուցիչը տեղադրել գործիքի վրա, սեղմել ձախ սեղմակը',
        'օժանդակ գործիք՝ աջ սեղմակ գործիքի տարբերանշանի վրա',
      ],
    },
    {
      id: 'new-doc',
      title: 'Նոր փաստաթուղթ',
      paragraphs: [
        'Photoshop-ի նոր փաստաթուղթ ստեղծելու համար ընտրել File → New:',
        'Name, Preset Sizes, Width, Height և Mode դաշտերում սահմանել պարամետրերը:',
      ],
      steps: ['File → New', 'Name — անվանում', 'Mode — գունային մոդել'],
    },
    {
      id: 'zoom',
      title: '\u0544\u0561\u057d\u0577\u057f\u0561\u0562 \u0587 Navigator',
      paragraphs: [
        'Zoom գործիքով և ➕/➖ կոճակներով փոխել դիտման չափը:',
        'Window → Navigator — օժանդակ վահանակ:',
      ],
      steps: ['Image → Image Size — Pixel Dimensions և Document Size'],
    },
    {
      id: 'selection',
      title: 'Տիրույթի նշում',
      paragraphs: [
        'Պատկերի տիրույթ նշելուց հետո կարելի է փոխել չափերը, գույները, տեղափոխել և այլն:',
      ],
      steps: [
        '▭ Rectangular Marquee',
        '🧲 Lasso (200% zoom)',
        '⌗ Polygonal Lasso',
        '🧲 Magnetic Lasso',
        '🪄 Magic Wand + Tolerance',
      ],
    },
    {
      id: 'feather-crop',
      title: 'Feather և Crop',
      paragraphs: ['Select → Feather, Inverse, Deselect և ◫ Crop գործիքներ:'],
      steps: ['Select → Inverse', 'Delete', 'Select → Deselect', '◫ Crop'],
    },
    {
      id: 'colors',
      title: 'Գույներ',
      paragraphs: [
        lineIncludes('Գրաֆիկական խմբագրիչներով') ||
          'Գրաֆիկական խմբագրիչներով աշխատելիս գործ ենք ունենում երկու գույների հետ՝ հիմնական և ֆոնի :',
      ],
      steps: ['Color Picker → OK'],
    },
    {
      id: 'layers',
      title: 'Շերտեր',
      paragraphs: [layersLine || layers1],
      steps: ['Window → Layers', 'Opacity — 50%'],
    },
    {
      id: 'retouch',
      title: 'Շտկում և ցայտունություն',
      paragraphs: [retouchLine || retouch1],
      steps: [
        'Filter → Sharpen → Sharpen',
        'Filter → Sharpen → Sharpen More',
        'Filter → Noise → Dust & Scratches',
      ],
    },
  ],
  null,
  2,
)
  .replace(/^/gm, '')
  .replace(/"paragraphs": \[/g, 'paragraphs: [')
  .replace(/"steps": \[/g, 'steps: [')
  .replace(/"id":/g, 'id:')
  .replace(/"title":/g, 'title:')
  .replace(/"/g, "'")};

export function getPhotoshopLessonById(id) {
  return photoshopLessons.find((l) => l.id === id);
}
`;

// JSON.stringify approach produces double quotes - use simpler template
const lessons = [
  {
    id: 'intro',
    title: 'Photoshop խմբագրիչ',
    paragraphs: [intro1],
    steps: ['Start → All Programs → Adobe Photoshop'],
  },
  {
    id: 'interface',
    title: 'Խմբագրիչի պատուհան',
    paragraphs: [interface1, interface2, statusLine || interface3],
  },
  {
    id: 'tools',
    title: 'Գործիքների վահանակ',
    paragraphs: [
      lineIncludes('Գործիքների վահանակին') ||
        'Գործիքների վահանակին տեղակայված են պատկեր ստեղծելու և խմբագրելու համար անհրաժեշտ գործիքները:',
      lineIncludes('Հատկությունների վահանակը') ||
        'Հատկությունների վահանակը հնարավորություն է տալիս սահմանել ընտրված գործիքի պարամետրերը:',
      lineIncludes('Մենյուի տողը') ||
        'Մենյուի տողը բազմաթիվ հրամաններ է պարունակում, որոնք խմբավորված են ըստ նշանակության.',
    ],
    steps: [
      'մկնիկի ցուցիչը տեղադրել գործիքի վրա, սեղմել ձախ սեղմակը',
      'օժանդակ գործիք՝ աջ սեղմակ գործիքի տարբերանշանի վրա',
    ],
  },
  {
    id: 'new-doc',
    title: 'Նոր փաստաթուղթ',
    paragraphs: [
      'Photoshop-ի նոր փաստաթուղթ ստեղծելու համար ընտրել File → New:',
      'Name, Preset Sizes, Width, Height և Mode դաշտերում սահմանել պարամետրերը:',
    ],
    steps: ['File → New', 'Name — անվանում', 'Mode — գունային մոդել'],
  },
  {
    id: 'zoom',
    title: '\u0544\u0561\u057d\u0577\u057f\u0561\u0562 \u0587 Navigator',
    paragraphs: [
      'Zoom գործիքով և ➕/➖ կոճակներով փոխել դիտման չափը:',
      'Window → Navigator — օժանդակ վահանակ:',
    ],
    steps: ['Image → Image Size — Pixel Dimensions և Document Size'],
  },
  {
    id: 'selection',
    title: 'Տիրույթի նշում',
    paragraphs: [
      'Պատկերի տիրույթ նշելուց հետո կարելի է փոխել չափերը, գույները, տեղափոխել և այլն:',
    ],
    steps: [
      '▭ Rectangular Marquee',
      '🧲 Lasso (200% zoom)',
      '⌗ Polygonal Lasso',
      '🧲 Magnetic Lasso',
      '🪄 Magic Wand + Tolerance',
    ],
  },
  {
    id: 'feather-crop',
    title: 'Feather և Crop',
    paragraphs: ['Select → Feather, Inverse, Deselect և ◫ Crop գործիքներ:'],
    steps: ['Select → Inverse', 'Delete', 'Select → Deselect', '◫ Crop'],
  },
  {
    id: 'colors',
    title: 'Գույներ',
    paragraphs: [
      lineIncludes('Գրաֆիկական խմբագրիչներով') ||
        'Գրաֆիկական խմբագրիչներով աշխատելիս գործ ենք ունենում երկու գույների հետ՝ հիմնական և ֆոնի :',
    ],
    steps: ['Color Picker → OK'],
  },
  {
    id: 'layers',
    title: 'Շերտեր',
    paragraphs: [layersLine || layers1],
    steps: ['Window → Layers', 'Opacity — 50%'],
  },
  {
    id: 'retouch',
    title: 'Շտկում և ցայտունություն',
    paragraphs: [retouchLine || retouch1],
    steps: [
      'Filter → Sharpen → Sharpen',
      'Filter → Sharpen → Sharpen More',
      'Filter → Noise → Dust & Scratches',
    ],
  },
];

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function formatLesson(l) {
  const paras = l.paragraphs.map((p) => `      '${esc(p)}',`).join('\n');
  const steps = l.steps
    ? `\n    steps: [\n${l.steps.map((p) => `      '${esc(p)}',`).join('\n')}\n    ],`
    : '';
  return `  {
    id: '${l.id}',
    title: '${esc(l.title)}',
    paragraphs: [
${paras}
    ],${steps}
  }`;
}

const out = `/**
 * Учебные разделы Adobe Photoshop — по материалу 9-го класса.
 */

/** @typedef {{ id: string, title: string, paragraphs: string[], steps?: string[] }} PhotoshopLesson */

/** @type {PhotoshopLesson[]} */
export const photoshopLessons = [
${lessons.map(formatLesson).join(',\n')}
];

export function getPhotoshopLessonById(id) {
  return photoshopLessons.find((l) => l.id === id);
}
`;

fs.writeFileSync('src/data/photoshopLessons.js', out, 'utf8');
console.log('generated', lessons.length, 'lessons');
console.log('status line ok:', Boolean(statusLine));
console.log('layers line ok:', Boolean(layersLine));
