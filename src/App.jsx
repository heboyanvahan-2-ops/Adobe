import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CreativeCloudPage from './pages/CreativeCloudPage';
import DocumentCloudPage from './pages/DocumentCloudPage';
import ExperienceCloudPage from './pages/ExperienceCloudPage';
import ContentCommercePage from './pages/ContentCommercePage';
import ThreeDAIPage from './pages/ThreeDAIPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';

/**
 * Корневой компонент приложения.
 *
 * Определяет все маршруты сайта.
 * Роутинг — react-router-dom v6 (BrowserRouter).
 *
 * Карта маршрутов:
 *   /                       — HomePage
 *   /about                  — AboutPage
 *   /creative-cloud         — CreativeCloudPage
 *   /document-cloud         — DocumentCloudPage
 *   /experience-cloud       — ExperienceCloudPage
 *   /content-commerce       — ContentCommercePage
 *   /3d-ai                  — ThreeDAIPage
 *   /product/:productId     — ProductDetailPage
 *   /contact                — ContactPage
 *   *                       — HomePage (фолбэк для неизвестных URL)
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/creative-cloud" element={<CreativeCloudPage />} />
        <Route path="/document-cloud" element={<DocumentCloudPage />} />
        <Route path="/experience-cloud" element={<ExperienceCloudPage />} />
        <Route path="/content-commerce" element={<ContentCommercePage />} />
        <Route path="/3d-ai" element={<ThreeDAIPage />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
