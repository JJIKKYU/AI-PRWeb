// styles.js
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    touch-action: manipulation; /* 터치 제스처를 조작하는데 사용 */
    -ms-touch-action: manipulation; /* Internet Explorer에서 사용 */
  }

  body {
    overflow: hidden; /* 스크롤바를 숨기기 */
  }
`;

// AppWrapper 스타일
export const AppWrapper = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  height: calc(100vh - 30px);
  background-color: #1F232F;
  /* padding-left: 30px; */
  padding-top: 30px;
  /* padding-right: 30px; */
  overflow: auto;
`;

export const GradientText = styled.span`
    background: linear-gradient(90deg, #0088FF 0%, #479DE9 37%, #7C82FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold; /* 선택사항, 텍스트를 강조하려면 bold */
    font-size: 30px; /* 선택사항, 텍스트 크기 조절 */
`;