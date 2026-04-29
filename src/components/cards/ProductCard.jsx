import { Link } from 'react-router-dom';
import styles from '../../styles/ProductCard.module.css';

/**
 * ProductCard — карточка продукта Adobe.
 *
 * Используется на страницах категорий, в галерее похожих продуктов
 * на ProductDetailPage и в любых других местах, где нужно показать
 * сжатую информацию о продукте со ссылкой «узнать больше».
 *
 * Props:
 *  - product: объект продукта со следующими полями:
 *      • id        (строка) — id для ссылки /product/:id
 *      • name      (строка) — название продукта
 *      • shortCode (строка) — двухбуквенное обозначение, например "Ps"
 *      • shortDesc (строка) — короткое описание (1–2 предложения)
 *      • color     (строка) — фирменный цвет (#hex), используется
 *                              как фон иконки и акцент.
 *  - className (опц.) — дополнительный класс снаружи (например, для
 *                       анимаций каскадного появления через delay-*).
 *
 * Если product не передан — компонент ничего не рендерит.
 *
 * Hover-эффект:
 *  - карточка поднимается на 4px;
 *  - усиливается тень;
 *  - стрелка в кнопке сдвигается вправо;
 *  - акцентная полоса сверху проявляется.
 */
function ProductCard({ product, className = '' }) {
  if (!product) return null;

  const { id, name, shortCode, shortDesc, color } = product;

  // Fallback: если shortCode по какой-то причине не задан в данных,
  // берём первые 2 значащих символа имени.
  const code =
    shortCode ||
    name
      .replace(/[^A-Za-zА-Яа-я0-9]/g, '')
      .slice(0, 2)
      .padEnd(2, '·');

  // CSS-переменная --accent позволяет красиво использовать цвет
  // продукта в нескольких местах внутри одной карточки без inline-стилей.
  const cssVars = { '--accent': color };

  return (
    <article
      className={`${styles.card} ${className}`.trim()}
      style={cssVars}
    >
      <div
        className={styles.icon}
        style={{ backgroundColor: color }}
        aria-hidden="true"
      >
        {code}
      </div>

      <h3 className={styles.title}>{name}</h3>
      <p className={styles.desc}>{shortDesc}</p>

      <Link
        to={`/product/${id}`}
        className={styles.cta}
        aria-label={`${name} արտադրանքի մասին մանրամասներ`}
      >
        Իմանալ ավելին
        <span className={styles.arrow} aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

export default ProductCard;
