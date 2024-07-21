import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Home from './Home/Home';
import Email from './Email/Email';
import Survey from './Survey/Survey';
import Finish from './Finish/Finish';
import { AppWrapper, GlobalStyle } from './Style/GlobalStyle';
import { db, serverTimestamp, analytics } from './Firebase/Firebase';
import { collection, addDoc } from 'firebase/firestore';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import { LanguageProvider } from './Contexts/LanguageContext';
import { logEvent } from 'firebase/analytics';

function App() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [surveyData, setSurveyData] = useState({ selectedOptions: [], customOption: '' });
  const [utmData, setUtmData] = useState({});
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const currentLanguage = i18n.language;

  const handleNextStep = () => setStep(step + 1);
  const handlePreviousStep = () => setStep(step - 1);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const lang = params.get('lang');
    const englishSpeakingLanguages = ['en', 'us', 'gb', 'ca', 'au', 'nz'];

    if (lang && englishSpeakingLanguages.includes(lang.toLowerCase())) {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('kr');
    }
  }, [location.search]);

  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);

    return () => {
      window.removeEventListener('resize', setViewportHeight);
    };
  }, []);

  useEffect(() => {  
    // UTM 파라미터 처리
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get('utm_source');
    const utmMedium = params.get('utm_medium');
    const utmCampaign = params.get('utm_campaign');
    const utmCountry = params.get('utm_country');
    console.log(params.get('utm_source'));
    console.log(params.get('utm_medium'));
    console.log(params.get('utm_campaign'));
  
    const utmData = {
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      utm_country: utmCountry
    };
    setUtmData(utmData);
  
    if (utmSource || utmMedium || utmCampaign) {
      logEvent(analytics, 'dynamic_link', utmData);
    }
  }, []);

  const handleSurveySubmit = async (data) => {
    setSurveyData(data);
    setStep(4);

    try {
      await addDoc(collection(db, 'surveys'), {
        email: email,
        ...data,
        ...utmData, // UTM 정보 추가
        timestamp: serverTimestamp()
      });
      console.log('Survey successfully submitted!');
      navigate('/finish'); // navigate to finish after successful submission
    } catch (error) {
      console.error('Error writing document: ', error);
    }
  };

  return (
    <LanguageProvider>
      <AppWrapper className="app-wrapper">
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home onNextStep={() => navigate(`/email?lang=${currentLanguage}`)} />} />
          <Route
            path="/email"
            element={<Email
              onNextStep={() => navigate(`/survey?lang=${currentLanguage}`)}
              onPreviousStep={() => navigate(`/?lang=${currentLanguage}`)}
              email={email}
              setEmail={setEmail}
            />}
          />
          <Route
            path="/survey"
            element={<Survey
              onSubmit={handleSurveySubmit}
              onPreviousStep={() => navigate(`/email?lang=${currentLanguage}`)}
              surveyData={surveyData}
            />}
          />
          <Route path="/finish" element={<Finish />} />
        </Routes>
      </AppWrapper>
    </LanguageProvider>
  );
}

export default App;