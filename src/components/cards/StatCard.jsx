import styles from '../../styles/StatCard.module.css';

/**
 * StatCard — карточка одной статистики (число + подпись).
 *
 * Используется в секции Stats (на главной и AboutPage).
 *
 * Props:
 *  - value     (строка/число) — большое значение, например '30+', '5М+', '1982'.
 *  - label     (строка)       — подпись под значением (например 'արտադրանք').
 *  - icon      (строка, опц.) — эмодзи или короткий текст-иконка над значением.
 *  - color     (строка, опц.) — акцентный цвет (#hex). Влияет на цвет числа
 *                               и тонкую полоску слева. По умолчанию красный Adobe.
 *  - className (опц.)         — для каскадных delay-* анимаций.
 */
function StatCard({ value, label, icon, color, className = '' }) {
  const cssVars = color ? { '--accent': color } : undefined;

  return (
    <div
      className={`${styles.card} ${className}`.trim()}
      style={cssVars}
    >
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}

      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}

export default StatCard;
