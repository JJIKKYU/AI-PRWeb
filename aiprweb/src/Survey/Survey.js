import React, { useState, useEffect, useRef } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { SurveyWrapper, OptionLabel, SurveyTitle, BottomButtonWrapper } from '../Style/SurveyStyle';
import { GradientText } from '../Style/GlobalStyle';
import { useTranslation, Trans } from 'react-i18next';

const surveyOptions = [
  'news',
  'it',
  'realEstate',
  'health',
  'entertainment',
  'shopping',
  'sports',
  'culture',
  'community'
];

const Survey = ({ onSubmit, onPreviousStep, surveyData }) => {
  const { t } = useTranslation();
  const [selectedOptions, setSelectedOptions] = useState(surveyData.selectedOptions);
  const [customOption, setCustomOption] = useState(surveyData.customOption);
  const [isCustomSelected, setIsCustomSelected] = useState(!!surveyData.customOption);
  const customInputRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    setSelectedOptions(surveyData.selectedOptions);
    setCustomOption(surveyData.customOption);
    setIsCustomSelected(!!surveyData.customOption);
  }, [surveyData]);

  useEffect(() => {
    if (customInputRef.current) {
      customInputRef.current.addEventListener('focus', () => {
        disableBodyScroll(formRef.current);
      });
      customInputRef.current.addEventListener('blur', () => {
        enableBodyScroll(formRef.current);
      });
    }

    return () => {
      if (customInputRef.current) {
        customInputRef.current.removeEventListener('focus', () => {
          disableBodyScroll(formRef.current);
        });
        customInputRef.current.removeEventListener('blur', () => {
          enableBodyScroll(formRef.current);
        });
      }
    };
  }, []);

  const handleChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  const handleCustomChange = (e) => {
    const value = e.target.value;
    setCustomOption(value);
    setIsCustomSelected(value.length > 0);
  };

  const handleCustomClick = () => setIsCustomSelected(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ selectedOptions, customOption });
  };

  return (
    <SurveyWrapper ref={formRef}>
      <SurveyTitle>
        <Trans i18nKey="survey.title" components={{ 1: <GradientText /> }} />
      </SurveyTitle>
      <form onSubmit={handleSubmit}>
        {surveyOptions.map((option) => (
          <OptionLabel key={option} selected={selectedOptions.includes(option)}>
            {t(`survey.options.${option}`)}
            <input
              type="checkbox"
              checked={selectedOptions.includes(option)}
              onChange={() => handleChange(option)}
            />
            <span className="custom-checkbox"></span>
          </OptionLabel>
        ))}
        <OptionLabel selected={isCustomSelected} onClick={handleCustomClick}>
          <input
            type="text"
            value={customOption}
            onChange={handleCustomChange}
            placeholder={t('survey.customPlaceholder')}
            onClick={(e) => e.stopPropagation()} // 부모의 onClick 이벤트를 막기 위해
            ref={customInputRef}
          />
          <input
            type="checkbox"
            checked={isCustomSelected}
            readOnly
            style={{ display: 'none' }}
          />
          <span className="custom-checkbox"></span>
        </OptionLabel>
        <BottomButtonWrapper>
          <button type="submit">{t('survey.submitButton')}</button>
        </BottomButtonWrapper>
      </form>
    </SurveyWrapper>
  );
};

export default Survey;