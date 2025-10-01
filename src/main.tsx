import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TranslationProvider } from './components/TranslationProvider';

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
