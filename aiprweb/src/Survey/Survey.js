import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SurveyWrapper, OptionLabel, SurveyTitle, BottomButtonWrapper } from '../Style/SurveyStyle';
import { GradientText } from '../Style/GlobalStyle';

const surveyOptions = [
  '뉴스 ・ 시사',
  'IT ･ 테크',
  '부동산 ･ 경제',
  '건강 ･ 생활',
  '엔터테인먼트',
  '쇼핑 ･ 브랜드',
  '스포츠 ･ 게임',
  '문화 ･ 예술',
  '커뮤니티'
];

 // '핵심 정보'만 그라데이션 텍스트로 표시합니다.
 const surveyTitle = (
  <>
  <GradientText>특별히 보고싶은 정보</GradientText>가 있다면 말씀해주세요
  </>
  );

const Survey = ({ onSubmit, onPreviousStep, surveyData }) => {
  const [selectedOptions, setSelectedOptions] = useState(surveyData.selectedOptions);
  const [customOption, setCustomOption] = useState(surveyData.customOption);

  useEffect(() => {
    setSelectedOptions(surveyData.selectedOptions);
    setCustomOption(surveyData.customOption);
  }, [surveyData]);

  const handleChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  const handleCustomChange = (e) => setCustomOption(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ selectedOptions, customOption });
  };

  return (
    <SurveyWrapper>
      <SurveyTitle>{surveyTitle}</SurveyTitle>
      <form onSubmit={handleSubmit}>
        {surveyOptions.map((option) => (
          <OptionLabel key={option}>
            {option}
            <input
              type="checkbox"
              checked={selectedOptions.includes(option)}
              onChange={() => handleChange(option)}
            />
            <span className="custom-checkbox"></span>
          </OptionLabel>
        ))}
        <OptionLabel>
          직접 입력:
          <input type="text" value={customOption} onChange={handleCustomChange} />
        </OptionLabel>
        {/* <button type="button" onClick={onPreviousStep}>뒤로가기</button> */}
        {/* <button type="submit">설문조사 완료</button> */}
        <BottomButtonWrapper>
            <button type="submit">선택 완료</button>
        </BottomButtonWrapper>
      </form>
    </SurveyWrapper>
  );
};

export default Survey;