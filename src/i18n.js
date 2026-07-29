import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import tr from './locales/tr.json';

const resources = {
  en: {
    translation: en
  },
  tr: {
    translation: tr
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'tr',
    supportedLngs: ['tr', 'en'],
    // 'en-GB' / 'tr-TR' gibi bölgesel kodlar 'en' / 'tr' olarak çözülsün.
    load: 'languageOnly',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      // localStorage önce: kullanıcı dili değiştirdiyse sayfa yenilenince
      // tarayıcı dili tercihi ezmesin.
      order: ['localStorage', 'cookie', 'navigator'],
      caches: ['localStorage', 'cookie']
    }
  });

export default i18n;
