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
        'Շերտեր և չքայքայող խմբագրում',
        'ԱԲ-գործիքներ՝ Generative Fill, Neural Filters',
        'Վրձիններ և գրաֆիկական պլանշետի աջակցություն',
        'RAW ֆայլերի աջակցություն',
        'Ինտեգրացիա Lightroom-ի և Illustrator-ի հետ',
      ],
      usedBy: ['Լուսանկարիչներ', 'Գրաֆիկական դիզայներներ', 'Թվային նկարիչներ', 'Ռետուշյորներ'],
      price: '11.99 $/ամսից',
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
        'Բեզիեի վեկտորային կորեր',
        'Ճշգրիտ տիպոգրաֆիա',
        'Գործիքներ լոգոների և պատկերակների համար',
        'Համատեղելիություն Photoshop-ի և InDesign-ի հետ',
        'SVG արտահանում վեբի համար',
      ],
      usedBy: ['Լոգո-դիզայներներ', 'Նկարազարդողներ', 'Բրենդ-դիզայներներ', 'UI-դիզայներներ'],
      price: '11.99 $/ամսից',
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
        'Մաստեր-էջեր և ոճեր',
        'Երկար փաստաթղթերի աջակցություն',
        'Ինտերակտիվ PDF և EPUB',
        'Աշխատանք OpenType տիպոգրաֆիայի հետ',
        'Կապեր Photoshop-ի և Illustrator-ի հետ',
      ],
      usedBy: ['Գրքերի հրատարակիչներ', 'Ամսագրերի դիզայներներ', 'Մարքեթոլոգներ', 'Տպագրիչներ'],
      price: '11.99 $/ամսից',
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
        'Արթբորդեր բոլոր սարքերի համար',
        'Սեղմելի նախատիպեր',
        'Համատեղ աշխատանք իրական ժամանակում',
        'Բաղադրիչներ և վիճակներ',
        'Փլագիններ և ինտեգրացիաներ',
      ],
      usedBy: ['UX/UI-դիզայներներ', 'Արտադրանքային թիմեր', 'Նախատիպավորողներ'],
      price: '9.99 $/ամսից',
    },
    {
      id: 'premiere-pro',
      categoryId: 'creative-cloud',
      name: 'Premiere Pro',
      shortCode: 'Pr',
      color: '#9999FF',
      shortDesc: 'Պրոֆեսիոնալ ոչ-գծային վիդեո մոնտաժ։',
      fullDesc:
        'Adobe Premiere Pro-ն կինոարտադրողների և YouTube-բլոգերների ընտրությունն է։ Աջակցում է ցանկացած ֆորմատներ՝ 8K-ից մինչև VR, մուլտիկամերային մոնտաժ և սերտ ինտեգրացիա After Effects-ի և Audition-ի հետ։',
      features: [
        '8K և HDR-ի աջակցություն',
        'Multi-cam մոնտաժ',
        'Auto-Reframe սոցցանցերի համար',
        'Lumetri գունային ուղղում',
        'After Effects-ի հետ ուղիղ ինտեգրացիա',
      ],
      usedBy: ['Վիդեո-մոնտաժյորներ', 'YouTube-բլոգերներ', 'Փաստավավերագրողներ', 'Կինոարտադրություն'],
      price: '22.99 $/ամսից',
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
        'Շերտեր և կեյֆրեյմեր',
        '3D-տեսախցիկ և լուսավորություն',
        'Էֆեկտներ և փլագիններ',
        'Rotoscoping և թրեքինգ',
        'Սկրիպտներ և արտահայտություններ',
      ],
      usedBy: ['Մոուշն-դիզայներներ', 'VFX-մասնագետներ', 'Անիմատորներ', 'Փոստ-պրոդակշն'],
      price: '22.99 $/ամսից',
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
        'Վեկտորային և ռաստերային անիմացիա',
        'Արտահանում HTML5 Canvas-ի և WebGL-ի մեջ',
        'Թայմ-լայն և տեսարաններ',
        'Կերպարների անիմացիա',
        'ActionScript և JavaScript',
      ],
      usedBy: ['Անիմատորներ', 'Խաղերի մշակում', 'E-learning', 'Գովազդ'],
      price: '22.99 $/ամսից',
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
        'PDF-ում տեքստի և պատկերների խմբագրում',
        'Փոխարկում Word, Excel, PowerPoint ֆորմատների',
        'Էլեկտրոնային ստորագրություններ',
        'Փաստաթղթերի տարբերակների համեմատում',
        'OCR — տեքստի ճանաչում',
      ],
      usedBy: ['Իրավաբաններ', 'Հաշվապահներ', 'HR-մասնագետներ', 'Բոլոր գրասենյակային աշխատակիցները'],
      price: '19.99 $/ամսից',
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
        'Ստորագրություններ ցանկացած սարքի վրա',
        'eIDAS-ի և ESIGN-ի համապատասխանություն',
        'Կաղապարներ և զանգվածային ուղարկումներ',
        'Ինտեգրացիա Microsoft 365-ի և Salesforce-ի հետ',
        'Աուդիտի հետագծ',
      ],
      usedBy: ['Sales-թիմեր', 'HR', 'Իրավաբանական բաժիններ', 'Ֆինանսներ'],
      price: '14.99 $/ամսից',
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
        'Էջերի ինքնաշխատ հավասարեցում',
        'OCR 20+ լեզվով',
        'Պահպանում ամպում',
        'Այցեքարտերի սկանավորում կոնտակտներում',
        'Անվճար հավելված',
      ],
      usedBy: ['Ուսանողներ', 'Գործուղման աշխատակիցներ', 'Փոքր բիզնես'],
      price: 'Անվճար',
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
        'Վերլուծություն իրական ժամանակում',
        'Սեգմենտացիա ցանկացած ատրիբուտով',
        'Ատրիբուցիա և ձագարներ',
        'Predictive analytics ԱԲ-ի վրա',
        'Դեշբորդներ և հաշվետվություններ',
      ],
      usedBy: ['Անալիտիկներ', 'Մարքեթոլոգներ', 'Արտադրանքի մենեջերներ'],
      price: 'Հարցումով (Enterprise)',
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
        'Հաճախորդի միասնական պրոֆիլ',
        'Ակտիվացում իրական ժամանակում',
        'GDPR-ի և CCPA-ի համապատասխանություն',
        'Մեքենայական ուսուցում սեգմենտների համար',
        'Ինտեգրացիա ցանկացած աղբյուրների հետ',
      ],
      usedBy: ['CMO', 'Enterprise մարքեթոլոգներ', 'Տվյալների ինժեներներ'],
      price: 'Հարցումով (Enterprise)',
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
        'Email-արշավներ և ավտոմատացում',
        'Lead scoring',
        'Account-Based Marketing',
        'Ինտեգրացիա Salesforce-ի և MS Dynamics-ի հետ',
        'Արշավների ROI-ի հաշվետվություններ',
      ],
      usedBy: ['B2B-մարքեթոլոգներ', 'Sales Operations', 'Demand Gen թիմեր'],
      price: 'Հարցումով',
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
        'Սցենարների տեսողական կոնստրուկտոր',
        'Թրիգերներ իրական ժամանակում',
        'Multichannel՝ email, SMS, push',
        'A/B-թեստեր ճանապարհին',
        'Կապ Real-Time CDP-ի հետ',
      ],
      usedBy: ['CRM-մարքեթոլոգներ', 'Lifecycle-թիմեր', 'Retention-մասնագետներ'],
      price: 'Հարցումով',
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
        'Cross-channel վերլուծություն',
        'Առցանց և օֆլայնի միավորում',
        'Ցանկացած կարգի ատրիբուցիա',
        'SQL-հարցումներ տվյալների նկատմամբ',
        'Կաստոմ դեշբորդներ',
      ],
      usedBy: ['Ավագ անալիտիկներ', 'CDO', 'Data Science թիմեր'],
      price: 'Հարցումով (Enterprise)',
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
        'Programmatic ad buying',
        'Search, display, video, CTV',
        'Ատրիբուցիա և օպտիմիզացիա',
        'Ինտեգրացիա Analytics-ի հետ',
        'Ստեղծագործական ձևաչափեր',
      ],
      usedBy: ['Performance-մարքեթոլոգներ', 'Մեդիա-գործակալություններ', 'Բրենդեր'],
      price: 'Հարցումով',
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
        'Headless CMS և SPA Editor',
        'Թվային ակտիվների կառավարում (DAM)',
        'Բովանդակության անհատականացում',
        'Բազմալեզու կայքեր',
        'Ամպային տեղակայում',
      ],
      usedBy: ['Enterprise-ընկերություններ', 'Վեբ-մշակողներ', 'Բովանդակության մենեջերներ'],
      price: 'Հարցումով (Enterprise)',
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
        'B2B և B2C անմիջապես',
        'PWA Studio բջջայինի համար',
        'Հազարավոր ընդլայնումներ',
        'Բազմախանութ և բազմարժույթ',
        'Սերտ ինտեգրացիա AEM-ի հետ',
      ],
      usedBy: ['Ինտերնետ-խանութներ', 'B2B-ընկերություններ', 'Մանրածախ առևտուր'],
      price: 'Open Source / հարցումով',
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
        'Substance Painter — տեքստուրաներ',
        'Substance Designer — նյութեր',
        'Substance Sampler — ֆոտոգրամմետրիա',
        'Stager — տեսարանների ռենդեր',
        'Հազարավոր պատրաստի նյութեր',
      ],
      usedBy: ['Խաղերի մշակում', 'VFX-ստուդիաներ', 'Արդյունաբերական դիզայն', '3D-նկարիչներ'],
      price: '49.99 $/ամսից',
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
        'Text-to-Image գեներացիա',
        'Generative Fill Photoshop-ում',
        'Vector Recolor Illustrator-ում',
        'Text Effects և 3D-տեքստ',
        'Անվտանգ առևտրային օգտագործման համար',
      ],
      usedBy: ['Բոլոր ստեղծագործ մասնագետները', 'Մարքեթոլոգներ', 'Դիզայներներ'],
      price: 'Ներառված է Creative Cloud-ում',
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
        'Drag & drop 3D-տեսարաններ',
        'Իրատեսական լուսավորություն',
        'Փաթեթավորումների մոկապներ',
        'Ներմուծում Photoshop-ից և Illustrator-ից',
        'Պատրաստի մոդելներ և նյութեր',
      ],
      usedBy: ['Գրաֆիկական դիզայներներ', 'Բրենդինգ-գործակալություններ', 'Մարքեթոլոգներ'],
      price: '20.99 $/ամսից',
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
        'Պաստառի ընդարձակում',
        'Օբյեկտների ջնջում մեկ սեղմումով',
        'Օբյեկտների ավելացում նկարագրությամբ',
        'Լուսավորության և ոճի պահպանում',
        'Չքայքայող խմբագրում',
      ],
      usedBy: ['Լուսանկարիչներ', 'Ռետուշյորներ', 'Գովազդի դիզայներներ'],
      price: 'Ներառված է Photoshop-ում',
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
