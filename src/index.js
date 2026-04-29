import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';

/**
 * Точка входа приложения.
 * Подключает глобальные стили и монтирует компонент App
 * в DOM-элемент #root (см. public/index.html).
 *
 * ВАЖНО: react-scripts (CRA) ожидает точку входа именно с расширением .js,
 * поэтому файл называется index.js, а не index.jsx.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
