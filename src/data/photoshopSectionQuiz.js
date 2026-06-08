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
          'Միայն տպիչի կարգավորում',
          'Գործիքների վահանակ',
          'Միայն ձայնային նվագարկիչ',
          'Միայն էլ. փոստի հավելված',
        ],
        correctIndex: 1,
      },
      {
        question: 'Պատուհանի վերնագիրը ցույց է տալիս՝',
        options: [
          'Միայն ֆայլի չափը',
          'Միայն գույնի կոդը',
          'Ծրագրի տարբերանշանն ու անվանումը',
          'Միայն շերտերի ցանկը',
        ],
        correctIndex: 2,
      },
      {
        question: 'Վիճակի տողը ցուցադրում է՝',
        options: [
          'Միայն համակարգի ժամը',
          'Միայն ինտերնետի արագությունը',
          'Միայն տպման հերթը',
          'Ակտիվ գործիքի պարամետրերը',
        ],
        correctIndex: 3,
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
          'Միայն Windows Desktop-ում',
          'Միայն Start մենյուում',
          'Պատուհանի մեջ՝ գործիքների կողքին',
          'Միայն տպիչի վրա',
        ],
        correctIndex: 2,
      },
  ],

  tools: [
      {
        question: 'Գործիք ընտրելու համար պետք է՝',
        options: [
          'Կրկնակի սեղմել ցանկացած տեղում',
          'Ցուցիչը տեղադրել գործիքի վրա և սեղմել ձախ սեղմակը',
          'Սեղմել Delete',
          'Սեղմել Ctrl+P',
        ],
        correctIndex: 1,
      },
      {
        question: 'Օժանդակ գործիք ընտրելու համար պետք է՝',
        options: [
          'Սեղմել F12',
          'Սեղմել Enter',
          'Գործիքի տարբերանշանի վրա սեղմել աջ սեղմակը',
          'Սեղմել Esc',
        ],
        correctIndex: 2,
      },
      {
        question: 'Հատկությունների վահանակը թույլ է տալիս՝',
        options: [
          'Փոխել Windows-ի լեզուն',
          'Տպել փաստաթուղթը',
          'Փակել համակարգիչը',
          'Սահմանել ընտրված գործիքի պարամետրերը',
        ],
        correctIndex: 3,
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
          'Միայն տեքստի տպման',
          'Միայն ձայնի ձայնագրության',
          'Պատկերների հետ տարբեր գործողությունների',
          'Միայն ցանցային կապի',
        ],
        correctIndex: 2,
      },
  ],

  'new-doc': [
      {
        question: 'Նոր փաստաթուղթ ստեղծելու համար ընտրում են՝',
        options: [
          'Edit → Undo',
          'File → New',
          'View → Zoom In',
          'Select → All',
        ],
        correctIndex: 1,
      },
      {
        question: 'Name դաշտում ներմուծվում է՝',
        options: [
          'Միայն տպիչի անունը',
          'Միայն գույնի կոդը',
          'Փաստաթղթի անվանումը',
          'Միայն շերտի համարը',
        ],
        correctIndex: 2,
      },
      {
        question: 'Preset Sizes դաշտում ընտրում են՝',
        options: [
          'Տպիչի արագությունը',
          'Ֆոնի երաժշտությունը',
          'Ֆայլի գաղտնաբառը',
          'Աշխատանքային տիրույթի չափերը',
        ],
        correctIndex: 3,
      },
      {
        question: 'Mode դաշտում ընտրում են՝',
        options: [
          'Գունային մոդելը',
          'Տպիչի մոդելը',
          'Ձայնի մոդելը',
          'Ցանցի մոդելը',
        ],
        correctIndex: 0,
      },
      {
        question: 'Photoshop-ից դուրս գալու համար կարելի է՝',
        options: [
          'Layer → Duplicate',
          'Filter → Sharpen',
          'File → Exit կամ × կոճակ',
          'Image → Crop',
        ],
        correctIndex: 2,
      },
  ],

  'image-work': [
      {
        question: 'Պատկերի դիտման չափը փոխելու համար օգտագործվում է՝',
        options: [
          'Crop գործիքը',
          '🔍 Zoom գործիքը',
          'Type Tool',
          'Eraser Tool',
        ],
        correctIndex: 1,
      },
      {
        question: 'Խոշորացման համար հատկությունների վահանակից ընտրում են՝',
        options: [
          '➖',
          '×',
          '➕',
          '÷',
        ],
        correctIndex: 2,
      },
      {
        question: 'Navigator վահանակը բացվում է՝',
        options: [
          'File → New',
          'Edit → Copy',
          'Select → Inverse',
          'Window → Navigator',
        ],
        correctIndex: 3,
      },
      {
        question: 'Image Size հրամանը գտնվում է՝',
        options: [
          'Image → Image Size',
          'File → Print',
          'Layer → New',
          'View → Rulers',
        ],
        correctIndex: 0,
      },
      {
        question: 'Pixel Dimensions բաժնում ներմուծվում է՝',
        options: [
          'Միայն տպիչի անունը',
          'Միայն շերտի անունը',
          'Պատկերի փիքսելների քանակը',
          'Միայն գույնի անունը',
        ],
        correctIndex: 2,
      },
  ],

  selection: [
      {
        question: 'Ուղղանկյուն տիրույթ նշելու համար օգտագործվում է՝',
        options: [
          'Crop Tool',
          '▭ Rectangular Marquee',
          'Type Tool',
          'Paint Bucket',
        ],
        correctIndex: 1,
      },
      {
        question: 'Lasso գործիքով նշելուց առաջ դիտման չափը դարձնում են՝',
        options: [
          '50%',
          '10%',
          '200%',
          '1000%',
        ],
        correctIndex: 2,
      },
      {
        question: 'Polygonal Lasso-ն ընտրելու համար՝',
        options: [
          'Սեղմել Delete',
          'Սեղմել Ctrl+Z',
          'Սեղմել F5',
          'Lasso-ի վրա սեղմել աջ սեղմակ',
        ],
        correctIndex: 3,
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
          'File → Save',
          'Edit → Paste',
          'Select → Inverse',
          'View → Fit',
        ],
        correctIndex: 2,
      },
  ],

  colors: [
      {
        question: 'Գրաֆիկական խմբագրիչներում օգտագործվում են՝',
        options: [
          'Միայն մեկ գույն',
          'Հիմնական և ֆոնի գույները',
          'Միայն սև և սպիտակ',
          'Միայն RGB',
        ],
        correctIndex: 1,
      },
      {
        question: 'Գույն ընտրելու համար բացվում է՝',
        options: [
          'Print Preview',
          'Save As',
          'Color Picker պատուհան',
          'New Document',
        ],
        correctIndex: 2,
      },
      {
        question: 'Color Picker-ում ընտրում են՝',
        options: [
          'Միայն տառատեսակը',
          'Միայն շերտի անունը',
          'Միայն ֆայլի անունը',
          'Գունային մոդելն ու գույների չափաբաժինները',
        ],
        correctIndex: 3,
      },
      {
        question: 'Գույնը հաստատելու համար սեղմում են՝',
        options: [
          'OK',
          'Cancel',
          'Delete',
          'Reset All',
        ],
        correctIndex: 0,
      },
      {
        question: 'Հիմնական գույնը ընտրելու համար պետք է ընտրել՝',
        options: [
          'Միայն Crop գործիքը',
          'Միայն Zoom գործիքը',
          'Համապատասխան գործիքը գույների վահանակում',
          'Միայն Type Tool-ը',
        ],
        correctIndex: 2,
      },
  ],

  layers: [
      {
        question: 'Photoshop-ում շերտը նման է՝',
        options: [
          'Միայն ֆոնի գույնի',
          'Նկար կրող թափանցիկ ժապավենի',
          'Տպիչի կարգավորման',
          'Մենյուի տողի',
        ],
        correctIndex: 1,
      },
      {
        question: 'Layers վահանակը բացվում է՝',
        options: [
          'File → Exit',
          'Edit → Undo',
          'Window → Layers',
          'Filter → Noise',
        ],
        correctIndex: 2,
      },
      {
        question: 'Առաջին բացված պատկերը Layers-ում հայտնվում է որպես՝',
        options: [
          'Text Layer',
          'Audio Layer',
          'Video Layer',
          'Background շերտ',
        ],
        correctIndex: 3,
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
          'Պատկերը ջնջված է',
          'Շերտը փակված է',
          'Շերտի անթափանցելիությունը 50% է',
          'Ֆայլը փակված է',
        ],
        correctIndex: 2,
      },
  ],

  retouch: [
      {
        question: 'Ցայտունությունը փոքր-ինչ ավելացնելու համար ընտրում են՝',
        options: [
          'File → New',
          'Filter → Sharpen → Sharpen',
          'Edit → Cut',
          'Layer → Delete',
        ],
        correctIndex: 1,
      },
      {
        question: 'Ցայտունությունը մեծապես ավելացնելու համար ընտրում են՝',
        options: [
          'Filter → Blur',
          'File → Save',
          'Filter → Sharpen → Sharpen More',
          'Select → Deselect',
        ],
        correctIndex: 2,
      },
      {
        question: 'Եզրագծերի ցայտունության համար ընտրում են՝',
        options: [
          'Filter → Noise',
          'Image → Crop',
          'View → Zoom Out',
          'Filter → Sharpen → Sharpen Edges',
        ],
        correctIndex: 3,
      },
      {
        question: 'Մանր թերություները հարթեցնելու համար ընտրում էք',
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
          'Ֆайлի անունը',
          'Շերտի գույնը',
          'Շառավիղը, որտեղ կիրառվի միջինացումը',
          'Տպիչի արագությունը',
        ],
        correctIndex: 2,
      },
  ],
};

export function getSectionQuiz(lessonId) {
  return photoshopSectionQuiz[lessonId] ?? [];
}
