import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 20px; */
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