
import styled from 'styled-components';

export const SurveyWrapper = styled.div`
  background: none;
`;

export const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  background-color: #2D343E;
  padding: 8.5px 16px;
  border-radius: 8px;
  color: #C1C6CD;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* 배경색 전환 효과 */

  input {
    display: none;
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
      background-image: url('https://www.svgrepo.com/show/532154/check.svg'); /* 로컬 URL 참조 */
      background-size: cover; /* 아이콘 크기에 맞게 조정 */
      position: absolute;
    }
  }

  input:checked + .custom-checkbox {
    border-color: #0F8FFF; /* 선택된 상태에서의 테두리 색상 */
    background-color: #0F8FFF; /* 선택된 상태에서의 배경색 */
    border: none;
    border: 1.5px #2D343E solid;
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
    word-break: normal;
    word-wrap: break-word;
    line-height: 150%;
    margin-top: 0px;
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