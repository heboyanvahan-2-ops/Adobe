// Տվյալներ Adobe Showcase-ի համար՝ 5 կատեգորիա և 22 արտադրանք։
// Կառուցվածք՝
//   categories — կատեգորիաների ցանկ (id, name, color, նկարագրություն)։
//   products   — { categoryId: [ { ...product } ] } օբյեկտ։
// Օգտագործվում է կատեգորիաների էջերում, գլխավոր էջում և ProductDetailPage-ում։
// ՆՇՈՒՄ՝ արտադրանքների և կատեգորիաների ՆԱԽՆԱԿԱՆ անվանումները (name)
// պահպանված են անգլերեն — դրանք բրենդեր/ապրանքանիշեր են։

export const categories = [
  {
    id: 'creative-cloud',
    name: 'Creative Cloud',
    tagline: 'Ստեղծագործություն առանց սահմանների',
    color: '#00A0DE',
    description:
      'Ամենաամբողջական գործիքակազմը դիզայներների, լուսանկարիչների, նկարազարդողների և տեսանկարահանողների համար։ Photoshop, Illustrator, Premiere Pro և տասնյակ այլ ծրագրեր մեկ բաժանորդագրությամբ։',
  },
  {
    id: 'document-cloud',
    name: 'Document Cloud',
    tagline: 'PDF-ի հետ աշխատանք նոր մակարդակում',
    color: '#FFB800',
    description:
      'Ամպային ծառայությունների ընտանիք PDF-ի հետ աշխատելու համար՝ ստեղծում, խմբագրում, ստորագրում և փաստաթղթերի ճանաչում աշխարհի ցանկացած կետից։',
  },
  {
    id: 'experience-cloud',
    name: 'Experience Cloud',
    tagline: 'Ապագայի մարքեթինգ և անալիտիկա',
    color: '#00CC66',
    description:
      'Հարթակ մարքեթինգի, անալիտիկայի և հաճախորդների փորձի կառավարման համար, որից օգտվում են աշխարհի խոշորագույն բրենդները՝ L\'Oréal-ից մինչև Coca-Cola։',
  },
  {
    id: 'content-commerce',
    name: 'Content & Commerce',
    tagline: 'Բովանդակություն և էլեկտրոնային առևտուր',
    color: '#FF6B35',
    description:
      'Բովանդակության կառավարման և էլեկտրոնային առևտրի լուծումներ՝ ստեղծեք, հրապարակեք և վաճառեք ցանկացած ալիքով Adobe Experience Manager-ի և Magento-ի միջոցով։',
  },
  {
    id: '3d-ai',
    name: '3D & AI',
    tagline: 'Ապագան արդեն այստեղ է',
    color: '#9D4EDD',
    description:
      '3D-մոդելավորում, տեքստուրավորում և Firefly գեներատիվ արհեստական բանականություն։ Տեխնոլոգիաներ, որոնք փոխում են բովանդակություն ստեղծելու մոտեցումը։',
  },
];

