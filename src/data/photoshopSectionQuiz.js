/**
 * 5 հարց յուրաքանչյուր Adobe Photoshop բաժնի համար (Word դասագրք)։
 * Յուրաքանչյուր հարցում 4 պատասխան, 1-ը ճիշտ է։
 */

/** @typedef {{ question: string, options: [string,string,string,string], correctIndex: number }} SectionQuizQuestion */

/** @type {Record<string, SectionQuizQuestion[]>} */
export const photoshopSectionQuiz = {
  interface: [
    {
      question: 'Photoshop-ի պատուհանը ներառում է ո՞ր տարրը՝',
      options: [
        'Գործիքների վահանակ',
        'Միայն տպիչի կարգավորում',
        'Միայն ձայնային նվագարկիչ',
        'Միայն էլ. փոստի հավելված',
      ],
      correctIndex: 0,
    },
    {
      question: 'Պատուհանի վերնագիրը ցույց է տալիս՝',
      options: [
        'Ծրագրի տարբերանշանն ու անվանումը',
        'Միայն ֆայլի չափը',
        'Միայն գույնի կոդը',
        'Միայն շերտերի ցանկը',
      ],
      correctIndex: 0,
    },
    {
      question: 'Վիճակի տողը ցուցադրում է՝',
      options: [
        'Ակտիվ գործիքի պարամետրերը',
        'Միայն համակարգի ժամը',
        'Միայն ինտերնետի արագությունը',
        'Միայն տպման հերթը',
      ],
      correctIndex: 0,
    },
    {
      question: 'Աշխատանքային տիրույթը Photoshop-ում նախատեսված է՝',
      options: [
        'Պատկերի խմբագրման',
        'Տեքստի տպման',
        'Վիդեոյի ներբեռնման',
        'Ֆայլերի արխiveացման',
      ],
      correctIndex: 0,
    },
    {
      question: 'Հատկությունների վահանակը տեղադրված է՝',
      options: [
        'Պատուհանի մեջ՝ գործիքների կողքին',
        'Միայն Windows Desktop-ում',
        'Միայն Start մենյուում',
        'Միայն տպիչի վրա',
      ],
      correctIndex: 0,
    },
  ],

  tools: [
    {
      question: 'Գործիք ընտրելու համար պետք է՝',
      options: [
        'Ցուցիչը տեղադրել գործիքի վրա և սեղմել ձախ սեղմակը',
        'Կրկնակի սեղմել ցանկացած տեղում',
        'Սեղմել Delete',
        'Սեղմել Ctrl+P',
      ],
      correctIndex: 0,
    },
    {
      question: 'Օժանդակ գործիք ընտրելու համար պետք է՝',
      options: [
        'Գործիքի տարբերանշանի վրա սեղմել աջ սեղմակը',
        'Սեղմել F12',
        'Սեղմել Enter',
        'Սեղմել Esc',
      ],
      correctIndex: 0,
    },
    {
      question: 'Հատկությունների վահանակը թույլ է տալիս՝',
      options: [
        'Սահմանել ընտրված գործիքի պարամետրերը',
        'Փոխել Windows-ի լեզուն',
        'Տպել փաստաթուղթը',
        'Փակել համակարգիչը',
      ],
      correctIndex: 0,
    },
    {
      question: 'Մենյուի տողի հրամանները խմբավորված են՝',
      options: [
        'Ըստ նշանակության',
        'Ըստ տառերի',
        'Ըստ գույների',
        'Ըստ չափի',
      ],
      correctIndex: 0,
    },
    {
      question: 'Օժանդակ վահանակները նախատեսված են՝',
      options: [
        'Պատկերների հետ տարբեր գործողությունների',
        'Միայն տեքստի տպման',
        'Միայն ձայնի ձայնագրության',
        'Միայն ցանցային կապի',
      ],
      correctIndex: 0,
    },
  ],

  'new-doc': [
    {
      question: 'Նոր փաստաթուղթ ստեղծելու համար ընտրում են՝',
      options: ['File → New', 'Edit → Undo', 'View → Zoom In', 'Select → All'],
      correctIndex: 0,
    },
    {
      question: 'Name դաշտում ներմուծվում է՝',
      options: [
        'Փաստաթղթի անվանումը',
        'Միայն տպիչի անունը',
        'Միայն գույնի կոդը',
        'Միայն շերտի համարը',
      ],
      correctIndex: 0,
    },
    {
      question: 'Preset Sizes դաշտում ընտրում են՝',
      options: [
        'Աշխատանքային տիրույթի չափերը',
        'Տպիչի արագությունը',
        'Ֆոնի երաժշտությունը',
        'Ֆայլի գաղտնաբառը',
      ],
      correctIndex: 0,
    },
    {
      question: 'Mode դաշտում ընտրում են՝',
      options: ['Գունային մոդելը', 'Տպիչի մոդելը', 'Ձայնի մոդելը', 'Ցանցի մոդելը'],
      correctIndex: 0,
    },
    {
      question: 'Photoshop-ից դուրս գալու համար կարելի է՝',
      options: [
        'File → Exit կամ × կոճակ',
        'Layer → Duplicate',
        'Filter → Sharpen',
        'Image → Crop',
      ],
      correctIndex: 0,
    },
  ],

  'image-work': [
    {
      question: 'Պատկերի դիտման չափը փոխելու համար օգտագործվում է՝',
      options: [
        '🔍 Zoom գործիքը',
        'Crop գործիքը',
        'Type Tool',
        'Eraser Tool',
      ],
      correctIndex: 0,
    },
    {
      question: 'Խոշորացման համար հատկությունների վահանակից ընտրում են՝',
      options: ['➕', '➖', '×', '÷'],
      correctIndex: 0,
    },
    {
      question: 'Navigator վահանակը բացվում է՝',
      options: [
        'Window → Navigator',
        'File → New',
        'Edit → Copy',
        'Select → Inverse',
      ],
      correctIndex: 0,
    },
    {
      question: 'Image Size հրամանը գտնվում է՝',
      options: ['Image → Image Size', 'File → Print', 'Layer → New', 'View → Rulers'],
      correctIndex: 0,
    },
    {
      question: 'Pixel Dimensions բաժնում ներմուծվում է՝',
      options: [
        'Պատկերի փիքսելների քանակը',
        'Միայն տպիչի անունը',
        'Միայն շերտի անունը',
        'Միայն գույնի անունը',
      ],
      correctIndex: 0,
    },
  ],

  selection: [
    {
      question: 'Ուղղանկյուն տիրույթ նշելու համար օգտագործվում է՝',
      options: [
        '▭ Rectangular Marquee',
        'Crop Tool',
        'Type Tool',
        'Paint Bucket',
      ],
      correctIndex: 0,
    },
    {
      question: 'Lasso գործիքով նշելուց առաջ դիտման չափը դարձնում են՝',
      options: ['200%', '50%', '10%', '1000%'],
      correctIndex: 0,
    },
    {
      question: 'Polygonal Lasso-ն ընտրելու համար՝',
      options: [
        'Lasso-ի վրա սեղմել աջ սեղմակ',
        'Սեղմել Delete',
        'Սեղմել Ctrl+Z',
        'Սեղմել F5',
      ],
      correctIndex: 0,
    },
    {
      question: 'Magic Wand-ում Tolerance դաշտը սահմանում է՝',
      options: [
        'Գույների մոտիկության շեմը',
        'Պատկերի լայնությունը',
        'Շերտի անունը',
        'Ֆայլի չափը',
      ],
      correctIndex: 0,
    },
    {
      question: 'Նշվածության հակադարձման համար ընտրում են՝',
      options: [
        'Select → Inverse',
        'File → Save',
        'Edit → Paste',
        'View → Fit',
      ],
      correctIndex: 0,
    },
  ],

  colors: [
    {
      question: 'Գրաֆիկական խմբագրիչներում օգտագործվում են՝',
      options: [
        'Հիմնական և ֆոնի գույները',
        'Միայն մեկ գույն',
        'Միայն սև և սպիտակ',
        'Միայն RGB',
      ],
      correctIndex: 0,
    },
    {
      question: 'Գույն ընտրելու համար բացվում է՝',
      options: [
        'Color Picker պատուհան',
        'Print Preview',
        'Save As',
        'New Document',
      ],
      correctIndex: 0,
    },
    {
      question: 'Color Picker-ում ընտրում են՝',
      options: [
        'Գունային մոդելն ու գույների չափաբաժինները',
        'Միայն տառատեսակը',
        'Միայն շերտի անունը',
        'Միայն ֆայլի անունը',
      ],
      correctIndex: 0,
    },
    {
      question: 'Գույնը հաստատելու համար սեղմում են՝',
      options: ['OK', 'Cancel', 'Delete', 'Reset All'],
      correctIndex: 0,
    },
    {
      question: 'Հիմնական գույնը ընտրելու համար պետք է ընտրել՝',
      options: [
        'Համապատասխան գործիքը գույների վահանակում',
        'Միայն Crop գործիքը',
        'Միայն Zoom գործիքը',
        'Միայն Type Tool-ը',
      ],
      correctIndex: 0,
    },
  ],

  layers: [
    {
      question: 'Photoshop-ում շերտը նման է՝',
      options: [
        'Նկար կրող թափանցիկ ժապավենի',
        'Միայն ֆոնի գույնի',
        'Տպիչի կարգավորման',
        'Մենյուի տողի',
      ],
      correctIndex: 0,
    },
    {
      question: 'Layers վահանակը բացվում է՝',
      options: [
        'Window → Layers',
        'File → Exit',
        'Edit → Undo',
        'Filter → Noise',
      ],
      correctIndex: 0,
    },
    {
      question: 'Առաջին բացված պատկերը Layers-ում հայտնվում է որպես՝',
      options: ['Background շերտ', 'Text Layer', 'Audio Layer', 'Video Layer'],
      correctIndex: 0,
    },
    {
      question: 'Շերտի անունը փոխելու համար՝',
      options: [
        'Անվան վրա կրկնակի սեղմել',
        'Սեղմել Delete',
        'Սեղմել Ctrl+P',
        'Սեղմել F1',
      ],
      correctIndex: 0,
    },
    {
      question: 'Opacity: 50% նշանակում է՝',
      options: [
        'Շերտի անթափանցելիությունը 50% է',
        'Պատկերը ջնջված է',
        'Շերտը փակված է',
        'Ֆայլը փակված է',
      ],
      correctIndex: 0,
    },
  ],

  retouch: [
    {
      question: 'Ցայտունությունը փոքր-ինչ ավելացնելու համար ընտրում են՝',
      options: [
        'Filter → Sharpen → Sharpen',
        'File → New',
        'Edit → Cut',
        'Layer → Delete',
      ],
      correctIndex: 0,
    },
    {
      question: 'Ցայտունությունը մեծապես ավելացնելու համար ընտրում են՝',
      options: [
        'Filter → Sharpen → Sharpen More',
        'Filter → Blur',
        'File → Save',
        'Select → Deselect',
      ],
      correctIndex: 0,
    },
    {
      question: 'Եզրագծերի ցայտունության համար ընտրում են՝',
      options: [
        'Filter → Sharpen → Sharpen Edges',
        'Filter → Noise',
        'Image → Crop',
        'View → Zoom Out',
      ],
      correctIndex: 0,
    },
    {
      question: '\u0544\u0561\u0576\u0580 \u0569\u0565\u0580\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0565\u0580\u0568 \u0570\u0561\u0580\u0569\u0565\u0581\u0576\u0565\u056c\u0578\u0582 \u0570\u0561\u0574\u0561\u0580 \u0568\u0576\u057f\u0580\u0578\u0582\u0574 \u0567\u0584',
      options: [
        'Filter → Noise → Dust & Scratches',
        'File → Open',
        'Edit → Copy',
        'Window → Navigator',
      ],
      correctIndex: 0,
    },
    {
      question: 'Dust & Scratches պատուհանում Radius դաշտը սահմանում է՝',
      options: [
        'Շառավիղը, որտեղ կիրառվի միջինացումը',
        'Ֆайлի անունը',
        'Շերտի գույնը',
        'Տպիչի արագությունը',
      ],
      correctIndex: 0,
    },
  ],
};

export function getSectionQuiz(lessonId) {
  return photoshopSectionQuiz[lessonId] ?? [];
}
