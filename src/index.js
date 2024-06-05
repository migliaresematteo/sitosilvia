import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import global_it from "./translations/global_it.json"
import global_en from "./translations/global_en.json"
import global_fr from "./translations/global_fr.json"
import global_es from "./translations/global_es.json"
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: true },
  lng: "it",
  resources: {
    it: { translation: global_it },
    en: { translation: global_en },
    fr: { translation: global_fr },
    es: { translation: global_es }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18next}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>
);

reportWebVitals();
