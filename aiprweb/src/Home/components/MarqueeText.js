import React from 'react';
import styled, { keyframes } from 'styled-components';

const marqueeAnimation = keyframes`
  0% {
    transform: translateX(75%);
  }
  100% {
    transform: translateX(-80%);
  }
`;

const MarqueeWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 50px; /* 높이 설정 */
  margin: 0 auto;  /* Center the marquee on the page */
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before, &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 40%;
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
  animation: ${marqueeAnimation} 20s linear infinite;
`;

const MarqueeText = styled.span`
  display: inline-block;
  color: white;
  font-size: 15.5px;
`;

const MarqueeComponent = () => (
  <MarqueeWrapper>
    <Marquee>
      <MarqueeText>https://news.google.com/home / https://news.google.com/home / https://news.google.com/home / https://news.google.com/home</MarqueeText>
    </Marquee>
  </MarqueeWrapper>
);

export default MarqueeComponent;