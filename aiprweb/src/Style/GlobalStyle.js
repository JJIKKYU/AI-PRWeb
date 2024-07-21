// styles.js
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* :root {
    --vh: 100%; /* 기본값을 설정합니다. */
  } */

  html, body {
    /* overscroll-behavior: none; */
    height: 100%; /* 기본값을 설정합니다. */
    background: none;
  }

  html {
    background-color: #1F232F;
    height: 100%;
  }

  #root {
    background-color: #1F232F;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  .app-wrapper {
    height: calc(var(--vh, 1vh) * 100); /* 동적으로 설정된 뷰포트 높이를 사용합니다. */
  }
`;

// AppWrapper 스타일
export const AppWrapper = styled.div`
  /* display: flex; */
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  // height: 100vh; /* 혹시나 Custom Property 지원 안하는 브라우저를 위한 복귀점(Fallback) */
  /* height: calc(var(--vh, 1vh) * 100); */
  height: 100%;
  display: block;
  background-color: #1F232F;
  /* padding-left: 30px; */
  /* padding-top: 30px; */
  /* padding-right: 30px; */
  margin: 0;
  padding: 0;
  overflow: auto;

`;

export const GradientText = styled.span`
    background: linear-gradient(90deg, #0088FF 0%, #479DE9 37%, #7C82FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold; /* 선택사항, 텍스트를 강조하려면 bold */
    font-size: 30px; /* 선택사항, 텍스트 크기 조절 */
`;