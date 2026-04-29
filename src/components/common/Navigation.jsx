import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from '../../styles/Navigation.module.css';

/**
 * Список ссылок меню. Изменяя этот массив, легко добавить/убрать пункт навигации.
 */
const navLinks = [
  { to: '/', label: 'Գլխավոր', end: true },
  { to: '/about', label: 'Adobe-ի մասին' },
  { to: '/creative-cloud', label: 'Creative Cloud' },
  { to: '/document-cloud', label: 'Document Cloud' },
  { to: '/experience-cloud', label: 'Experience Cloud' },
  { to: '/content-commerce', label: 'Content & Commerce' },
  { to: '/3d-ai', label: '3D & AI' },
  { to: '/contact', label: 'Կապ' },
];

/**
 * Navigation — адаптивное меню.
 * На десктопе — горизонтальный список.
 * На мобильных — кнопка-бургер открывает выезжающую панель.
 */
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // При переходе на другую страницу автоматически закрываем мобильное меню.
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Блокируем прокрутку body, когда мобильное меню открыто.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className={styles.nav} aria-label="Հիմնական նավիգացիա">
      <button
        type="button"
        className={`${styles.burger} ${isOpen ? styles.burgerOpen : ''}`}
        aria-label={isOpen ? 'Փակել մենյուն' : 'Բացել մենյուն'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`${styles.list} ${isOpen ? styles.listOpen : ''}`}>
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.linkActive : ''}`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
