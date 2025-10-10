import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TranslationProvider } from './components/TranslationProvider';

// Registrar Service Worker para mejor cacheo en iOS
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('SW registered'))
      .catch(err => console.log('SW registration failed'));
  });
}

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <TranslationProvider>
        <App />
      </TranslationProvider>
    </React.StrictMode>,
  );
}
