import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const surveyOptions = [
  '옵션 1',
  '옵션 2',
  '옵션 3',
  '옵션 4',
  '옵션 5',
  '옵션 6',
  '옵션 7',
];

const SurveyWrapper = styled.div`
  padding: 20px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const OptionLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

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
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>원하는 항목을 선택하세요 (중복 선택 가능)</legend>
          {surveyOptions.map((option) => (
            <OptionLabel key={option}>
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleChange(option)}
              />
              {option}
            </OptionLabel>
          ))}
          <OptionLabel>
            직접 입력:
            <input type="text" value={customOption} onChange={handleCustomChange} />
          </OptionLabel>
        </fieldset>
        <button type="button" onClick={onPreviousStep}>뒤로가기</button>
        <button type="submit">설문조사 완료</button>
      </form>
    </SurveyWrapper>
  );
};

export default Survey;