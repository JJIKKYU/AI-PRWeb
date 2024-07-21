import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Home from './Home/Home';
import Email from './Email/Email';
import Survey from './Survey/Survey';
import Finish from './Finish/Finish';
import { AppWrapper, GlobalStyle } from './Style/GlobalStyle';
import { db, serverTimestamp } from './Firebase/Firebase'; // firebase를 import 합니다.
import { collection, addDoc, query, getDocs } from 'firebase/firestore';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';  // i18n 설정 파일을 임포트합니다.
import { LanguageProvider } from './Contexts/LanguageContext';

function App() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [surveyData, setSurveyData] = useState({ selectedOptions: [], customOption: '' });
  const navigate = useNavigate(); // useNavigate 훅을 호출합니다.

  const handleNextStep = () => setStep(step + 1);
  const handlePreviousStep = () => setStep(step - 1);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const currentLanguage = i18n.language;

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const lang = params.get('lang');

    // 영미권 국가 언어 설정
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

  const handleSurveySubmit = async (data) => {
    setSurveyData(data);
    setStep(4);

    try {
      await addDoc(collection(db, 'surveys'), {
        email: email,
        ...data,
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
        <GlobalStyle/>
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
              onSubmit={handleSurveySubmit} // handleSurveySubmit 함수 연결
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