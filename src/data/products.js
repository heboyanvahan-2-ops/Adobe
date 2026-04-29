// Данные для Adobe Showcase: 5 категорий и 22 продукта.
// Структура:
//   categories — список категорий (id, name, color, описание).
//   products   — объект { categoryId: [ { ...product } ] }.
// Используется в страницах категорий, на главной и в ProductDetailPage.

export const categories = [
  {
    id: 'creative-cloud',
    name: 'Creative Cloud',
    tagline: 'Творчество без границ',
    color: '#00A0DE',
    description:
      'Самый полный набор инструментов для дизайнеров, фотографов, иллюстраторов и видеографов. Photoshop, Illustrator, Premiere Pro и десятки других приложений в одной подписке.',
    icon: 'CC',
  },
  {
    id: 'document-cloud',
    name: 'Document Cloud',
    tagline: 'Работа с PDF на новом уровне',
    color: '#FFB800',
    description:
      'Семейство облачных сервисов для работы с PDF: создание, редактирование, подписание и распознавание документов из любой точки мира.',
    icon: 'DC',
  },
  {
    id: 'experience-cloud',
    name: 'Experience Cloud',
    tagline: 'Маркетинг и аналитика будущего',
    color: '#00CC66',
    description:
      'Платформа для маркетинга, аналитики и управления клиентским опытом, которой пользуются крупнейшие бренды мира — от L\'Oréal до Coca-Cola.',
    icon: 'EX',
  },
  {
    id: 'content-commerce',
    name: 'Content & Commerce',
    tagline: 'Контент и электронная коммерция',
    color: '#FF6B35',
    description:
      'Решения для управления контентом и электронной коммерцией: создавайте, публикуйте и продавайте на любом канале с Adobe Experience Manager и Magento.',
    icon: 'CO',
  },
  {
    id: '3d-ai',
    name: '3D & AI',
    tagline: 'Будущее уже здесь',
    color: '#9D4EDD',
    description:
      '3D-моделирование, текстурирование и генеративный искусственный интеллект Firefly. Технологии, которые меняют подход к созданию контента.',
    icon: 'AI',
  },
];

