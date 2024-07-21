import React, { useContext } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { LanguageContext } from '../Contexts/LanguageContext';
import { HomeWrapper, TitleGradientText, TitleText, DownArrowIcon, SiteTitleText, SiteTitleGradientText, SiteImage, WebGradientText, InfoImage, EndTitleText, EndDownArrowIcon, BottomButtonWrapper } from '../Style/HomeStyle';
import MarqueeComponent from './components/MarqueeText';
import CarouselComponent from './components/CarouselImage';

const Home = ({ onNextStep }) => {
  const { t, i18n } = useTranslation();
  const language = useContext(LanguageContext);
  const currentLanguage = i18n.language;

  const deliveryService = t('deliveryService').split('\n').map((line, index) => (
    <div key={index}>{line}</div>
  ));

  const siteTitleText = t('desiredSite').split('\n').map((line, index) => (
    <Trans i18nKey="desiredSite" components={{ 1: <SiteTitleGradientText /> }} />
  ));

  const endTitleText = t('noNeedToAccessDirectly').split('\n').map((line, index) => (
    <div key={index}>{line}</div>
  ));

  // 언어에 따른 배경 이미지 설정
  const infoImageUrl = language === 'en'
  ? `${process.env.PUBLIC_URL}/images/en_info.png`
  : `${process.env.PUBLIC_URL}/images/info.png`;

  return (
    <HomeWrapper>
      <TitleGradientText>{t('oneLineLink')}</TitleGradientText>
      <TitleText>{deliveryService}</TitleText>
      <MarqueeComponent />
      <DownArrowIcon />
      <CarouselComponent />
      <SiteTitleText>
        <Trans i18nKey="desiredSite" components={{ 1: <SiteTitleGradientText /> }} />
      </SiteTitleText>
      <SiteImage />
      <WebGradientText>{t('dontWander')}</WebGradientText>
      <TitleText>
        <Trans i18nKey="stayUpdated"/>
      </TitleText>
      <InfoImage bgImage={infoImageUrl}/>
      <EndTitleText>
        <Trans i18nKey="noNeedToAccessDirectly" components={{ 1: <SiteTitleGradientText /> }} />
      </EndTitleText>
      <EndDownArrowIcon />
      <BottomButtonWrapper>
        <button type="submit" onClick={onNextStep}>{t('preRegister')}</button>
      </BottomButtonWrapper>
    </HomeWrapper>
  );
};

export default Home;