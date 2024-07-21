import React, { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import i18n from '../i18n';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ko');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const lang = params.get('lang');

    const englishSpeakingLanguages = ['en', 'us', 'gb', 'ca', 'au', 'nz'];

    if (lang && englishSpeakingLanguages.includes(lang.toLowerCase())) {
      setLanguage('en');
      i18n.changeLanguage('en');
    } else {
      setLanguage('ko');
      i18n.changeLanguage('ko');
    }
  }, [location.search]);

  return (
    <LanguageContext.Provider value={language}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };