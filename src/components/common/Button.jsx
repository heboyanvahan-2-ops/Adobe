import { Link } from 'react-router-dom';
import styles from '../../styles/Button.module.css';

/* ------------------------------------------------------------------
   Маппинг размеров: принимаем и 'small/medium/large', и 'sm/md/lg'.
   Это удобно: можно писать оба варианта, и ничего не сломается.
   ------------------------------------------------------------------ */
const SIZE_MAP = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  sm: 'small',
  md: 'medium',
  lg: 'large',
};

/**
 * Button — переиспользуемая кнопка проекта.
 *
 * API:
 *  Контент:
 *    - text     (рекомендуется): текст кнопки;
 *    - children (альтернативно): любой JSX внутри (если text не передан).
 *
 *  Стиль:
 *    - variant:   'primary' | 'secondary' | 'outline'  (default 'primary')
 *        primary   — красный фон (#FF0000), белый текст
 *        secondary — серый фон  (#F0F0F0), тёмный текст
 *        outline   — белый фон, красный контур и красный текст
 *    - size:      'small' | 'medium' | 'large'         (default 'medium')
 *                 (sm / md / lg — также поддерживаются)
 *    - fullWidth: растянуть кнопку на всю ширину родителя.
 *    - disabled:  отключить кнопку.
 *
 *  Поведение:
 *    - onClick:   обработчик клика;
 *    - type:      'button' | 'submit' | 'reset' (default 'button');
 *    - to:        путь для React Router → рендер как <Link>;
 *    - href:      внешняя ссылка → рендер как <a target="_blank">;
 *    - className: дополнительный класс снаружи;
 *    - ...rest:   любые валидные HTML-атрибуты.
 *
 * Hover-эффект и transition прописаны в Button.module.css.
 *
 * Примеры:
 *   <Button text="Купить" variant="primary" size="large" onClick={...} />
 *   <Button text="Подробнее" variant="outline" to="/product/photoshop" />
 *   <Button text="Скачать" variant="secondary" disabled />
 *   <Button variant="primary" fullWidth>Своё содержимое</Button>
 */
function Button({
  text,
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  type = 'button',
  to,
  href,
  className = '',
  ...rest
}) {
  const sizeKey = SIZE_MAP[size] || 'medium';
  const content = text != null ? text : children;

  const classes = [
    styles.button,
    styles[variant],
    styles[sizeKey],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (to && !disabled) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...rest}>
        {content}
      </Link>
    );
  }

  if (href && !disabled) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      {...rest}
    >
      {content}
    </button>
  );
}

export default Button;
