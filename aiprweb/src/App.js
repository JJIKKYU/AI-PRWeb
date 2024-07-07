import React, { useState } from 'react';
import styled from 'styled-components';
import Home from './Home/Home';
import Email from './Email/Email';
import Survey from './Survey/Survey';
import GlobalStyle from './Style/GlobalStyle';
import { db, serverTimestamp } from './Firebase/Firebase'; // firebase를 import 합니다.
import { collection, addDoc, query, getDocs } from 'firebase/firestore';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9f9f9;
`;

function App() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [surveyData, setSurveyData] = useState({ selectedOptions: [], customOption: '' });

  const handleNextStep = () => setStep(step + 1);
  const handlePreviousStep = () => setStep(step - 1);

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
    } catch (error) {
      console.error('Error writing document: ', error);
    }
  };

  return (
    <AppWrapper>
      <GlobalStyle />
      {step === 1 && <Home onNextStep={handleNextStep} />}
      {step === 2 && (
        <Email
          onNextStep={handleNextStep}
          onPreviousStep={handlePreviousStep}
          email={email}
          setEmail={setEmail}
        />
      )}
      {step === 3 && (
        <Survey
          onSubmit={handleSurveySubmit}
          onPreviousStep={handlePreviousStep}
          surveyData={surveyData}
        />
      )}
      {step === 4 && <div>설문조사 완료</div>}
    </AppWrapper>
  );
}

export default App;