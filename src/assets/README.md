# assets/

Папка для статических ресурсов проекта.

## Структура

- `images/` — фотографии, скриншоты продуктов, hero-изображения (`.jpg`, `.png`, `.webp`).
- `icons/` — SVG-иконки и логотипы (`.svg`).

## Как использовать

Импортируй ассеты прямо из JS — webpack обработает пути автоматически:

```jsx
import photoshopLogo from '../assets/icons/photoshop.svg';
import heroImage from '../assets/images/hero.jpg';

<img src={photoshopLogo} alt="Photoshop" />
<img src={heroImage} alt="Hero" loading="lazy" />
```

## Рекомендации

- Изображения сжимать (TinyPNG, Squoosh) перед коммитом.
- Для фото — `.webp` с fallback на `.jpg`.
- Для иконок и логотипов — только `.svg` (масштабируются без потери качества).
- Помечай большие изображения атрибутом `loading="lazy"` для производительности.
