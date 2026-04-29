import { memo } from 'react';
import styles from '../../styles/StatCard.module.css';

/**
 * StatCard — карточка одной статистики (число + подпись).
 *
 * Используется в секции Stats (на главной и AboutPage).
 *
 * Props:
 *  - value     (строка/число) — большое значение, например '30+', '5М+', '1982'.
 *  - label     (строка)       — подпись под значением (например 'արտադրանք').
 *  - color     (строка, опц.) — акцентный цвет (#hex). Влияет на цвет числа
 *                               и тонкую полоску слева. По умолчанию красный Adobe.
 *  - className (опц.)         — для каскадных delay-* анимаций.
 */
function StatCard({ value, label, color, className = '' }) {
  const cssVars = color ? { '--accent': color } : undefined;

  return (
    <div
      className={`${styles.card} ${className}`.trim()}
      style={cssVars}
    >
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}

export default memo(StatCard);
