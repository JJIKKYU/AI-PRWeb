import React from 'react';
import { HomeWrapper, TitleGradientText, TitleText, DownArrowIcon, SiteTitleText, SiteTitleGradientText, SiteImage, WebGradientText, InfoImage, EndTitleText, EndDownArrowIcon, BottomButtonWrapper } from '../Style/HomeStyle';
import MarqueeComponent from './components/MarqueeText';
import CarouselComponent from './components/CarouselImage';

 // '핵심 정보'만 그라데이션 텍스트로 표시합니다.
 const siteTitle = (
  <>
  원하는 <SiteTitleGradientText>사이트 주소 하나</SiteTitleGradientText>면<br/> 핵심만 정리해서 배달해드려요!
  </>
  );

   // '배달받는 요약정보'만 그라데이션 텍스트로 표시합니다.
 const endTittle = (
  <>
  직접 접속할 필요 없이<br/> <SiteTitleGradientText>배달받는 요약정보</SiteTitleGradientText>면<br/> 지금 신청하세요!
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
    <SiteImage></SiteImage>
    <WebGradientText>웹에서 헤매지 마세요</WebGradientText>
    <TitleText>지쳐가는 당신이<br/>뒤처지지 않도록</TitleText>
    <InfoImage></InfoImage>
    <EndTitleText>{endTittle}</EndTitleText>
    <EndDownArrowIcon></EndDownArrowIcon>
    <BottomButtonWrapper>
          <button type="submit" onClick={onNextStep}>사전 신청하기</button>
    </BottomButtonWrapper>
  </HomeWrapper>
);

export default Home;