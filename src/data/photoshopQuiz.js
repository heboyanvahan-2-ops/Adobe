/**
 * Թեստ Adobe Photoshop — հարցեր ըստ 9-րդ դասարանի ուսուցանական նյութի։
 */

/** @typedef {{ question: string, options: string[], correctIndex: number }} PhotoshopQuizQuestion */

/** @type {PhotoshopQuizQuestion[]} */
export const photoshopQuizQuestions = [
  {
    question: 'Adobe Photoshop խմբագրիչը հիմնականում նախատեսված է՝',
    options: [
      'Կետային գրաֆիկայի պատկերներ ստեղծելու և խմբագրելու',
      'Միայն տեքստային փաստաթղթեր գրելու',
      'Տեսանյութերի մոնտաժի',
    ],
    correctIndex: 0,
  },
  {
    question: 'Adobe Photoshop-ը բացելու համար պետք է ընտրել՝',
    options: [
      'Start → All Programs → Adobe Photoshop',
      'File → Open → Adobe Photoshop',
      'Edit → Preferences → Adobe Photoshop',
    ],
    correctIndex: 0,
  },
  {
    question: 'Photoshop-ի պատուհանի տարրերից ո՞րն է ցույց տալիս ակտիվ գործիքի պարամետրերը՝',
    options: [
      'Վիճակի տողը',
      'Պատուհանի վերնագիրը',
      'Մենյուի տողը',
    ],
    correctIndex: 0,
  },
  {
    question: 'Գործիքների վահանակից գործիք ընտրելու համար անհրաժեշտ է՝',
    options: [
      'Ցուցիչը տեղադրել գործիքի վրա և սեղմել ձախ սեղմակը',
      'Կրկնակի սեղմել ցանկացած գործիքի վրա',
      'Սեղմել Delete ստեղնը',
    ],
    correctIndex: 0,
  },
  {
    question: 'Օժանդակ գործիք ընտրելու համար պետք է՝',
    options: [
      'Գործիքի տարբերանշանի վրա սեղմել աջ սեղմակը',
      'Սեղմել Shift+F12',
      'Կրկնակի սեղմել պատկերի վրա',
    ],
    correctIndex: 0,
  },
  {
    question: 'Photoshop-ում նոր փաստաթուղթ ստեղծելու համար ընտրում են՝',
    options: [
      'File → New',
      'Edit → Undo',
      'View → Zoom In',
    ],
    correctIndex: 0,
  },
  {
    question: 'Photoshop-ից դուրս գալու համար կարելի է օգտագործել՝',
    options: [
      'File → Exit կամ պատուհանի × կոճակը',
      'Layer → New Layer',
      'Select → All',
    ],
    correctIndex: 0,
  },
  {
    question: 'Պատկերի դիտման չափը փոխելու համար օգտագործվում է՝',
    options: [
      'Zoom (🔍) գործիքը',
      'Crop (◫) գործիքը',
      'Magic Wand (🪄) գործիքը',
    ],
    correctIndex: 0,
  },
  {
    question: 'Պատկերի չափերն ու լուծաչափը սահմանելու համար ընտրում են՝',
    options: [
      'Image → Image Size',
      'File → Save As',
      'Filter → Sharpen',
    ],
    correctIndex: 0,
  },
  {
    question: 'Ուղղանկյուն տիրույթ նշելու համար օգտագործվում է՝',
    options: [
      'Rectangular Marquee (▭) գործիքը',
      'Polygonal Lasso (⌗) գործիքը',
      'Healing Brush գործիքը',
    ],
    correctIndex: 0,
  },
  {
    question: 'Magic Wand գործիքով նշելու համար Tolerance դաշտում սահմանվում է՝',
    options: [
      'Գույների մոտիկության շեմը',
      'Պատկերի լայնությունը',
      'Շերտի անթափանցելիությունը',
    ],
    correctIndex: 0,
  },
  {
    question: 'Photoshop-ում շերտը նման է՝',
    options: [
      'Նկար կրող թափանցիկ ժապավենի',
      'Միայն ֆոնի գույնի',
      'Տպիչի կարգավորման',
    ],
    correctIndex: 0,
  },
  {
    question: 'Շերտերի վահանակը բացելու համար ընտրում են՝',
    options: [
      'Window → Layers',
      'File → Print',
      'Edit → Copy',
    ],
    correctIndex: 0,
  },
  {
    question: 'Պատկերի մանր թerությունները հարթեցնելու համար օգտագործվում է՝',
    options: [
      'Filter → Noise → Dust & Scratches',
      'File → New',
      'Select → Deselect',
    ],
    correctIndex: 0,
  },
];

export const photoshopQuizTotal = photoshopQuizQuestions.length;
