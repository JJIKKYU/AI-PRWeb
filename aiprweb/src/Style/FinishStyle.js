import styled from 'styled-components';

export const FinishWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  height: calc(100vh - 30px - 96px);

  @media (min-width: 640px) {
    width: 390px;
    margin: 0 auto;
  }
`;

export const TitleGradientText = styled.span`
    background: linear-gradient(90deg, #0088FF 0%, #479DE9 37%, #7C82FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold; /* 선택사항, 텍스트를 강조하려면 bold */
    font-size: 24px; /* 선택사항, 텍스트 크기 조절 */
`;

export const TitleText = styled.span`
    text-align: center;
    font-weight: bold; /* 선택사항, 텍스트를 강조하려면 bold */
    font-size: 36px; /* 선택사항, 텍스트 크기 조절 */
    color: white;
    margin-top: 10px;
`;

export const SiteTitleText = styled.span`
    text-align: center;
    font-weight: bold; /* 선택사항, 텍스트를 강조하려면 bold */
    font-size: 24px; /* 선택사항, 텍스트 크기 조절 */
    color: white;
    margin-top: 10px;
    line-height: 150%;
`;

export const SiteTitleGradientText = styled.span`
    background: linear-gradient(90deg, #0088FF 0%, #479DE9 37%, #7C82FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold; /* 선택사항, 텍스트를 강조하려면 bold */
    font-size: 20px; /* 선택사항, 텍스트 크기 조절 */
    line-height: 150%;
`;

export const BottomButtonWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(0deg, rgba(31, 35, 47, 1) 0%, rgba(31, 35, 47, 0) 100%);
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    /* box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0px;
    margin-right: 0px;
    flex-direction: column;
    gap: 12px;
    z-index: 9;

    h3 {
        margin: 0;
        font-size: 12px;
        color: #D1D1D1;
        text-align: center;
    }

    button {
        width: 100%;
        font-weight: bold;
        padding: 16px 20px;
        font-size: 20px;
        border: none;
        border-radius: 16px;
        background-color: #0088FF;
        color: white;
        cursor: pointer;
        outline: none;
        box-shadow: 0 2px 20px rgba(0, 108, 255, 0.3);

        &:hover {
            background-color: #377bb5;
        }

        &:active {
            background-color: #2c6391;
        }
    }

    @media (min-width: 640px) {
      width: 390px;
      margin: 0 auto;
    }
`;