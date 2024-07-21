import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  /* overflow: auto; */
  /* margin-top: 44px; */
  padding-top: 44px;
  /* padding-bottom: 200px; */
  /* margin-bottom: 100px; */
  padding-bottom: 100px;
  /* margin: 0 auto; */
  /* width: 100%; */

  @media (min-width: 1024px) {
    width: 390px;
    margin: 0 auto;
    padding-bottom: 100px;
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
    font-size: 32px; /* 선택사항, 텍스트 크기 조절 */
    margin-left: 10px;
    margin-right: 10px;
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
  background: url(${props => props.bgImage}) no-repeat center center;
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
  background: url(${process.env.PUBLIC_URL + '/icons/down-arrow2.png'}) no-repeat center center;
  background-size: cover;
  color: white;
`;

export const BottomButtonWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 20px;
    right: 20px;
    background: linear-gradient(0deg, rgba(31, 35, 47, 1) 0%, rgba(31, 35, 47, 0) 100%);
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 9;
    margin-bottom: 20px;
    pointer-events: none; /* 포인터 이벤트 비활성화 */

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
        pointer-events: auto; /* 포인터 이벤트 활성화 */

        &:hover {
            background-color: #377bb5;
        }

        &:active {
            background-color: #2c6391;
        }
    }

    @media (min-width: 1024px) {
      width: 390px;
      margin: 0 auto;
      margin-bottom: 20px;
    }
`;