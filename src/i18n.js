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
      // SADECE kullanıcının açık tercihi (dil değiştiriciyle seçip sakladığı)
      // dikkate alınır; tercih yoksa fallbackLng olan Türkçe açılır.
      //
      // 'navigator' bilerek listede DEĞİL: Googlebot sayfayı ABD'den, en-US
      // dilinde render eder. Tarayıcı dili dinlenirse arama motoru bu Türk
      // şirketinin sitesini İNGİLİZCE görür ve Türkçe içerik hiç dizine
      // girmez. Hedef kitle Türkiye'deki OSGB'ler olduğu için varsayılan
      // Türkçe olmalı; İngilizce isteyen ziyaretçi üstteki dil düğmesiyle
      // geçer ve tercihi localStorage'da kalır.
      order: ['localStorage', 'cookie'],
      caches: ['localStorage', 'cookie']
    }
  });

export default i18n;
