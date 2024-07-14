import React from 'react';
import styled, { keyframes } from 'styled-components';

const marqueeAnimation = keyframes`
  0%, 10% { transform: translateX(625px); }
  15%, 25% { transform: translateX(375px); }
  30%, 40% { transform: translateX(125px); }
  45%, 55% { transform: translateX(-125px); }
  60%, 70% { transform: translateX(-375px); }
  75%, 85% { transform: translateX(-625px); }
  90%, 100% { transform: translateX(-875px); }
`;

const MarqueeWrapper = styled.div`
  /* overflow: hidden;
  position: relative;
  width: 100%;
  height: 50px;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center; */

  overflow: hidden;
  position: relative;
  width: 100%;
  height: 50px; /* Set height as per your image height */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 10px;
  background-size: contain; /* Fit the image to cover the div */
  background-position: center center; /* Center the background image */
  object-fit: contain; /* Ensure the background image scales to fit */

  &:before, &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    /* width: 100%; */
    width: 100px;
    z-index: 1;
  }

  &:before {
    left: 0;
    background: linear-gradient(to right, #1F232F, transparent);
  }

  &:after {
    right: 0;
    background: linear-gradient(to left, #1F232F, transparent);
  }
`;

const Marquee = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: ${marqueeAnimation} 20s ease-in-out infinite;
`;

const MarqueeText = styled.span`
  display: inline-block;
  color: white;
  font-size: 15.5px;
  width: 250px;
  text-align: center;
`;

const images = [
  'https://news.google.com/home',
  'https://news.google.com/home',
  'https://news.google.com/home',
  'https://news.google.com/home',
  'https://news.google.com/home',
  'https://news.google.com/home',
];

const MarqueeComponent = () => (
  <MarqueeWrapper>
    <Marquee>
        {/* 이미지 반복 */}
        {images.concat(images).map((src, index) => (
          <MarqueeText>{src}</MarqueeText>
        // <MarqueeText key={index} src={src} alt={`carousel image ${index + 1}`} />
      ))}
      {/* <MarqueeText>https://news.google.com/home / https://news.google.com/home / https://news.google.com/home / https://news.google.com/home</MarqueeText> */}
    </Marquee>
  </MarqueeWrapper>
);

export default MarqueeComponent;