import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CreativeCloudPage from './pages/CreativeCloudPage';
import DocumentCloudPage from './pages/DocumentCloudPage';
import ExperienceCloudPage from './pages/ExperienceCloudPage';
import ContentCommercePage from './pages/ContentCommercePage';
import ThreeDAIPage from './pages/ThreeDAIPage';
import PhotoshopPage from './pages/PhotoshopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import QuizPage from './pages/QuizPage';
import VideoLessonsPage from './pages/VideoLessonsPage';

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
 *   /video-lessons          — VideoLessonsPage
 *   /quiz                   — QuizPage, մակարդակների ընտրություն
 *   /quiz/:productId        — QuizPage, մեկ թեմա (photoshop, illustrator, …)
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
        <Route path="/product/photoshop" element={<PhotoshopPage />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/video-lessons" element={<VideoLessonsPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quiz/:productId" element={<QuizPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
