import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { FinishWrapper, TitleGradientText, SiteTitleText, BottomButtonWrapper } from '../Style/FinishStyle';
import { GradientText } from '../Style/GlobalStyle';

const Finish = () => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
  
    const handleButtonClick = () => {
      window.location.href = `${process.env.PUBLIC_URL}/?lang=${currentLanguage}`;
    };
  
    return (
      <FinishWrapper>
        <SiteTitleText>
          <Trans i18nKey="finish.siteTitle" components={{ 1: <TitleGradientText /> }} />
        </SiteTitleText>
        <BottomButtonWrapper>
          <button type="button" onClick={handleButtonClick}>
            {t('finish.confirmButton')}
          </button>
        </BottomButtonWrapper>
      </FinishWrapper>
    );
  };
  
  export default Finish;