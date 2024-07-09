import React from 'react';
import styled from 'styled-components';
import { HomeWrapper, TitleGradientText, TitleText, DownArrowIcon, SiteTitleText, SiteTitleGradientText } from '../Style/HomeStyle';
import { GradientText } from '../Style/GlobalStyle';
import MarqueeComponent from './components/MarqueeText';
import CarouselComponent from './components/CarouselImage';

 // '핵심 정보'만 그라데이션 텍스트로 표시합니다.
 const siteTitle = (
  <>
  원하는 <SiteTitleGradientText>사이트 주소 하나</SiteTitleGradientText>면<br/> 핵심만 정리해서 배달해드려요!
  </>
  );

const Home = ({ onNextStep }) => (
  <HomeWrapper>
    <TitleGradientText>링크 한 줄이면 핵심 요약</TitleGradientText>
    <TitleText>언제든 원할 때 받는<br/> 정보 배달 서비스</TitleText>
    <MarqueeComponent />
    <DownArrowIcon></DownArrowIcon>
    <CarouselComponent></CarouselComponent>
    <SiteTitleText>{siteTitle}</SiteTitleText>
    <h1>사전 신청하기</h1>
    <button onClick={onNextStep}>사전 신청하기</button>
  </HomeWrapper>
);

export default Home;