export const products = {
  'creative-cloud': [
    {
      id: 'photoshop',
      categoryId: 'creative-cloud',
      name: 'Photoshop',
      shortCode: 'Ps',
      color: '#31A8FF',
      shortDesc: 'Աշխարհի լավագույն ռաստերային գրաֆիկայի և լուսանկարների խմբագրիչը։',
      fullDesc:
        'Adobe Photoshop-ը արդյունաբերական ստանդարտ է պատկերների մշակման համար։ Օգտագործվում է լուսանկարիչների, դիզայներների, վեբ-մշակողների և նկարիչների կողմից ամբողջ աշխարհում՝ ռաստերային գրաֆիկայի հետ աշխատելու, ռետուշի, կոմպոզիտինգի և թվային գեղանկարչության համար։',
      features: [
        {
          title: "Շերտեր և չքայքայող խմբագրում",
          description: "Շերտերը թույլ են տալիս աշխատել չքայքայող խմբարմամբ և ճշգրիտ մասկերով։",
        },
        {
          title: "ԱԲ-գործիքներ՝ Generative Fill, Neural Filters",
          description: "Generative Fill և Neural Filters արագացնում են իրական կերպով հնարավոր գաղափարները։",
        },
        {
          title: "Վրձիններ և գրաֆիկական պլանշետի աջակցություն",
          description: "Վրձինների ճնշման ու թեքման աջակցությունը նման է ավանդական գործիքներին։",
        },
        {
          title: "RAW ֆայլերի աջակցություն",
          description: "Camera Raw-ով բացեք պրոֆեսիոնալ ֆայլերը առանց որակի կորստի։",
        },
        {
          title: "Ինտեգրացիա Lightroom-ի և Illustrator-ի հետ",
          description: "Կիսվեք պրոեկտներով Lightroom եւ Illustrator-ի միջով մեկ հոսքում։",
        },
      ],
      videoLessons: [
        {
          title: 'Գունային բալանս',
          /* ?v ը ստիպում են զննարկիչին նոր ֆայլ բեռնել ավելիս տեսանյութը փոխելու դեպքում */
          url: '/videos/photoshop/color-balance.mp4?v=2',
        },
      ],
    },
    {
      id: 'illustrator',
      categoryId: 'creative-cloud',
      name: 'Illustrator',
      shortCode: 'Ai',
      color: '#FF9A00',
      shortDesc: 'Պրոֆեսիոնալ վեկտորային գրաֆիկայի խմբագրիչ։',
      fullDesc:
        'Adobe Illustrator-ը ստանդարտ է լոգոներ, պատկերակներ, նկարազարդումներ և տիպոգրաֆիա ստեղծելու համար։ Վեկտորային գրաֆիկան մասշտաբավորվում է առանց որակի կորստի՝ այցեքարտերից մինչև բիլբորդներ։',
      features: [
        {
          title: "Բեզիեի վեկտորային կորեր",
          description: "Բեզիեի կորերը ապահովում են թեք, թողած ձևերի լիարժեք վերահսկողություն։",
        },
        {
          title: "Ճշգրիտ տիպոգրաֆիա",
          description: "Տիպոգրաֆիայի գործիքները նախատեսված են լոգոների և տպագրության համար։",
        },
        {
          title: "Գործիքներ լոգոների և պատկերակների համար",
          description: "Պարզեցված աշխատանքային հոսք լոգոների և պատկերակների ստեղծման համար։",
        },
        {
          title: "Համատեղելիություն Photoshop-ի և InDesign-ի հետ",
          description: "Ակտիվներ կարող եք փոխանցել Photoshop/InDesign առանց վերսկսելու աշխատանքը։",
        },
        {
          title: "SVG արտահանում վեբի համար",
          description: "SVG արտահանումը պահպանում է վեկտորը վեբի և interface-ների համար։",
        },
      ],
      videoLessons: [
        {
          title: 'Վեկտորային գրաֆիկա Լիարժեք դասընթաց սկսնակների համար',
          url: 'https://www.youtube.com/watch?v=Ib8UBwu3yGA',
        },
        {
          title: 'Սքեչից մինչև վեկտոր Pen գործիք, կորեր, ձևեր',
          url: 'https://www.youtube.com/watch?v=HeLb0dy81Lc',
        },
      ],
    },
    {
      id: 'indesign',
      categoryId: 'creative-cloud',
      name: 'InDesign',
      shortCode: 'Id',
      color: '#FF3366',
      shortDesc: 'Պրոֆեսիոնալ դասավորություն տպագիր և թվային հրատարակությունների համար։',
      fullDesc:
        'Adobe InDesign-ը №1 ծրագիրն է գրքերի, ամսագրերի, գրքույկների և ինտերակտիվ PDF-երի դասավորության համար։ Կառավարեք մաստեր-էջերը, տեքստի ոճերը և տասնյակ էջերով մեծ փաստաթղթերը։',
      features: [
        {
          title: "Մաստեր-էջեր և ոճեր",
          description: "Մաստեր-էջերը միանգամից թարմացնում են բոլոր կապված էջերի դասավորությունը։",
        },
        {
          title: "Երկար փաստաթղթերի աջակցություն",
          description: "Մեծ փաստաթղթերում հարմար են սյուներ, տեղեկատու, ոճերի հավաքածուներ։",
        },
        {
          title: "Ինտերակտիվ PDF և EPUB",
          description: "Ինտերակտիվ PDF և EPUB — մեկ փաստաթուղթ, մի քանի հրատարակչական ալիք։",
        },
        {
          title: "Աշխատանք OpenType տիպոգրաֆիայի հետ",
          description: "OpenType-ի առաջադեմ հատկությունները հասանելի են ուղղակիորեն դասավորությունում։",
        },
        {
          title: "Կապեր Photoshop-ի և Illustrator-ի հետ",
          description: "Կապակցված ֆայլերը նշում են, երբ պատկերը թարմացվել է Photoshop/Illustrator-ում։",
        },
      ],
      videoLessons: [
        {
          title: 'Տպագրություն և դասավորություն Լիարժեք դասընթաց',
          url: 'https://www.youtube.com/watch?v=RXRT3dHu6_o',
        },
        {
          title: 'Փաստաթուղթ, էջեր, աշխատատարածք Նախագծի սկիզբ',
          url: 'https://www.youtube.com/watch?v=f2dJOYmC_PM',
        },
      ],
    },
    {
      id: 'xd',
      categoryId: 'creative-cloud',
      name: 'Adobe XD',
      shortCode: 'Xd',
      color: '#FF61F6',
      shortDesc: 'Գործիք UX/UI դիզայնի և նախատիպավորման համար։',
      fullDesc:
        'Adobe XD-ն նախատեսված է բջջային հավելվածների և վեբ-կայքերի ինտերֆեյսների նախագծման համար։ Ստեղծեք սեղմելի նախատիպեր և կիսվեք դրանցով թիմի և պատվիրատուների հետ։',
      features: [
        {
          title: "Արթբորդեր բոլոր սարքերի համար",
          description: "Արթբորդերը ծածկում են բջջային, պլանշետ եւ աշխատասեղանի նախագծերը։",
        },
        {
          title: "Սեղմելի նախատիպեր",
          description: "Նախատիպերում փոխանցեք անիմացիաներ և թեստավորեք հպումները պատվիրատուի հետ։",
        },
        {
          title: "Համատեղ աշխատանք իրական ժամանակում",
          description: "Միաժամանակյա խմբագրումը թեթևացնում է թիմային աշխատանքը։",
        },
        {
          title: "Բաղադրիչներ և վիճակներ",
          description: "Կոմպոնентները և վիճակները կրկնարարություն են կոճակներում ու մենյուում։",
        },
        {
          title: "Փլագիններ և ինտեգրացիաներ",
          description: "Փլագինների էկոհամակարգը միացնում է դիզայն-համակարգերը քոմփանի միջով։",
        },
      ],
      videoLessons: [
        {
          title: 'UX/UI դաս հիմունքներից Արտաբորդներ, բաղադրիչներ, նախատիպ',
          url: 'https://www.youtube.com/watch?v=f2K1jmjj5pM',
        },
        {
          title: 'Թարմացված հոսք Պրոտոտիպ և փոխազդեցություններ',
          url: 'https://www.youtube.com/watch?v=68w2VwalD5w',
        },
      ],
    },
    {
      id: 'premiere-pro',
      categoryId: 'creative-cloud',
      name: 'Premiere Pro',
      shortCode: 'Pr',
      color: '#9999FF',
      shortDesc: 'Պրոֆեսիոնալ ոչ-գծային վիդեո մոնտաժ։',
      fullDesc:
        'Adobe Premiere Pro-ն կինոարտադրողների և վիդեոբլոգերների ընտրությունն է։ Աջակցում է ցանկացած ֆորմատներ՝ 8K-ից մինչև VR, մուլտիկամերային մոնտաժ և սերտ ինտեգրացիա After Effects-ի և Audition-ի հետ։',
      features: [
        {
          title: "8K և HDR-ի աջակցություն",
          description: "Բարձր թողարկումներ և HDR թույլ են ավելի մեծ զտվածություն ու պահպանում։",
        },
        {
          title: "Multi-cam մոնտաժ",
          description: "Մի քանի տեսախցիկից մոնտաժ՝ համաձայնեցված ժամկետներով։",
        },
        {
          title: "Auto-Reframe սոցցանցերի համար",
          description: "Ավտոմատ կադրեր՝ արդյունավետ հարմարեցում TikTok, Reels և այլ ձևաչափերի։",
        },
        {
          title: "Lumetri գունային ուղղում",
          description: "Lumetri-ում կիրառեք գույնի ուղղումը առանց պլագինների։",
        },
        {
          title: "After Effects-ի հետ ուղիղ ինտեգրացիա",
          description: "Թարմացրեք կոմպոզիցիան After Effects-ում փոխանցումից հետո։",
        },
      ],
      videoLessons: [
        {
          title: 'Լիարժեք մոնտաժ նախագիծից մինչև արտահանում (~2 ժամ)',
          url: 'https://www.youtube.com/watch?v=oLMdXC_B1vQ',
        },
        {
          title: 'Մոնտաժի հիմքեր ինտերֆեյս, ժմկտում, հիմնական գործիքներ',
          url: 'https://www.youtube.com/watch?v=cpIwiVSHh-4',
        },
      ],
    },
    {
      id: 'after-effects',
      categoryId: 'creative-cloud',
      name: 'After Effects',
      shortCode: 'Ae',
      color: '#9999FF',
      shortDesc: 'Անիմացիա, գրաֆիկա և տեսողական էֆեկտներ։',
      fullDesc:
        'Adobe After Effects-ը ստանդարտ է մոուշն-դիզայնի և VFX-ի համար։ Ստեղծեք տիտրեր, անիմացված լոգոներ, կինո-էֆեկտներ և բարդ կոմպոզիտային անիմացիա։',
      features: [
        {
          title: "Շերտեր և կեյֆրեյմեր",
          description: "Կեյֆրեյմերը ստեղծում են սահուն անիմացիա ցանկացած շերտում։",
        },
        {
          title: "3D-տեսախցիկ և լուսավորություն",
          description: "3D տարածությունում մոտեցրեք տեսախեցին և լույսը իրատեսական արդյունքի համար։",
        },
        {
          title: "Էֆեկտներ և փլագիններ",
          description: "Ուսումնասիրեք հարյուրավոր ներկառուցված էֆեկտներ և համայնքի փլագիններ։",
        },
        {
          title: "Rotoscoping և թրեքինգ",
          description: "Rotoscoping ու թրեքինգ՝ օբյեկտներ կապել տեսանյութի հետ։",
        },
        {
          title: "Սկրիպտներ և արտահայտություններ",
          description: "Արտահայտությունները ավտոմատացնում են կրկնվող անիմացիաները։",
        },
      ],
      videoLessons: [
        {
          title: 'Շարժապատկեր և կոմպոզիցիա մաստեր-դաս սկսնակների համար',
          url: 'https://www.youtube.com/watch?v=m5GIbXbxn1o',
        },
        {
          title: 'Միջին մակարդակի արագ ներածում շերտեր և անիմացիա',
          url: 'https://www.youtube.com/watch?v=jFbRZZmMW7c',
        },
      ],
    },
    {
      id: 'animate',
      categoryId: 'creative-cloud',
      name: 'Animate',
      shortCode: 'An',
      color: '#FF9A00',
      shortDesc: 'Ինտերակտիվ 2D-անիմացիա վեբի և բջջայինի համար։',
      fullDesc:
        'Adobe Animate-ը (նախկինում՝ Flash) գործիք է մուլտֆիլմեր, գովազդային բաններներ, ուսուցողական խաղեր և ինտերակտիվ բովանդակություն ստեղծելու համար HTML5 ֆորմատով։',
      features: [
        {
          title: "Վեկտորային և ռաստերային անիմացիա",
          description: "Խառնեք վեկտորային նկարումը և ռաստերային տարրերը նույն տեսարանում։",
        },
        {
          title: "Արտահանում HTML5 Canvas-ի և WebGL-ի մեջ",
          description: "Արտահանում Canvas կամ WebGL՝ օգտատերերի բրաուզերներում աշխատելու համար։",
        },
        {
          title: "Թայմ-լայն և տեսարաններ",
          description: "Թայմ-լայնը կազմակերպում է տեսարաններն ըստ էպізոդների կամ տեսարանների։",
        },
        {
          title: "Կերպարների անիմացիա",
          description: "Կերպարների ռիգը թեթևացնում է կերպարային տեսարանների ստեղծումը։",
        },
        {
          title: "ActionScript և JavaScript",
          description: "Սցենարները JavaScript-ով հնարավորություն են տալիս ինտերակտիվության։",
        },
      ],
      videoLessons: [
        {
          title: 'Աշխատամաս, ժամանակացույթ, նախագիծ առաջին քայլեր',
          url: 'https://www.youtube.com/watch?v=WFXELwble4M',
        },
        {
          title: 'Արագ ներածում 2D-անիմացիայի հիմնական գործիքներ',
          url: 'https://www.youtube.com/watch?v=0itiuHreY3A',
        },
      ],
    },
  ],
  'document-cloud': [
    {
      id: 'acrobat',
      categoryId: 'document-cloud',
      name: 'Acrobat Pro',
      shortCode: 'Ac',
      color: '#EC1C24',
      shortDesc: 'Ամբողջական հավաքածու PDF փաստաթղթերի հետ աշխատելու համար։',
      fullDesc:
        'Adobe Acrobat Pro-ն PDF-ի համար ամենաամբողջական լուծումն է՝ ստեղծեք, խմբագրեք, փոխարկեք, պաշտպանեք և ստորագրեք ֆայլերը։ Աշխատեք փաստաթղթերի հետ համակարգչից, բրաուզերից և հեռախոսից։',
      features: [
        {
          title: "PDF-ում տեքստի և պատկերների խմբագրում",
          description: "Թարմացրեք տեքստը և պատկերները՝ չփոխելով PDF-ի կազմը անպետք ռեստերով։",
        },
        {
          title: "Փոխարկում Word, Excel, PowerPoint ֆորմատների",
          description: "Արտահանում Office ֆորմատներ՝ փաստաթղթեր վերամշակելու համար։",
        },
        {
          title: "Էլեկտրոնային ստորագրություններ",
          description: "Իրավաբանորեն արժեքավոր ստորագրություններ համաձայնությամբ արձանագրությամբ։",
        },
        {
          title: "Փաստաթղթերի տարբերակների համեմատում",
          description: "Նշեք տարբերությունները երկու տարբերակների միջև հավաքական արձագանքով։",
        },
        {
          title: "OCR — տեքստի ճանաչում",
          description: "OCR-ը վերածում է սկանը խմբարկելի տեքստ տասնյակ լեզուներով։",
        },
      ],
      videoLessons: [
        {
          title: 'PDF-ի հետ առաջին քայլեր Նախագիծ և հիմնական գործիքներ',
          url: 'https://www.youtube.com/watch?v=nzRswX0YDg0',
        },
        {
          title: 'Տեքստի և պատկերի խմբագրում PDF-ում',
          url: 'https://www.youtube.com/watch?v=b_z1HvHYd3k',
        },
      ],
    },
    {
      id: 'sign',
      categoryId: 'document-cloud',
      name: 'Adobe Sign',
      shortCode: 'Sg',
      color: '#EC1C24',
      shortDesc: 'Իրավաբանորեն նշանակալից էլեկտրոնային ստորագրություններ։',
      fullDesc:
        'Adobe Sign-ը ցանկացած փաստաթուղթ վերածում է իրավաբանորեն պարտադիր համաձայնագրի։ Ուղարկեք, հետևեք և հավաքեք ստորագրություններ աշխարհի ցանկացած կետից մի քանի րոպեում։',
      features: [
        {
          title: "Ստորագրություններ ցանկացած սարքի վրա",
          description: "Ստորագրել կարող եք մատով սմարթֆոնում կամ ստիլուսով պլանշետում։",
        },
        {
          title: "eIDAS-ի և ESIGN-ի համապատասխանություն",
          description: "Համապատասխանում է միջազգային նորմերին առևտրային և պետական փաստաթղթերի համար։",
        },
        {
          title: "Կաղապարներ և զանգվածային ուղարկումներ",
          description: "Կրկնվող փաստաթղթերը ուղարկեք զանգվածային արշավներով։",
        },
        {
          title: "Ինտեգրացիա Microsoft 365-ի և Salesforce-ի հետ",
          description: "CRM և 365 ինտեգրացիան միացնում է վաճառքը և համաձայնագրերը։",
        },
        {
          title: "Աուդիտի հետագծ",
          description: "Աուդիտի մատյանը ապացուցում է, թե ով և երբ է ստորագրել։",
        },
      ],
      videoLessons: [
        {
          title: 'Էլեկտրոնային ստորագրություն PDF-ում քայլ առ քայլ',
          url: 'https://www.youtube.com/watch?v=O2pZRXxEvas',
        },
        {
          title: 'Ստորագրությունների ուղարկում և կարգավիճակի հետևում',
          url: 'https://www.youtube.com/watch?v=YE_qOZUVGwA',
        },
      ],
    },
    {
      id: 'scan',
      categoryId: 'document-cloud',
      name: 'Adobe Scan',
      shortCode: 'Sc',
      color: '#EC1C24',
      shortDesc: 'Դարձրեք հեռախոսը գրպանային փաստաթղթերի սկաների։',
      fullDesc:
        'Adobe Scan-ը անվճար բջջային հավելված է փաստաթղթերի, անդորրագրերի, այցեքարտերի և գրառումների սկանավորման համար՝ տեքստի ինքնաշխատ ճանաչմամբ։',
      features: [
        {
          title: "Էջերի ինքնաշխատ հավասարեցում",
          description: "Ալգորիթմը ուղղում է ծռված էջերը՝ ընթերցելի PDF ստանալու համար։",
        },
        {
          title: "OCR 20+ լեզվով",
          description: "Ճանաչված տեքստը կարող եք պատճենել կամ որոնել ֆայլում։",
        },
        {
          title: "Պահպանում ամպում",
          description: "Սինք՝ Document Cloud-ում՝ մուտք բոլոր սարքերից։",
        },
        {
          title: "Այցեքարտերի սկանավորում կոնտակտներում",
          description: "Այցեքարտերը ինքնաշխատ դասվում են հեռախոսի կոնտակտներում։",
        },
        {
          title: "Անվճար հավելված",
          description: "Հավելվածը ներբեռնվում է առանց բաժանորդագրության։",
        },
      ],
      videoLessons: [
        {
          title: 'Փաստաթղթերի սկանավորում, կարգավորում և ամպային պահեստ',
          url: 'https://www.youtube.com/watch?v=Qxxn4InGoMc',
        },
      ],
    },
  ],
  'experience-cloud': [
    {
      id: 'analytics',
      categoryId: 'experience-cloud',
      name: 'Adobe Analytics',
      shortCode: 'AA',
      color: '#00CC66',
      shortDesc: 'Համաշխարհային մակարդակի վեբ- և արտադրանքային անալիտիկա։',
      fullDesc:
        'Adobe Analytics-ը օգնում է հասկանալ հաճախորդի ճանապարհը իրական ժամանակում։ Սեգմենտացիա, փրկաձագարներ, retention-վերլուծություն և ինտեգրացիա Experience Cloud-ի այլ արտադրանքների հետ։',
      features: [
        {
          title: "Վերլուծություն իրական ժամանակում",
          description: "Տեսեք հոսքը ակնթարթորեն՝ արագ արձագանքելու տրաֆիկի փոփոխություններին։",
        },
        {
          title: "Սեգմենտացիա ցանկացած ատրիբուտով",
          description: "Ստեղծեք ավազաններ անհատական ատրիբուտներով՝ առանց փոփոխելով կոդը։",
        },
        {
          title: "Ատրիբուցիա և ձագարներ",
          description: "Մոդելներ ցույց են տալիս, թե որ հպումներն են տանում փոխակերպման։",
        },
        {
          title: "Predictive analytics ԱԲ-ի վրա",
          description: "ԱԲ-մոդելները կանխագուշակում են թողք կամ հաջորդ գնումը։",
        },
        {
          title: "Դեշբորդներ և հաշվետվություններ",
          description: "Վահանակները հարմարեցրեք ղեկավարության և թիմի համար։",
        },
      ],
      videoLessons: [
        {
          title: 'Analysis Workspace արագ ներածություն',
          url: 'https://www.youtube.com/watch?v=tk2KgKRT0pM',
        },
        {
          title: 'Սեգմենտների ստեղծում և կանոններ',
          url: 'https://www.youtube.com/watch?v=ek0Cleqmqx0',
        },
      ],
    },
    {
      id: 'real-time-cdp',
      categoryId: 'experience-cloud',
      name: 'Real-Time CDP',
      shortCode: 'CD',
      color: '#00CC66',
      shortDesc: 'Հաճախորդների տվյալների հարթակ իրական ժամանակում։',
      fullDesc:
        'Real-Time Customer Data Platform-ը միավորում է հաճախորդների տվյալները բոլոր աղբյուրներից մեկ պրոֆիլում և ակտիվացնում դրանք հաղորդակցության ալիքներում ակնթարթորեն։',
      features: [
        {
          title: "Հաճախորդի միասնական պրոֆիլ",
          description: "Մեկ Golden Profile՝ բոլոր աղբյուրների տվյալներ համաձայնեցված։",
        },
        {
          title: "Ակտիվացում իրական ժամանակում",
          description: "Ակտիվացրեք անհատականացված հաղորդակցություններ ակնթարթորեն։",
        },
        {
          title: "GDPR-ի և CCPA-ի համապատասխանություն",
          description: "Գործիքներ թղթապանակի, համաձայնության և բացառման հաշվետվությունների համար։",
        },
        {
          title: "Մեքենայական ուսուցում սեգմենտների համար",
          description: "ML-մոդելները առաջարկում են նոր սեգմենտներ՝ պատրաստ ակտիվացման։",
        },
        {
          title: "Ինտեգրացիա ցանկացած աղբյուրների հետ",
          description: "Միացրեք ցանկացած ամպ, CRM կամ պատկերասրահ API-ով։",
        },
      ],
      videoLessons: [
        {
          title: 'Real-Time CDP՝ ընդհանուր պատկերի ներածություն',
          url: 'https://www.youtube.com/watch?v=bNdSBctlSkA',
        },
        {
          title: 'Անձնական պատկերի կառուցում Real-Time CDP-ով',
          url: 'https://www.youtube.com/watch?v=B3w19FpDn2M',
        },
      ],
    },
    {
      id: 'marketo',
      categoryId: 'experience-cloud',
      name: 'Marketo Engage',
      shortCode: 'Mk',
      color: '#5C4DCC',
      shortDesc: 'B2B-մարքեթինգ և վաճառքի ձագարի ավտոմատացում։',
      fullDesc:
        'Marketo Engage-ը հարթակ է B2B-մարքեթինգի ավտոմատացման համար՝ լիդ-մենեջմենտ, email-արշավներ, account-based marketing և ինտեգրացիա CRM-ի հետ։',
      features: [
        {
          title: 'Email-արշավներ և ավտոմատացում',
          description:
            'Նախասահմանված և փոխարկվող արշավներ, drip-հերթականություններ, ' +
            'թրիգերներ ըստ վարքի և պարսոնալացված բովանդակություն՝ ' +
            'ընկալումը բարձրացնելու ու փոխակերպումը արագացնելու համար։',
        },
        {
          title: 'Lead scoring',
          description:
            'Լիդերի նշանակում ըստ վարքագծի և համապատասխանության (fit)՝ ' +
            'օգնելով վաճառքին կենտրոնանալ ամենաուժեղ հնարավորությունների վրա։',
        },
        {
          title: 'Account-Based Marketing',
          description:
            'Նպատակային աշխատանք կարևոր հաշիվների և կողմնակիցների հետ՝ ' +
            'մարքեթինգ և վաճառք մեկ ստրատեգիայի շուրջ B2B-ի համար։',
        },
        {
          title: 'Ինտեգրացիա Salesforce-ի և MS Dynamics-ի հետ',
          description:
            'Կապի երկկողմանի հոսք CRM-ի հետ՝ լիդերի, հնարավորությունների և ' +
            'արշավների համաձայնեցում առանց ձեռքով կրկնօրինակման։',
        },
        {
          title: 'Արշավների ROI-ի հաշվետվություններ',
          description:
            'Մոդելավորում, ատրիբուցիա և վերահսկվող վահանակներ՝ ցույց տալու, ' +
            'թե որ ալիքներն ու հպումներն են տանում եկամուտ ու պահում։',
        },
      ],
      videoLessons: [
        {
          title: 'Email-ի նոր դիզայն Մոդուլի խորը դիտարկում',
          url: 'https://www.youtube.com/watch?v=gfdEOnJ-oUE',
        },
        {
          title: 'Ինտերակտիվ վեբինար Ֆունկցիաների ցուցադրություն',
          url: 'https://www.youtube.com/watch?v=qAUUIh-kW0U',
        },
      ],
    },
    {
      id: 'journey-orchestration',
      categoryId: 'experience-cloud',
      name: 'Journey Orchestration',
      shortCode: 'JO',
      color: '#00CC66',
      shortDesc: 'Հաճախորդի ճանապարհի օրկեստրացիա բոլոր ալիքներում։',
      fullDesc:
        'Journey Orchestration-ը թույլ է տալիս ստեղծել անհատականացված սցենարներ հաճախորդի հետ փոխազդեցության համար՝ email, SMS, push, in-app — մեկ drag-and-drop խմբագրիչում։',
      features: [
        {
          title: "Սցենարների տեսողական կոնստրուկտոր",
          description: "Քաշեք և գցեք քայլեր՝ առանց ավելորդ կոդ՝ բոլոր ալիքների համար։",
        },
        {
          title: "Թրիգերներ իրական ժամանակում",
          description: "Գործառույթները արթնանում են իրադարձություններից և CRM-ի թարմացումներից։",
        },
        {
          title: "Multichannel՝ email, SMS, push",
          description: "Միասնական ուղեգծով կապեք email, SMS, push եւ in-app։",
        },
        {
          title: "A/B-թեստեր ճանապարհին",
          description: "Ստուգեք տարբեր վարքագիծներ երկու ճանապարհների վրա։",
        },
        {
          title: "Կապ Real-Time CDP-ի հետ",
          description: "Օգտագործեք պրոֆիլներ CDP-ից ակնթարթային թարմացվող համատեքստով։",
        },
      ],
      videoLessons: [
        {
          title: 'Լսարաններ, ճանապարհներ և գործակալների օրինակներ',
          url: 'https://www.youtube.com/watch?v=V7n2KuhrhqQ',
        },
        {
          title: 'Թեստային պրոֆիլներ Journey Optimizer-ում',
          url: 'https://www.youtube.com/watch?v=eXjpAMhdONg',
        },
      ],
    },
    {
      id: 'cja',
      categoryId: 'experience-cloud',
      name: 'Customer Journey Analytics',
      shortCode: 'CJ',
      color: '#00CC66',
      shortDesc: 'Հաճախորդի օմնիկանալ ճանապարհի խորը վերլուծություն։',
      fullDesc:
        'Customer Journey Analytics-ը (CJA) միավորում է առցանց և օֆլայն տվյալները հաճախորդների վարքագծի խորը օմնիկանալ վերլուծության համար։',
      features: [
        {
          title: "Cross-channel վերլուծություն",
          description: "Միացրեք տվյալները կայքից, հավելվածից, խանութից և կենտրոնից։",
        },
        {
          title: "Առցանց և օֆլայնի միավորում",
          description: "Վերլուծեք offline touchpoint-ները՝ ամբողջական պատկեր կառուցելու համար։",
        },
        {
          title: "Ցանկացած կարգի ատրիբուցիա",
          description: "Ատրիբուցիայի մոդելները հարմարեցրեք ձեր մարքեթինգի տրամաբանությանը։",
        },
        {
          title: "SQL-հարցումներ տվյալների նկատմամբ",
          description: "Տվյալների վարպետները թողարկում են հարցումներ՝ առանց նախապատրաստված ելքային աղյուսակների։",
        },
        {
          title: "Կաստոմ դեշբորդներ",
          description: "Դեշբորդերը ձևակերպեք ըստ դերերի (անալիտիկ, CMO, օպերացիա)։",
        },
      ],
      videoLessons: [
        {
          title: 'Հաճախորդի երթուղու անալիտիկա Ներածում',
          url: 'https://www.youtube.com/watch?v=QaNJ5Qff94s',
        },
        {
          title: 'Կապը Analytics փաթեթի հետ Զուգահեռ վերլուծություն',
          url: 'https://www.youtube.com/watch?v=BkAjaMPgpgE',
        },
      ],
    },
    {
      id: 'advertising-cloud',
      categoryId: 'experience-cloud',
      name: 'Advertising Cloud',
      shortCode: 'AD',
      color: '#00CC66',
      shortDesc: 'Ծրագրավորիչ գովազդ և արշավների կառավարում։',
      fullDesc:
        'Adobe Advertising Cloud-ը հարթակ է գովազդի ծրագրավորիչ գնման համար՝ search, display, video և connected TV մեկ ինտերֆեյսում։',
      features: [
        {
          title: "Programmatic ad buying",
          description: "Գնեք մեդիա ավտոմատացված աճուներով բազմաչանչ ցանցերում։",
        },
        {
          title: "Search, display, video, CTV",
          description: "Մեկ հարթակ search, բաններ, տեսանյութ և connected TV։",
        },
        {
          title: "Ատրիբուցիա և օպտիմիզացիա",
          description: "Չափեք ու թարմացրեք արշավները Analytics-ի հաջորդականությամբ։",
        },
        {
          title: "Ինտեգրացիա Analytics-ի հետ",
          description: "Տվյալները փոխանցվում են Attribution IQ և այլ Adobe ծառայություններ։",
        },
        {
          title: "Ստեղծագործական ձևաչափեր",
          description: "Dynamic Creative Optimization՝ հաղորդակցություն կատարմանը համապատասխան։",
        },
      ],
      videoLessons: [
        {
          title: 'Լսարանների կառուցում և գովազդային ակտիվացում',
          url: 'https://www.youtube.com/watch?v=sZQrfTird70',
        },
        {
          title: 'Մարքեթինգային AI գործիքի պատկերացում',
          url: 'https://www.youtube.com/watch?v=74ltnOqck5c',
        },
      ],
    },
  ],
  'content-commerce': [
    {
      id: 'experience-manager',
      categoryId: 'content-commerce',
      name: 'Experience Manager',
      shortCode: 'EM',
      color: '#FF6B35',
      shortDesc: 'Կորպորատիվ CMS և DAM մեկ հարթակում։',
      fullDesc:
        'Adobe Experience Manager-ը (AEM) Gartner-ի առաջատարն է կորպորատիվ CMS-ների շարքում։ Կառավարեք կայքերը, բջջային հավելվածները և թվային ակտիվները ցանկացած լեզվով և ցանկացած երկրում։',
      features: [
        {
          title: "Headless CMS և SPA Editor",
          description: "Գլխարկավոր CMS SPA-երի համար՝ գրելով ձեր առաջընտրած ֆրեյմվորկով։",
        },
        {
          title: "Թվային ակտիվների կառավարում (DAM)",
          description: "DAM-ում կազմակերպեք պատկերները, վիդեոն և փաստաթղթերը մեկ կատալոգում։",
        },
        {
          title: "Բովանդակության անհատականացում",
          description: "Անհատականացրեք բովանդակությունը ըստ պրոֆիների և իրադարձությունների։",
        },
        {
          title: "Բազմալեզու կայքեր",
          description: "Կառավարեք բազմալեզու կայքեր՝ տեղայնացնելով տարածաշրջանային թիմերին։",
        },
        {
          title: "Ամպային տեղակայում",
          description: "Տեղադրեք որպես ամպային ծառայություն կամ hybrid՝ անվտանգության պատճառներով։",
        },
      ],
      videoLessons: [
        {
          title: 'Կայք Edge Delivery Փաստաթղթային խմբարման հոսք և GitHub',
          url: 'https://www.youtube.com/watch?v=YpLctMRmJdA',
        },
        {
          title: 'Կորպորատիվ կայքերի կառավարման ներածում',
          url: 'https://www.youtube.com/watch?v=Lx8Vg1Bp0iU',
        },
      ],
    },
    {
      id: 'commerce',
      categoryId: 'content-commerce',
      name: 'Adobe Commerce (Magento)',
      shortCode: 'Mg',
      color: '#FF6B35',
      shortDesc: 'Ճկուն էլեկտրոնային առևտրի հարթակ։',
      fullDesc:
        'Adobe Commerce-ը (Magento) open-source հարթակ է ինտերնետ-խանութների համար։ Փոքր բիզնեսից մինչև միլիարդանոց շրջանառություն ունեցող համաշխարհային բրենդներ։',
      features: [
        {
          title: "B2B և B2C անմիջապես",
          description: "Մի կառուցվածք սպասարկում է և B2C, և B2B պատվերները։",
        },
        {
          title: "PWA Studio բջջայինի համար",
          description: "PWA Studio-ն տալիս է արագ, գրեթե հավելվածի նման բջջային խանութ։",
        },
        {
          title: "Հազարավոր ընդլայնումներ",
          description: "Marketplace-ում հազարավոր ընդլայնումներ՝ վճարումներից մինչև լոգիստիկա։",
        },
        {
          title: "Բազմախանութ և բազմարժույթ",
          description: "Մի քանի ապրանքանիշ, արժույթներ և պահեստներ՝ մեկ ադմինից։",
        },
        {
          title: "Սերտ ինտեգրացիա AEM-ի հետ",
          description: "AEM-ի հետ համատեղ բովանդակությունը հասնում է սայթից մինչև ստուղթ։",
        },
      ],
      videoLessons: [
        {
          title: 'Էլեկտրոնային առևտրի հարթակ Խանութի հիմնական աշխատանք',
          url: 'https://www.youtube.com/watch?v=nFdz9DZrdFc',
        },
        {
          title: 'Զարգացման Jumpstart Մոդուլներ և կառուցվածք',
          url: 'https://www.youtube.com/watch?v=C1DlspXjPRE',
        },
      ],
    },
  ],
  '3d-ai': [
    {
      id: 'substance-3d',
      categoryId: '3d-ai',
      name: 'Substance 3D',
      shortCode: 'Sb',
      color: '#9D4EDD',
      shortDesc: 'Ամբողջական գործիքակազմ 3D-նյութերի և տեսարանների համար։',
      fullDesc:
        'Adobe Substance 3D-ն ստանդարտ է խաղային արդյունաբերության և կինո-էֆեկտների համար։ Painter, Designer, Sampler և Stager-ը թույլ են տալիս ստեղծել լուսանկարա-իրատեսական տեքստուրաներ և տեսարաններ։',
      features: [
        {
          title: "Substance Painter — տեքստուրաներ",
          description: "Painter-ում ներկեք 3D-մոդելները խելացի մակասներով։",
        },
        {
          title: "Substance Designer — նյութեր",
          description: "Designer-ով ստեղծեք պրոցեդուրալ նյութեր անսահման նախասահմաններով։",
        },
        {
          title: "Substance Sampler — ֆոտոգրամմետրիա",
          description: "Ֆոտոները վերածեք PBR նյութերի Sampler-ում մի քանի վայրկյանում։",
        },
        {
          title: "Stager — տեսարանների ռենդեր",
          description: "Stager-ում դասավորեք լուսավորությունը և ռենդերեք ոգեւոր լուսանկարներ։",
        },
        {
          title: "Հազարավոր պատրաստի նյութեր",
          description: "Պատրաստի գրադարանի հազարավոր նյութեր արագ մեկնարկի համար։",
        },
      ],
      videoLessons: [
        {
          title: 'Substance 3D Designer՝ ներածում և հիմունքներ',
          url: 'https://www.youtube.com/watch?v=VyFgpitTsYg',
        },
        {
          title: 'Substance Painter՝ լիարժեք տեքստուրա սկսնակների համար',
          url: 'https://www.youtube.com/watch?v=2rdUQd5nqRg',
        },
      ],
    },
    {
      id: 'firefly',
      categoryId: '3d-ai',
      name: 'Adobe Firefly',
      shortCode: 'Ff',
      color: '#9D4EDD',
      shortDesc: 'Գեներատիվ ԱԲ ստեղծագործական բովանդակության համար։',
      fullDesc:
        'Adobe Firefly-ն գեներատիվ ԱԲ-մոդելների ընտանիք է՝ text-to-image, generative fill, vector recolor, text effects։ Ուսուցանված է լիցենզիոն բովանդակության վրա — առևտրային անվտանգ է։',
      features: [
        {
          title: "Text-to-Image գեներացիա",
          description: "Նկարագրեք տեսարանը՝ ստանալու պատկերներ բարձր և վերապատրաստված մոդելներով։",
        },
        {
          title: "Generative Fill Photoshop-ում",
          description: "Photoshop-ում ընտրեք հատվածը և լցրեք գեներացված բովանդակությամբ։",
        },
        {
          title: "Vector Recolor Illustrator-ում",
          description: "Վեկտորը վերաձևեք գունապնակով՝ պահպանելով խմբագրելի paths։",
        },
        {
          title: "Text Effects և 3D-տեքստ",
          description: "Տեքստին ավելացրեք ոճ, թեթևություն և 3D-ստվերներ մի քանի հրամանով։",
        },
        {
          title: "Անվտանգ առևտրային օգտագործման համար",
          description: "Մոդելներն ուսուցված են լիցենզավորված բովանդակության վրա՝ առևտրային օգտագործման համար։",
        },
      ],
      videoLessons: [
        {
          title: 'Գեներատիվ գործիքներ Ներածում և հնարավորություններ',
          url: 'https://www.youtube.com/watch?v=KYt-wmN1D0k',
        },
        {
          title: 'Վեկտորի գունավերակում տեքստային հրամանով',
          url: 'https://www.youtube.com/watch?v=f6PxxZ5UTvE',
        },
      ],
    },
    {
      id: 'dimension',
      categoryId: '3d-ai',
      name: 'Adobe Dimension',
      shortCode: 'Dn',
      color: '#9D4EDD',
      shortDesc: 'Պարզ 3D-ռենդերինգ դիզայներների համար։',
      fullDesc:
        'Adobe Dimension-ը թույլ է տալիս 3D-ի փորձ չունեցող դիզայներներին ստեղծել փաթեթավորումների, մոկապների և տեսարանների լուսանկարա-իրատեսական ռենդերներ իրական լուսավորությամբ։',
      features: [
        {
          title: "Drag & drop 3D-տեսարաններ",
          description: "Քաշեք 3D մոդելները, լուսավորությունը և նյութերը՝ առանց բարդ ուսուցման։",
        },
        {
          title: "Իրատեսական լուսավորություն",
          description: "Ֆիզիկապես ճշգրիտ լույսի սիմուլյացիան իրատեսական մոկապների համար է։",
        },
        {
          title: "Փաթեթավորումների մոկապներ",
          description: "Ստեղծեք փաթեթավորում, етիկետ և ներկ.presentation սլայդներ։",
        },
        {
          title: "Ներմուծում Photoshop-ից և Illustrator-ից",
          description: "Պատկերները և վեկտորը ներմուծեք ուղիղ Creative Cloud փաթեթից։",
        },
        {
          title: "Պատրաստի մոդելներ և նյութեր",
          description: "Պատրաստի ակտիվների գրադարանը արագացնում է նախատիպավորումը։",
        },
      ],
      videoLessons: [
        {
          title: 'Պարզ 3D մակետներ բազային մարմներից',
          url: 'https://www.youtube.com/watch?v=JyM6ApLwgR4',
        },
        {
          title: '3D տեքստ, լուսավորություն և կոմպոզիցիա',
          url: 'https://www.youtube.com/watch?v=fRbh4ysioZg',
        },
      ],
    },
    {
      id: 'generative-fill',
      categoryId: '3d-ai',
      name: 'Generative Fill',
      shortCode: 'Gf',
      color: '#9D4EDD',
      shortDesc: 'ԱԲ-լցնում և պատկերների ընդարձակում Photoshop-ում։',
      fullDesc:
        'Generative Fill-ը Photoshop-ի հեղափոխական ֆունկցիան է Firefly-ի հիման վրա։ Ընդարձակեք պատկերները, ջնջեք օբյեկտները և ստեղծեք նոր տարրեր պարզ տեքստային հարցումով։',
      features: [
        {
          title: "Պաստառի ընդարձակում",
          description: "Նկարի եզրերը լրացրեք AI-ով՝ համաձայնեցնելով ոճը և լույսը։",
        },
        {
          title: "Օբյեկտների ջնջում մեկ սեղմումով",
          description: "Նշեք օբյեկտը և հեռացրեք այն առանց ձեռքով քլոնավորելու։",
        },
        {
          title: "Օբյեկտների ավելացում նկարագրությամբ",
          description: "Ավելացրեք նոր օբյեկտներ հայտերով՝ միաձուլված շերտերում։",
        },
        {
          title: "Լուսավորության և ոճի պահպանում",
          description: "Մոդելը փչարկում է ստվերներն ու լույսը, որպեսզի նոր մասը նայվի բնական։",
        },
        {
          title: "Չքայքայող խմբագրում",
          description: "Չքայքայող խմբագրումը թույլ է տալիս ուղղել գեներացիան առանց սկսելու նորից։",
        },
      ],
      videoLessons: [
        {
          title: 'Գեներատիվ լցում Օրինակներ, խորհուրդներ, վարիացիաներ',
          url: 'https://www.youtube.com/watch?v=Zk4hXR4qQ-c',
        },
        {
          title: 'Գեներատիվ լցման ներածում Հիմնական քայլեր',
          url: 'https://www.youtube.com/watch?v=Sp6K3qpVFO0',
        },
      ],
    },
  ],
};

// Хелпер: получить продукт по id, перебирая все категории.
export const getProductById = (productId) => {
  for (const categoryId of Object.keys(products)) {
    const found = products[categoryId].find((p) => p.id === productId);
    if (found) return found;
  }
  return null;
};

// Хелпер: получить все продукты одной плоской коллекцией.
export const getAllProducts = () =>
  Object.values(products).reduce((acc, list) => acc.concat(list), []);

// Хелпер: получить категорию по id.
export const getCategoryById = (categoryId) =>
  categories.find((c) => c.id === categoryId) || null;
