import { Link } from 'react-router-dom';
import styles from '../../styles/CategoryCard.module.css';

/**
 * CategoryCard — большая карточка категории Adobe.
 *
 * Отличается от ProductCard тем, что:
 *   • занимает заметно больше места (~250×280px+);
 *   • делает упор на цветной hero-блок с эмодзи-иконкой;
 *   • при hover мягко увеличивается (scale 1.05) с глубокой тенью;
 *   • сама карточка целиком является ссылкой (а не только кнопка).
 *
 * Props:
 *  - category: объект категории со следующими полями:
 *      • id          (строка) — id для ссылки /:id
 *      • name        (строка) — название категории
 *      • description (строка) — короткое описание (1–2 предложения)
 *      • color       (строка) — фирменный цвет (#hex)
 *      • icon        (строка) — эмодзи (🎨, 📄, 📊, 🛒, ✨ и т. п.)
 *      • tagline     (строка, опц.) — слоган над названием
 *  - className (опц.) — внешний класс для каскадных анимаций.
 *
 * Если category не передан — компонент ничего не рендерит.
 *
 * Hover-эффект:
 *  - вся карточка увеличивается (scale 1.05);
 *  - тень становится глубже и приобретает оттенок цвета категории;
 *  - в верхнем блоке появляется орнаментальный градиентный блик;
 *  - стрелка → сдвигается вправо.
 */
function CategoryCard({ category, className = '' }) {
  if (!category) return null;

  const { id, name, description, color, icon, tagline } = category;

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
      {/* ---------- Цветной hero-блок с эмодзи ---------- */}
      <div
        className={styles.hero}
        style={{ backgroundColor: color }}
        aria-hidden="true"
      >
        <span className={styles.icon} role="img">
          {icon}
        </span>
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

export default CategoryCard;
