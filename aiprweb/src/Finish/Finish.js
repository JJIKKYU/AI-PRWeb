import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FinishWrapper, TitleGradientText, SiteTitleText, BottomButtonWrapper } from '../Style/FinishStyle';
import { GradientText } from '../Style/GlobalStyle';

 // '핵심 정보'만 그라데이션 텍스트로 표시합니다.
 const siteTitle = (
    <>
    감사합니다!<br/>조금만 기다려주시면,<br/><TitleGradientText>원하는 정보의 핵심만 쏙쏙</TitleGradientText><br/>배달해드릴게요!
    </>
);

const Finish = ({ }) => {

  return (
   <>
    <FinishWrapper>
        <SiteTitleText>{siteTitle}</SiteTitleText>

        <BottomButtonWrapper>
            <button type="submit" onClick={() => window.location.href = `${process.env.PUBLIC_URL}/`}>사전 신청하기</button>
        </BottomButtonWrapper>
    </FinishWrapper>
   </>
  );
};

export default Finish;