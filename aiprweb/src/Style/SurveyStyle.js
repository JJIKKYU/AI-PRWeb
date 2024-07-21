
import styled from 'styled-components';

export const SurveyWrapper = styled.div`
  background: none;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
  padding-bottom: 100px;
  margin-bottom: 100px;

  @media (min-width: 391px) {
    width: 390px;
    margin: 0 auto;
    padding-bottom: 100px;
  }
`;

export const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  background-color: ${(props) => (props.selected ? '#404A59' : '#2D343E')}; /* selected와 unselected 배경색 설정 */
  padding: 8.5px 16px;
  border-radius: 8px;
  color: #C1C6CD;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* 배경색 전환 효과 */

  input[type="checkbox"] {
    display: none;
  }

  input[type="text"] {
    width: 80%;
    border: none;
    border-radius: 8px;
    background-color: inherit;
    color: #C1C6CD;
    font-size: 18px;
    outline: none;
    height: 24px;
    padding-left: 0px;
  }

  .custom-checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: none;
    border-radius: 24px;
    border: 1.5px #404A59 solid;
    position: relative;
    margin-left: 16px;

    &::after {
      content: '';
      display: none;
      width: 12px;
      height: 12px;
      background: url(${process.env.PUBLIC_URL + '/icons/check.png'}) no-repeat center center;
      background-size: cover; /* 아이콘 크기에 맞게 조정 */
      position: absolute;
    }
  }

  input:checked + .custom-checkbox {
    border-color: #0F8FFF; /* 선택된 상태에서의 테두리 색상 */
    background-color: #0F8FFF; /* 선택된 상태에서의 배경색 */
    border: none;
    border: 1.5px #0F8FFF solid;
  }

  input:checked + .custom-checkbox::after {
    display: block;
  }

  /* input이 체크되었을 때 label의 배경색 변경 */
  input:checked + .custom-checkbox {
    background-color: #0F8FFF;
  }

  input:checked + .custom-checkbox + span {
    background-color: #0F8FFF;
  }
`;


export const SurveyTitle = styled.h1`
    font-size: 30px;
    color: #ffffff;
    text-align: left;
    margin-bottom: 32px;
    word-wrap: break-word;
    line-height: 150%;
    margin-top: 0px;
    word-break: keep-all;
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
    // pointer-events: none; /* 포인터 이벤트 비활성화 */

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
        pointer-events: auto;

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