import { memo } from 'react';
import styles from '../../styles/FeatureCard.module.css';

/**
 * FeatureCard — карточка одной фичи продукта.
 *
 * Используется на ProductDetailPage в секции «Возможности» (features).
 * В products.js фичи хранятся как массив строк, поэтому компонент
 * принимает либо строку, либо объект { title, description }.
 *
 * Визуально:
 *   ┌─────────────────────────────────────┐
 *   │  ╳  01                              │  ← номер в цветной плашке
 *   │                                     │
 *   │  Title                              │
 *   │  Description (optional)             │
 *   └─────────────────────────────────────┘
 *
 * При hover:
 *   • карточка приподнимается;
 *   • цветная полоска сверху расширяется;
 *   • номер слегка масштабируется.
 *
 * Props:
 *   - title       (строка, обязательная) — название фичи (или просто текст);
 *   - description (строка, опц.)         — расшифровка;
 *   - index       (число,  опц.)         — порядковый номер для бейджа («01», «02»…);
 *   - color       (строка, опц.)         — акцентный цвет (#hex). Влияет на бейдж и полоску.
 *   - className   (опц.)                 — для каскадных delay-* анимаций.
 */
function FeatureCard({
  title,
  description,
  index,
  color,
  className = '',
}) {
  const cssVars = color ? { '--accent': color } : undefined;

  // Форматируем номер: 1 → «01», 12 → «12». Полезно для аккуратной типографики.
  const formattedIndex =
    typeof index === 'number' ? String(index).padStart(2, '0') : null;

  return (
    <article
      className={`${styles.card} ${className}`.trim()}
      style={cssVars}
    >
      {/* Цветной номер-бейдж */}
      {formattedIndex && (
        <div className={styles.indexBadge} aria-hidden="true">
          {formattedIndex}
        </div>
      )}

      <h3 className={styles.title}>{title}</h3>

      {description && <p className={styles.desc}>{description}</p>}
    </article>
  );
}

export default memo(FeatureCard);
