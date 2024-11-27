import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from 'presentation/pages/App/index.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
