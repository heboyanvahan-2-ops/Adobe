import { memo } from 'react';
import { Link } from 'react-router-dom';
import {
  CreativePaletteIcon,
  DocumentStackIcon,
  DashboardChartIcon,
  StorefrontBagIcon,
  AICrystalIcon,
} from '../common/CategoryIcons';
import styles from '../../styles/CategoryCard.module.css';

/**
 * CategoryCard — большая карточка категории Adobe.
 *
 * Отличается от ProductCard тем, что:
 *   • занимает заметно больше места (~250×280px+);
 *   • делает упор на цветной hero-блок с уникальной SVG-иконкой;
 *   • при hover мягко увеличивается (scale 1.05) с глубокой тенью;
 *   • сама карточка целиком является ссылкой (а не только кнопка).
 *
 * Иконки — собственные SVG из CategoryIcons.jsx (без эмодзи), каждая
 * нарисована вручную под смысл конкретной категории:
 *   creative-cloud    → CreativePaletteIcon (палитра художника)
 *   document-cloud    → DocumentStackIcon   (стопка документов)
 *   experience-cloud  → DashboardChartIcon  (дашборд + тренд)
 *   content-commerce  → StorefrontBagIcon   (витрина магазина)
 *   3d-ai             → AICrystalIcon       (кристалл с искрой AI)
 *
 * Props:
 *  - category: объект категории со следующими полями:
 *      • id          (строка) — id для ссылки /:id и для подбора иконки
 *      • name        (строка) — название категории
 *      • description (строка) — короткое описание (1–2 предложения)
 *      • color       (строка) — фирменный цвет (#hex)
 *      • tagline     (строка, опц.) — слоган над названием
 *  - className (опц.) — внешний класс для каскадных анимаций.
 *
 * Если category не передан — компонент ничего не рендерит.
 *
 * Hover-эффект:
 *  - вся карточка увеличивается (scale 1.05);
 *  - тень становится глубже и приобретает оттенок цвета категории;
 *  - в верхнем блоке появляется орнаментальный градиентный блик;
 *  - SVG-иконка слегка вращается и масштабируется;
 *  - стрелка → сдвигается вправо.
 */

/* Сопоставление id категории → React-компонент SVG-иконки.
   Если для категории нет иконки — hero-блок просто покажет
   декоративный блик без иконки (компонент не упадёт). */
const CATEGORY_ICONS = {
  'creative-cloud':   CreativePaletteIcon,
  'document-cloud':   DocumentStackIcon,
  'experience-cloud': DashboardChartIcon,
  'content-commerce': StorefrontBagIcon,
  '3d-ai':            AICrystalIcon,
};

function CategoryCard({ category, className = '' }) {
  if (!category) return null;

  const { id, name, description, color, tagline } = category;
  const Icon = CATEGORY_ICONS[id];

  // Передаём цвет категории в CSS через переменную --accent.
  // Это позволяет красиво подкрашивать тень/обводку при hover
  // без необходимости плодить inline-style по всему CSS.
  const cssVars = { '--accent': color };

  return (
    <Link
      to={`/${id}`}
      className={`${styles.card} ${className}`.trim()}
      style={cssVars}
      aria-label={`Անցնել «${name}» կատեգորիա`}
    >
      {/* ---------- Цветной hero-блок с уникальной SVG-иконкой ---------- */}
      <div
        className={styles.hero}
        style={{ backgroundColor: color }}
        aria-hidden="true"
      >
        {Icon && (
          <span className={styles.icon}>
            <Icon size={72} />
          </span>
        )}
        {/* Декоративный глянцевый блик */}
        <span className={styles.shine} />
      </div>

      {/* ---------- Текстовый блок ---------- */}
      <div className={styles.body}>
        {tagline && <span className={styles.tagline}>{tagline}</span>}
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>

        <span className={styles.cta}>
          Անցնել
          <span className={styles.arrow} aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}

// memo нужен потому, что массив categories из products.js статичный —
// ссылки на category-объекты стабильны между рендерами HomePage,
// и React не должен заново перерисовывать 5 крупных карточек.
export default memo(CategoryCard);
