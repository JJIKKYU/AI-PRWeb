// src/styles/StyledComponents.js
import styled from 'styled-components';

export const MailTipUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    position: absolute;
    background: none;
    /* border: 1px solid #ccc; */
    width: calc(100% - 20px);
    z-index: 1000;
    top: 100%; /* 입력 필드 바로 아래에 위치 */
    left: 10px;
    max-height: 150px;
    overflow-y: auto;
`;

export const MailTipLi = styled.li`
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 10px;
    background-color: ${({ selected }) => (selected ? '#404A59' : '#2D343E')};
    color: ${({ selected }) => (selected ? 'var(--zu--m4-color)' : '#C1C6CD')};
    cursor: pointer;
`;

export const FormWrapper = styled.div`
    padding-left: 20px;
    padding-top: 20px;
    padding-right: 20px;
    position: relative;
`;

export const EmailTitle = styled.h1`
    font-size: 30px;
    color: #ffffff;
    text-align: left;
    margin-bottom: 32px;
    word-break: normal;
    word-wrap: break-word;
    line-height: 150%;
    margin-top: 0px;
`;

export const EmailInput = styled.input`
    width: 100%;
    padding: 4px;
    font-size: 20px;
    border: none;
    box-sizing: border-box; /* 패딩과 보더를 포함하여 전체 너비를 계산합니다 */
    background: none;
    border-bottom: 1px #7B8A9E solid;
    padding-bottom: 12px;
    color: white;

    &:focus {
        border-color: #479DE9;
        outline: none;
        box-shadow: 0 0 5px rgba(71, 157, 233, 0.5); /* 포커스 시에 그림자 효과 추가 */
    }

    /* placeholder 스타일 */
    ::placeholder {
        color: #687487; /* placeholder 색상 */
        font-size: 20px; /* placeholder 폰트 크기 */
    }

    /* 모바일 화면에서의 스타일 조정 */
    /* @media (max-width: 600px) {
        font-size: 14px;
        padding: 8px;
    } */
`;

export const BottomButtonWrapper = styled.div`
    position: fixed;
    bottom: 20px;
    left: 0;
    right: 0;
    background: none;
    /* box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
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