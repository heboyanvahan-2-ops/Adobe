import styles from '../../styles/Container.module.css';

/**
 * Container — обёртка с max-width и горизонтальными отступами.
 *
 * Props:
 *  - children: содержимое контейнера.
 *  - size: 'default' | 'narrow' | 'wide' — ширина (по умолчанию default).
 *  - as: имя HTML-тега (section, div, main и т.п.). По умолчанию 'div'.
 *  - className: дополнительный класс снаружи.
 */
function Container({ children, size = 'default', as: Tag = 'div', className = '', ...rest }) {
  const sizeClass =
    size === 'narrow' ? styles.narrow : size === 'wide' ? styles.wide : '';

  const finalClassName = [styles.container, sizeClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={finalClassName} {...rest}>
      {children}
    </Tag>
  );
}

export default Container;
