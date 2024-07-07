import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Home = ({ onNextStep }) => (
  <HomeWrapper>
    <h1>사전 신청하기</h1>
    <button onClick={onNextStep}>사전 신청하기</button>
  </HomeWrapper>
);

export default Home;