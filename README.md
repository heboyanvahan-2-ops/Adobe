# Adobe Showcase

Интерактивная демонстрация продуктов Adobe — учебный проект (дипломная работа).
React-приложение, в котором представлены **22+ продукта Adobe** из **5 категорий**.

## Стек технологий

- **React 19** + **Create React App**
- **React Router v6** — клиентский роутинг
- **Чистый CSS / CSS Modules** — без Tailwind, без Material-UI
- **Только JavaScript** (без TypeScript)
- Mobile-first адаптивный дизайн
- CSS-анимации (без JS)

## Запуск проекта

```bash
npm install     # один раз — установить зависимости
npm start       # дев-сервер на http://localhost:3000
npm run build   # продакшн-сборка в папку build/
```

## Структура проекта

```
src/
├── pages/                       # Страницы приложения (9 штук)
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── CreativeCloudPage.jsx
│   ├── DocumentCloudPage.jsx
│   ├── ExperienceCloudPage.jsx
│   ├── ContentCommercePage.jsx
│   ├── ThreeDAIPage.jsx         # маршрут /3d-ai
│   ├── ProductDetailPage.jsx    # /product/:productId
│   └── ContactPage.jsx
├── components/
│   ├── common/                  # базовые: Header, Navigation, Footer, Container, Button
│   ├── cards/                   # карточки (будут добавлены)
│   ├── sections/                # секции (Hero, ProductGallery и т.д.)
│   └── layouts/
│       └── PageLayout.jsx       # обёртка Header + main + Footer
├── data/
│   └── products.js              # 5 категорий + 22 продукта
├── styles/
│   ├── variables.css            # CSS-переменные (цвета, отступы, шрифты)
│   ├── global.css               # сброс + базовая типографика
│   ├── animations.css           # @keyframes и утилиты
│   └── *.module.css             # CSS-модули по компонентам
├── App.jsx                      # маршруты React Router
└── index.jsx                    # точка входа
```

## Маршруты

| URL                    | Страница               |
| ---------------------- | ---------------------- |
| `/`                    | HomePage               |
| `/about`               | AboutPage              |
| `/creative-cloud`      | Creative Cloud         |
| `/document-cloud`      | Document Cloud         |
| `/experience-cloud`    | Experience Cloud       |
| `/content-commerce`    | Content & Commerce     |
| `/3d-ai`               | 3D & AI                |
| `/product/:productId`  | Детали продукта        |
| `/contact`             | Контакты / Заключение  |

## Цветовая палитра

| Назначение            | CSS-переменная           | Цвет      |
| --------------------- | ------------------------ | --------- |
| Бренд Adobe           | `--primary-red`          | `#FF0000` |
| Creative Cloud        | `--creative-blue`        | `#00A0DE` |
| Document Cloud        | `--document-yellow`      | `#FFB800` |
| Experience Cloud      | `--experience-green`     | `#00CC66` |
| Content & Commerce    | `--commerce-orange`      | `#FF6B35` |
| 3D & AI               | `--ai-purple`            | `#9D4EDD` |
| Тёмный фон            | `--dark-bg`              | `#0A0E27` |

## Что уже сделано

- Структура папок, базовые компоненты (`Header`, `Footer`, `Navigation`, `Container`, `Button`).
- Адаптивное меню с мобильным бургером.
- Универсальная обёртка страницы `PageLayout` со скроллом наверх и `document.title`.
- 9 страниц-заготовок с реальными данными из `products.js`.
- Полный набор CSS-переменных и анимаций.

## Что добавить дальше

Следующие шаги (по запросу):

1. Карточки: `ProductCard`, `CategoryCard`, `FeatureCard`, `StatCard`.
2. Секции: `Hero`, `ProductGallery`, `Stats`, `Timeline`, `CTASection`.
3. Полные версии каждой страницы со всеми секциями.
