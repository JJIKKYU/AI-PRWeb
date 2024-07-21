import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { LanguageContext } from '../../Contexts/LanguageContext';

const carouselAnimation = keyframes`
  0%, 10% { transform: translateX(500px); }
  15%, 25% { transform: translateX(300px); }
  30%, 40% { transform: translateX(100px); }
  45%, 55% { transform: translateX(-100px); }
  60%, 70% { transform: translateX(-300px); }
  75%, 85% { transform: translateX(-500px); }
  90%, 100% { transform: translateX(-700px); }
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 200px; /* Set height as per your image height */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 10px;
  background: url(${process.env.PUBLIC_URL} + '/images/background-1.png') no-repeat center center;
  background-size: contain; /* Fit the image to cover the div */
  background-position: center center; /* Center the background image */
  object-fit: contain; /* Ensure the background image scales to fit */
  margin-bottom: 20px;
`;

const CarouselContainer = styled.div`
  display: flex;
  animation: ${carouselAnimation} 20s ease-in-out infinite;
`;

const CarouselImage = styled.img`
  width: 200px; /* Adjust based on your image size */
  height: 200px; /* Adjust based on your image size */
  object-fit: contain;
  margin: 0 0px; /* Adjust spacing between images */
`;

const LeftGradientContainer = styled.div`
  width: 100px;
  height: 100%;
  color: black;
  background: linear-gradient(90deg, rgba(31, 35, 47, 1) 0%, rgba(31, 35, 47, 0) 90%);
  position: absolute;
  left: 0;
  z-index: 1;
`;

const RightGradientContainer = styled.div`
  width: 100px;
  height: 100%;
  color: black;
  background: linear-gradient(90deg, rgba(31, 35, 47, 0) 10%, rgba(31, 35, 47, 1) 100%);
  position: absolute;
  right: 0;
  z-index: 1;
`;

const CarouselComponent = () => {
  const language = useContext(LanguageContext);

  const images = language === 'en' 
    ? [
        `${process.env.PUBLIC_URL}/images/en_card_1.png`,
        `${process.env.PUBLIC_URL}/images/en_card_2.png`,
        `${process.env.PUBLIC_URL}/images/en_card_3.png`,
        `${process.env.PUBLIC_URL}/images/en_card_4.png`,
        `${process.env.PUBLIC_URL}/images/en_card_5.png`,
        `${process.env.PUBLIC_URL}/images/en_card_6.png`,
      ]
    : [
        `${process.env.PUBLIC_URL}/images/card_1.png`,
        `${process.env.PUBLIC_URL}/images/card_2.png`,
        `${process.env.PUBLIC_URL}/images/card_3.png`,
        `${process.env.PUBLIC_URL}/images/card_4.png`,
        `${process.env.PUBLIC_URL}/images/card_5.png`,
        `${process.env.PUBLIC_URL}/images/card_6.png`,
      ];

  return (
    <CarouselWrapper>
      <LeftGradientContainer/>
      <RightGradientContainer/>
      <CarouselContainer>
        {/* 이미지 반복 */}
        {images.concat(images).map((src, index) => (
          <CarouselImage key={index} src={src} alt={`carousel image ${index + 1}`} />
        ))}
      </CarouselContainer>
    </CarouselWrapper>
  );
};

export default CarouselComponent;