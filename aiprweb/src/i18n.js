import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './Locales/en/translation.json';
import translationKO from './Locales/kr/translation.json';

// 번역 파일 설정
const resources = {
  en: {
    translation: translationEN,
  },
  ko: {
    translation: translationKO,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ko', // 기본 언어 설정
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;