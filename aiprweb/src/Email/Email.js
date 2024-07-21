import React, { useState, useRef, useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { MailTipUl, MailTipLi, FormWrapper, EmailTitle, EmailInput, BottomButtonWrapper } from '../Style/EmailStyle';
import { GradientText } from '../Style/GlobalStyle';
import { useTranslation, Trans } from 'react-i18next';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';

const EmailForm = ({ onNextStep, onPreviousStep, email, setEmail }) => {
  const { t } = useTranslation();
  const [input, setInput] = useState(email);
  const [isDropbox, setIsDropbox] = useState(false);
  const [emailList, setEmailList] = useState([]);
  const [selected, setSelected] = useState(-1);

  const inputRef = useRef(null);
  const formRef = useRef(null);

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

  const emailTitle = (
    <Trans i18nKey="emailForm.emailTitle" components={{ 1: <GradientText /> }} />
  );

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

  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
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

  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      const handleFocus = () => disableBodyScroll(formRef.current);
      const handleBlur = () => enableBodyScroll(formRef.current);

      input.addEventListener('focus', handleFocus);
      input.addEventListener('blur', handleBlur);

      return () => {
        input.removeEventListener('focus', handleFocus);
        input.removeEventListener('blur', handleBlur);
      };
    }
  }, []);

  return (
    <FormWrapper ref={formRef}>
      <ScrollToTop />
      <EmailTitle>{emailTitle}</EmailTitle>
      <form onSubmit={handleSubmit}>
        <label>
          <EmailInput
            type="email"
            value={input}
            placeholder={t('emailForm.placeholder')}
            onChange={onChangeEmail}
            onKeyUp={handleKeyUp}
            required
            ref={inputRef}
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
        <BottomButtonWrapper>
          <h3>{t('emailForm.infoText')}</h3>
          <button type="submit">{t('emailForm.submitButton')}</button>
        </BottomButtonWrapper>
      </form>
    </FormWrapper>
  );
};

export default EmailForm;