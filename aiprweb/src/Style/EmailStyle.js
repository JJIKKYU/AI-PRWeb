import styled from 'styled-components';

export const MailTipUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    position: absolute;
    background: none;
    width: calc(100% - 40px);
    z-index: 8;
    // top: 100%; /* 입력 필드 바로 아래에 위치 */
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
    padding-top: 30px;
    padding-right: 20px;
    padding-bottom: 0px;
    margin: 0 auto;
    position: relative;
    
    min-height: 100vh;
    @supports (-webkit-appearance:none) and (stroke-color: transparent) {
        min-height: -webkit-fill-available;
    }
    // height: calc(var(--vh, 1vh) * 100); /* 동적 뷰포트 높이 사용 */
    overflow: auto;
    background-color: #1F232F;

    /* height: 20px;
    background-color: blue; */

    @media (min-width: 1024px) {
        width: 390px;
        margin: 0 auto;
    }
`;

export const EmailTitle = styled.h1`
    font-size: 30px;
    color: #ffffff;
    text-align: left;
    margin-bottom: 32px;
    word-wrap: break-word;
    line-height: 150%;
    margin-top: 0px;
    word-break: keep-all;
`;

export const EmailInput = styled.input`
    width: 100%;
    padding: 4px;
    font-size: 20px;
    border: none;
    box-sizing: border-box;
    background: none;
    border-bottom: 1px #7B8A9E solid;
    padding-bottom: 12px;
    color: white;

    &:focus {
        border-color: #479DE9;
        outline: none;
        box-shadow: 0 0 5px rgba(71, 157, 233, 0.5);
    }

    ::placeholder {
        color: #687487;
        font-size: 20px;
    }
`;

export const BottomButtonWrapper = styled.div`
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
    flex-direction: column;
    gap: 12px;
    z-index: 9;
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
        pointer-events: auto;
        outline: none;
        box-shadow: 0 2px 20px rgba(0, 108, 255, 0.3);

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
    }
`;