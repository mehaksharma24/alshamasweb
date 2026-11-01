import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { LangProvider } from './i18n';
import '@fontsource/kaushan-script/400.css';
import '@fontsource/montserrat/800.css';
import '@fontsource/montserrat/900.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </StrictMode>
);
