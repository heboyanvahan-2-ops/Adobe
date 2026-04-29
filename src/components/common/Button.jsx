import { Link } from 'react-router-dom';
import styles from '../../styles/Button.module.css';

/**
 * Button — переиспользуемая кнопка.
 *
 * Может рендериться как:
 *   <button>           — обычное действие (по умолчанию).
 *   <Link>             — внутренняя навигация (если передан проп `to`).
 *   <a>                — внешняя ссылка (если передан проп `href`).
 *
 * Props:
 *  - variant: 'primary' | 'secondary' | 'outline' | 'ghost'  (default 'primary').
 *  - size:    'sm' | 'md' | 'lg'                              (default 'md').
 *  - fullWidth: boolean — растянуть на всю ширину.
 *  - to:    string — путь для React Router Link.
 *  - href:  string — внешняя ссылка.
 *  - children, onClick, type, disabled, className, ...rest.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  to,
  href,
  className = '',
  type = 'button',
  ...rest
}) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;
