import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
  /* padding: 20px; */

  @media (min-width: 391px) {
    width: 390px;
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

export const DownArrowIcon = styled.div`
  width: 32px;
  height: 32px;
  margin-top: 12px;
  background: url(${process.env.PUBLIC_URL + '/icons/down-arrow.svg'}) no-repeat center center;
  background-size: cover;
  color: white;
`;

export const SiteTitleText = styled.span`
    text-align: center;
    font-weight: bold; /* 선택사항, 텍스트를 강조하려면 bold */
    font-size: 20px; /* 선택사항, 텍스트 크기 조절 */
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

export const SiteImage = styled.div`
  margin-left: 22px;
  margin-right: 22px;
  height: 300px;
  width: calc(100% - 44px); /* 부모 요소의 너비에서 좌우 여백을 뺀 값 */
  margin-top: 0px;
  background: url(${process.env.PUBLIC_URL + '/images/site.png'}) no-repeat center center;
  background-size: contain; /* or cover, 100% 100%, etc. */
`;

export const WebGradientText = styled.span`
    background: linear-gradient(90deg, #0088FF 0%, #479DE9 37%, #7C82FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold; /* 선택사항, 텍스트를 강조하려면 bold */
    font-size: 18px; /* 선택사항, 텍스트 크기 조절 */
`;

export const InfoImage = styled.div`
  margin-left: 22px;
  margin-right: 22px;
  height: 483px;
  width: calc(100% - 44px); /* 부모 요소의 너비에서 좌우 여백을 뺀 값 */
  margin-top: 51px;
  background: url(${process.env.PUBLIC_URL + '/images/info.png'}) no-repeat center center;
  background-size: contain; /* or cover, 100% 100%, etc. */
`;

export const EndTitleText = styled.span`
    text-align: center;
    font-weight: bold; /* 선택사항, 텍스트를 강조하려면 bold */
    font-size: 20px; /* 선택사항, 텍스트 크기 조절 */
    color: white;
    margin-top: 64px;
    line-height: 150%;
`;

export const EndDownArrowIcon = styled.div`
  width: 8px;
  height: 28px;
  margin-top: 24px;
  margin-bottom: 100px;
  background: url(${process.env.PUBLIC_URL + '/icons/down-arrow2.png'}) no-repeat center center;
  background-size: cover;
  color: white;
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

        &:hover {
            background-color: #377bb5;
        }

        &:active {
            background-color: #2c6391;
        }
    }
`;