import React, { useState } from 'react';
import styled from 'styled-components';
import Home from './Home/Home';
import Email from './Email/Email';
import Survey from './Survey/Survey';
import Finish from './Finish/Finish';
import { AppWrapper, GlobalStyle } from './Style/GlobalStyle';
import { db, serverTimestamp } from './Firebase/Firebase'; // firebase를 import 합니다.
import { collection, addDoc } from 'firebase/firestore';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  const [email, setEmail] = useState('');
  const [surveyData, setSurveyData] = useState({ selectedOptions: [], customOption: '' });

  const handleSurveySubmit = async (data) => {
    setSurveyData(data);
    try {
      await addDoc(collection(db, 'surveys'), {
        email: email,
        ...data,
        timestamp: serverTimestamp()
      });
      console.log('Survey successfully submitted!');
      // 페이지 이동
      window.location.href = '/finish'; 
    } catch (error) {
      console.error('Error writing document: ', error);
    }
  };

  return (
    <Router>
      <AppWrapper>
        <GlobalStyle/>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={() => <Home onNextStep={() => window.location.href = `${process.env.PUBLIC_URL}/email`} />} />
          <Route 
            path='/email'
            component={() => <Email 
              onNextStep={() => window.location.href = '/survey'} 
              onPreviousStep={() => window.location.href = '/'} 
              email={email} 
              setEmail={setEmail} 
            />} 
          />
          <Route 
            exact path={`${process.env.PUBLIC_URL}/survey`} 
            component={() => <Survey 
              onSubmit={handleSurveySubmit} 
              onPreviousStep={() => window.location.href = '/email'} 
              surveyData={surveyData} 
            />} 
          />
          <Route exact path="/finish" component={Finish} />
        </Switch>
      </AppWrapper>
    </Router>
  );
}

export default App;