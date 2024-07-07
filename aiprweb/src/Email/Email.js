import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

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

const MailTipUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  width: calc(100% - 20px);
  z-index: 1000;
  top: 50px;
  left: 10px;
  max-height: 150px;
  overflow-y: auto;
`;

const MailTipLi = styled.li`
  padding: 8px;
  background-color: ${({ selected }) => (selected ? '#f5f5f5' : '')};
  color: ${({ selected }) => (selected ? 'var(--zu--m4-color)' : '')};
  cursor: pointer;
`;

const FormWrapper = styled.div`
  position: relative;
`;

const EmailForm = ({ onNextStep, onPreviousStep, email, setEmail }) => {
  const [input, setInput] = useState(email);
  const [isDropbox, setIsDropbox] = useState(false);
  const [emailList, setEmailList] = useState([]);
  const [selected, setSelected] = useState(-1);
  const inputRef = useRef(null);

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
      <form onSubmit={handleSubmit}>
        <label>
          이메일:
          <input
            type="email"
            value={input}
            onChange={onChangeEmail}
            onKeyUp={handleKeyUp}
            required
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
        <button type="button" onClick={onPreviousStep}>뒤로가기</button>
        <button type="submit">다음</button>
      </form>
    </FormWrapper>
  );
};

export default EmailForm;