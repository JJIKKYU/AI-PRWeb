import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { MailTipUl, MailTipLi, FormWrapper, EmailTitle, EmailInput, BottomButtonWrapper } from '../Style/EmailStyle';
import { GradientText } from '../Style/GlobalStyle';


const EmailForm = ({ onNextStep, onPreviousStep, email, setEmail }) => {
  const [input, setInput] = useState(email);
  const [isDropbox, setIsDropbox] = useState(false);
  const [emailList, setEmailList] = useState([]);
  const [selected, setSelected] = useState(-1);
  const inputRef = useRef(null);

  const FrequencyEmails = [
    '@naver.com',
    '@gmail.com',
    '@daum.net',
    '@hanmail.net',
    '@yahoo.com',
    '@outlook.com',
    '@nate.com',
    '@kakao.com',
];

 // '핵심 정보'만 그라데이션 텍스트로 표시합니다.
 const emailTitle = (
  <>
    <GradientText>핵심 정보</GradientText> 배달이 준비되면 이메일로 알려드릴게요!
  </>
  );


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setIsDropbox(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [inputRef]);

  const onChangeEmail = (e) => {
    const value = e.target.value;
    setInput(value);
    setEmail(value);

    if (value.includes('@')) {
      const inputDomain = value.split('@')[1].toLowerCase();
      if (inputDomain.length !== 0) {
        setIsDropbox(true);
        setEmailList(
          FrequencyEmails.filter((el) =>
            el.toLowerCase().startsWith(`@${inputDomain}`)
          )
        );
      } else {
        setIsDropbox(false);
        setSelected(-1);
      }
    } else {
      setIsDropbox(false);
      setSelected(-1);
    }
  };

  const handleDropDownClick = (selectedEmail) => {
    const firstPart = input.split('@')[0];
    setInput(`${firstPart}${selectedEmail}`);
    setEmail(`${firstPart}${selectedEmail}`);
    setIsDropbox(false);
    setSelected(-1);
  };

  const handleKeyUp = (e) => {
    if (isDropbox) {
      if (e.key === 'ArrowDown' && emailList.length - 1 > selected) {
        setSelected(selected + 1);
      }
      if (e.key === 'ArrowUp' && selected > 0) {
        setSelected(selected - 1);
      }
      if (e.key === 'Enter' && selected >= 0) {
        handleDropDownClick(emailList[selected]);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNextStep();
  };

  return (
    <FormWrapper ref={inputRef}>
      <EmailTitle>{emailTitle}</EmailTitle>
      <form onSubmit={handleSubmit}>
        <label>
          <EmailInput
              type="email"
              value={input}
              placeholder='이메일 주소'
              onChange={onChangeEmail}
              onKeyUp={handleKeyUp}
              required
              ref={inputRef} // ref를 input에 추가합니다.
          />
          {isDropbox && (
            <MailTipUl>
              {emailList.map((item, index) => (
                <MailTipLi
                  key={item}
                  selected={index === selected}
                  onClick={() => handleDropDownClick(item)}
                >
                  {`${input.split('@')[0]}${item}`}
                </MailTipLi>
              ))}
            </MailTipUl>
          )}
        </label>
        {/* <button type="button" onClick={onPreviousStep}>뒤로가기</button> */}
        <BottomButtonWrapper>
            <h3>입력하신 메일 주소는 안내 발송 목적으로만 사용됩니다.</h3>
            <button type="submit">핵심 정보 배달받기</button>
        </BottomButtonWrapper>
      </form>
    </FormWrapper>
  );
};

export default EmailForm;