import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Импорт стилей проекта
import 'bootstrap/dist/css/bootstrap.min.css'; // Импорт стилей Bootstrap
import App from './App.jsx'; // Импорт основного компонента приложения

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