export const products = {
  'creative-cloud': [
    {
      id: 'photoshop',
      categoryId: 'creative-cloud',
      name: 'Photoshop',
      color: '#31A8FF',
      shortDesc: 'Лучший в мире редактор растровой графики и фотографий.',
      fullDesc:
        'Adobe Photoshop — индустриальный стандарт для обработки изображений. Используется фотографами, дизайнерами, веб-разработчиками и художниками по всему миру для работы с растровой графикой, ретуши, композитинга и цифровой живописи.',
      features: [
        'Слои и неразрушающее редактирование',
        'Инструменты ИИ: Generative Fill, Neural Filters',
        'Кисти и работа с планшетом',
        'Поддержка RAW-файлов',
        'Интеграция с Lightroom и Illustrator',
      ],
      usedBy: ['Фотографы', 'Графические дизайнеры', 'Цифровые художники', 'Ретушёры'],
      price: 'от 11.99 $/мес',
    },
    {
      id: 'illustrator',
      categoryId: 'creative-cloud',
      name: 'Illustrator',
      color: '#FF9A00',
      shortDesc: 'Профессиональный редактор векторной графики.',
      fullDesc:
        'Adobe Illustrator — стандарт для создания логотипов, иконок, иллюстраций и типографики. Векторная графика масштабируется без потери качества — от визиток до билбордов.',
      features: [
        'Векторные кривые Безье',
        'Точная типографика',
        'Инструменты для логотипов и иконок',
        'Совместимость с Photoshop и InDesign',
        'Экспорт SVG для веба',
      ],
      usedBy: ['Логотип-дизайнеры', 'Иллюстраторы', 'Бренд-дизайнеры', 'UI-дизайнеры'],
      price: 'от 11.99 $/мес',
    },
    {
      id: 'indesign',
      categoryId: 'creative-cloud',
      name: 'InDesign',
      color: '#FF3366',
      shortDesc: 'Профессиональная вёрстка для печати и цифровых изданий.',
      fullDesc:
        'Adobe InDesign — приложение №1 для вёрстки книг, журналов, брошюр и интерактивных PDF. Управляйте мастер-страницами, стилями текста и большими документами с десятками страниц.',
      features: [
        'Мастер-страницы и стили',
        'Поддержка длинных документов',
        'Интерактивные PDF и EPUB',
        'Работа с типографикой OpenType',
        'Связи с Photoshop и Illustrator',
      ],
      usedBy: ['Издатели книг', 'Дизайнеры журналов', 'Маркетологи', 'Полиграфисты'],
      price: 'от 11.99 $/мес',
    },
    {
      id: 'xd',
      categoryId: 'creative-cloud',
      name: 'Adobe XD',
      color: '#FF61F6',
      shortDesc: 'Инструмент для UX/UI-дизайна и прототипирования.',
      fullDesc:
        'Adobe XD предназначен для проектирования интерфейсов мобильных приложений и веб-сайтов. Создавайте кликабельные прототипы и делитесь ими с командой и заказчиками.',
      features: [
        'Артборды для всех устройств',
        'Кликабельные прототипы',
        'Совместная работа в реальном времени',
        'Компоненты и состояния',
        'Плагины и интеграции',
      ],
      usedBy: ['UX/UI-дизайнеры', 'Продуктовые команды', 'Прототипировщики'],
      price: 'от 9.99 $/мес',
    },
    {
      id: 'premiere-pro',
      categoryId: 'creative-cloud',
      name: 'Premiere Pro',
      color: '#9999FF',
      shortDesc: 'Профессиональный нелинейный видеомонтаж.',
      fullDesc:
        'Adobe Premiere Pro — выбор кинематографистов и YouTube-блогеров. Поддержка любых форматов от 8K до VR, мультикамерный монтаж и тесная интеграция с After Effects и Audition.',
      features: [
        'Поддержка 8K и HDR',
        'Multi-cam монтаж',
        'Auto-Reframe для соцсетей',
        'Цветокоррекция Lumetri',
        'Прямая интеграция с After Effects',
      ],
      usedBy: ['Видеомонтажёры', 'YouTube-блогеры', 'Документалисты', 'Кинопроизводство'],
      price: 'от 22.99 $/мес',
    },
    {
      id: 'after-effects',
      categoryId: 'creative-cloud',
      name: 'After Effects',
      color: '#9999FF',
      shortDesc: 'Анимация, графика и визуальные эффекты.',
      fullDesc:
        'Adobe After Effects — стандарт для моушн-дизайна и VFX. Создавайте титры, анимированные логотипы, киноэффекты и сложную композитную анимацию.',
      features: [
        'Слои и кейфреймы',
        '3D-камера и освещение',
        'Эффекты и плагины',
        'Rotoscoping и трекинг',
        'Скрипты и выражения',
      ],
      usedBy: ['Моушн-дизайнеры', 'VFX-специалисты', 'Аниматоры', 'Постпродакшн'],
      price: 'от 22.99 $/мес',
    },
    {
      id: 'animate',
      categoryId: 'creative-cloud',
      name: 'Animate',
      color: '#FF9A00',
      shortDesc: 'Интерактивная 2D-анимация для веба и мобильных.',
      fullDesc:
        'Adobe Animate (бывший Flash) — инструмент для создания мультфильмов, рекламных баннеров, обучающих игр и интерактивного контента в формате HTML5.',
      features: [
        'Векторная и растровая анимация',
        'Экспорт в HTML5 Canvas и WebGL',
        'Тайм-лайн и сцены',
        'Анимация персонажей',
        'ActionScript и JavaScript',
      ],
      usedBy: ['Аниматоры', 'Геймдев', 'E-learning', 'Реклама'],
      price: 'от 22.99 $/мес',
    },
  ],
  'document-cloud': [
    {
      id: 'acrobat',
      categoryId: 'document-cloud',
      name: 'Acrobat Pro',
      color: '#EC1C24',
      shortDesc: 'Полный комплект для работы с PDF-документами.',
      fullDesc:
        'Adobe Acrobat Pro — самое полное решение для PDF: создавайте, редактируйте, конвертируйте, защищайте и подписывайте файлы. Работайте с документами на компьютере, в браузере и на телефоне.',
      features: [
        'Редактирование текста и изображений в PDF',
        'Конвертация в Word, Excel, PowerPoint',
        'Электронные подписи',
        'Сравнение версий документов',
        'OCR — распознавание текста',
      ],
      usedBy: ['Юристы', 'Бухгалтеры', 'HR-специалисты', 'Все офисные сотрудники'],
      price: 'от 19.99 $/мес',
    },
    {
      id: 'sign',
      categoryId: 'document-cloud',
      name: 'Adobe Sign',
      color: '#EC1C24',
      shortDesc: 'Юридически значимые электронные подписи.',
      fullDesc:
        'Adobe Sign превращает любой документ в юридически обязывающее соглашение. Отправляйте, отслеживайте и собирайте подписи в любой точке мира за считанные минуты.',
      features: [
        'Подписи на любом устройстве',
        'Соответствие eIDAS и ESIGN',
        'Шаблоны и массовые рассылки',
        'Интеграция с Microsoft 365 и Salesforce',
        'Аудиторский след',
      ],
      usedBy: ['Sales-команды', 'HR', 'Юридические отделы', 'Финансы'],
      price: 'от 14.99 $/мес',
    },
    {
      id: 'scan',
      categoryId: 'document-cloud',
      name: 'Adobe Scan',
      color: '#EC1C24',
      shortDesc: 'Превратите телефон в карманный сканер документов.',
      fullDesc:
        'Adobe Scan — бесплатное мобильное приложение для сканирования документов, чеков, визиток и заметок с автоматическим распознаванием текста.',
      features: [
        'Автоматическое выравнивание страниц',
        'OCR на 20+ языках',
        'Сохранение в облако',
        'Сканирование визиток в контакты',
        'Бесплатное приложение',
      ],
      usedBy: ['Студенты', 'Командировочные сотрудники', 'Малый бизнес'],
      price: 'Бесплатно',
    },
  ],
  'experience-cloud': [
    {
      id: 'analytics',
      categoryId: 'experience-cloud',
      name: 'Adobe Analytics',
      color: '#00CC66',
      shortDesc: 'Веб- и продуктовая аналитика мирового класса.',
      fullDesc:
        'Adobe Analytics помогает понять путь клиента в реальном времени. Сегментация, воронки, retention-анализ и интеграция с другими продуктами Experience Cloud.',
      features: [
        'Анализ в реальном времени',
        'Сегментация по любому атрибуту',
        'Атрибуция и воронки',
        'Predictive analytics на ИИ',
        'Дашборды и отчёты',
      ],
      usedBy: ['Аналитики', 'Маркетологи', 'Продуктовые менеджеры'],
      price: 'По запросу (Enterprise)',
    },
    {
      id: 'real-time-cdp',
      categoryId: 'experience-cloud',
      name: 'Real-Time CDP',
      color: '#00CC66',
      shortDesc: 'Платформа клиентских данных в реальном времени.',
      fullDesc:
        'Real-Time Customer Data Platform объединяет данные о клиентах из всех источников в единый профиль и активирует их в каналах коммуникации мгновенно.',
      features: [
        'Единый профиль клиента',
        'Активация в реальном времени',
        'Соблюдение GDPR и CCPA',
        'Машинное обучение для сегментов',
        'Интеграция с любыми источниками',
      ],
      usedBy: ['CMO', 'Маркетологи Enterprise', 'Data-инженеры'],
      price: 'По запросу (Enterprise)',
    },
    {
      id: 'marketo',
      categoryId: 'experience-cloud',
      name: 'Marketo Engage',
      color: '#5C4DCC',
      shortDesc: 'B2B-маркетинг и автоматизация воронки продаж.',
      fullDesc:
        'Marketo Engage — платформа для автоматизации B2B-маркетинга: лид-менеджмент, email-кампании, account-based marketing и интеграция с CRM.',
      features: [
        'Email-кампании и автоматизация',
        'Lead scoring',
        'Account-Based Marketing',
        'Интеграция с Salesforce и MS Dynamics',
        'Отчёты по ROI кампаний',
      ],
      usedBy: ['B2B-маркетологи', 'Sales Operations', 'Demand Gen команды'],
      price: 'По запросу',
    },
    {
      id: 'journey-orchestration',
      categoryId: 'experience-cloud',
      name: 'Journey Orchestration',
      color: '#00CC66',
      shortDesc: 'Оркестрация клиентского пути по всем каналам.',
      fullDesc:
        'Journey Orchestration позволяет создавать персонализированные сценарии взаимодействия с клиентом: email, SMS, push, in-app — в едином drag-and-drop редакторе.',
      features: [
        'Визуальный конструктор сценариев',
        'Триггеры в реальном времени',
        'Multichannel: email, SMS, push',
        'A/B-тесты на пути',
        'Связь с Real-Time CDP',
      ],
      usedBy: ['CRM-маркетологи', 'Lifecycle-команды', 'Retention-специалисты'],
      price: 'По запросу',
    },
    {
      id: 'cja',
      categoryId: 'experience-cloud',
      name: 'Customer Journey Analytics',
      color: '#00CC66',
      shortDesc: 'Глубокий анализ омниканального пути клиента.',
      fullDesc:
        'Customer Journey Analytics (CJA) объединяет онлайн- и офлайн-данные для глубокого омниканального анализа поведения клиентов.',
      features: [
        'Cross-channel анализ',
        'Объединение онлайн и офлайн',
        'Атрибуция любого порядка',
        'SQL-запросы к данным',
        'Кастомные дашборды',
      ],
      usedBy: ['Старшие аналитики', 'CDO', 'Data Science команды'],
      price: 'По запросу (Enterprise)',
    },
    {
      id: 'advertising-cloud',
      categoryId: 'experience-cloud',
      name: 'Advertising Cloud',
      color: '#00CC66',
      shortDesc: 'Программатик-реклама и управление кампаниями.',
      fullDesc:
        'Adobe Advertising Cloud — платформа для программатик-закупки рекламы: search, display, video и connected TV в одном интерфейсе.',
      features: [
        'Programmatic ad buying',
        'Search, display, video, CTV',
        'Атрибуция и оптимизация',
        'Интеграция с Analytics',
        'Творческие форматы',
      ],
      usedBy: ['Performance-маркетологи', 'Медиа-агентства', 'Бренды'],
      price: 'По запросу',
    },
  ],
  'content-commerce': [
    {
      id: 'experience-manager',
      categoryId: 'content-commerce',
      name: 'Experience Manager',
      color: '#FF6B35',
      shortDesc: 'Корпоративная CMS и DAM в одной платформе.',
      fullDesc:
        'Adobe Experience Manager (AEM) — лидер Gartner среди корпоративных CMS. Управляйте сайтами, мобильными приложениями и цифровыми активами на любом языке и в любой стране.',
      features: [
        'Headless CMS и SPA Editor',
        'Управление цифровыми активами (DAM)',
        'Персонализация контента',
        'Многоязычные сайты',
        'Облачное развёртывание',
      ],
      usedBy: ['Enterprise-компании', 'Веб-разработчики', 'Контент-менеджеры'],
      price: 'По запросу (Enterprise)',
    },
    {
      id: 'commerce',
      categoryId: 'content-commerce',
      name: 'Adobe Commerce (Magento)',
      color: '#FF6B35',
      shortDesc: 'Гибкая платформа электронной коммерции.',
      fullDesc:
        'Adobe Commerce (Magento) — open-source платформа для интернет-магазинов. От малого бизнеса до глобальных брендов с миллиардными оборотами.',
      features: [
        'B2B и B2C из коробки',
        'PWA Studio для мобильных',
        'Тысячи расширений',
        'Мультимагазины и валюты',
        'Тесная интеграция с AEM',
      ],
      usedBy: ['Интернет-магазины', 'B2B-компании', 'Ритейл'],
      price: 'Open Source / по запросу',
    },
  ],
  '3d-ai': [
    {
      id: 'substance-3d',
      categoryId: '3d-ai',
      name: 'Substance 3D',
      color: '#9D4EDD',
      shortDesc: 'Полный набор инструментов для 3D-материалов и сцен.',
      fullDesc:
        'Adobe Substance 3D — стандарт игровой индустрии и киноэффектов. Painter, Designer, Sampler и Stager позволяют создавать фотореалистичные текстуры и сцены.',
      features: [
        'Substance Painter — текстуры',
        'Substance Designer — материалы',
        'Substance Sampler — фотограмметрия',
        'Stager — рендер сцен',
        'Тысячи готовых материалов',
      ],
      usedBy: ['Геймдев', 'VFX-студии', 'Промышленный дизайн', '3D-художники'],
      price: 'от 49.99 $/мес',
    },
    {
      id: 'firefly',
      categoryId: '3d-ai',
      name: 'Adobe Firefly',
      color: '#9D4EDD',
      shortDesc: 'Генеративный ИИ для творческого контента.',
      fullDesc:
        'Adobe Firefly — семейство генеративных ИИ-моделей: text-to-image, generative fill, vector recolor, text effects. Обучен на лицензионном контенте — коммерчески безопасен.',
      features: [
        'Text-to-Image генерация',
        'Generative Fill в Photoshop',
        'Vector Recolor в Illustrator',
        'Text Effects и 3D-текст',
        'Безопасно для коммерческого использования',
      ],
      usedBy: ['Все креативные специалисты', 'Маркетологи', 'Дизайнеры'],
      price: 'Включено в Creative Cloud',
    },
    {
      id: 'dimension',
      categoryId: '3d-ai',
      name: 'Adobe Dimension',
      color: '#9D4EDD',
      shortDesc: 'Простой 3D-рендеринг для дизайнеров.',
      fullDesc:
        'Adobe Dimension позволяет дизайнерам без опыта в 3D создавать фотореалистичные рендеры упаковок, мокапов и сцен с реальным освещением.',
      features: [
        'Drag & drop 3D-сцены',
        'Реалистичное освещение',
        'Мокапы упаковок',
        'Импорт из Photoshop и Illustrator',
        'Готовые модели и материалы',
      ],
      usedBy: ['Графические дизайнеры', 'Брендинг-агентства', 'Маркетологи'],
      price: 'от 20.99 $/мес',
    },
    {
      id: 'generative-fill',
      categoryId: '3d-ai',
      name: 'Generative Fill',
      color: '#9D4EDD',
      shortDesc: 'ИИ-заливка и расширение изображений в Photoshop.',
      fullDesc:
        'Generative Fill — революционная функция Photoshop на базе Firefly. Расширяйте изображения, удаляйте объекты и создавайте новые элементы простым текстовым запросом.',
      features: [
        'Расширение холста',
        'Удаление объектов одним кликом',
        'Добавление объектов по описанию',
        'Сохранение освещения и стиля',
        'Неразрушающее редактирование',
      ],
      usedBy: ['Фотографы', 'Ретушёры', 'Дизайнеры рекламы'],
      price: 'Включено в Photoshop',
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
