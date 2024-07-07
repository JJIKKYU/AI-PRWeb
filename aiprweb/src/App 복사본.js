import logo from './logo.svg';
import './App.css';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import React, { useEffect, useState, useRef } from "react";
import styled from 'styled-components';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIDlYyy0i67UMxOM6W1A_5K18IoVIAt14",
  authDomain: "ai-prweb.firebaseapp.com",
  projectId: "ai-prweb",
  storageBucket: "ai-prweb.appspot.com",
  messagingSenderId: "143086048191",
  appId: "1:143086048191:web:e8dac4df3466890eec470a",
  measurementId: "G-GXW21K7R6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  const [email, setEmail] = useState('');
  const [emailList, setEmailList] = useState(FrequencyEmails);
  const [selected, setSelected] = useState(-1);
  const [isDrobBox, setIsDropbox] = useState(false);
  const inputRef = useRef();

  const [text, setText] = useState('');

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
    setEmail(e.target.value);

    if (e.target.value.includes('@')) {
      const inputDomain = e.target.value.split('@')[1].toLowerCase();
      if (inputDomain.length != 0) {
        setIsDropbox(true);
      } else {
        setIsDropbox(false);
        setSelected(-1);
      }
      setEmailList(
        FrequencyEmails.filter((el) =>
          el.toLowerCase().startsWith(`@${inputDomain}`)
        )
      );
    } else {
      setIsDropbox(false);
      setSelected(-1);
    }
  };

  const handleDropDownClick = (first, second) => {
    setEmail(`${first.split('@')[0]}${second}`);
    setIsDropbox(false);
    setSelected(-1);
  };

  const handleKeyUp = (e) => {
    if (isDrobBox) {
      if (e.key === 'ArrowDown' && emailList.length - 1 > selected) {
        setSelected(selected + 1);
      }
      if (e.key === 'ArrowUp' && selected >= 0) {
        setSelected(selected - 1);
      }
      if (e.key === 'Enter' && selected >= 0) {
        handleDropDownClick(email, emailList[selected]);
      }
    }
  };

  return (
    <div className="App">
      <div ref={inputRef}>
        <input
          type="email"
          placeholder="이메일(아이디) 입력"
          value={email}
          onChange={onChangeEmail}
          onKeyUp={handleKeyUp}
        />
        {isDrobBox && (
          <MailTipUl>
            {emailList.map((item, idx) => (
              <MailTipLi
                key={idx}
                onMouseOver={() => setSelected(idx)}
                onClick={() => handleDropDownClick(email, item)}
                selected={selected === idx}
              >
                {email.split('@')[0]}
                {item}
              </MailTipLi>
            ))}
          </MailTipUl>
        )}
      </div>
    </div>
  );
}

export default App;