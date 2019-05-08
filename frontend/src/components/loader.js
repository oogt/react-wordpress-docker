import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.6);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
`;

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.orange};
  color: ${props => props.theme.white};
  position: absolute;
  flex: 1;
  top: 0;
  z-index: 999;

  transition: all .25s ${props => props.theme.easing.default};

  opacity: ${props => props.show ? 1 : 0};
  pointer-events: ${props => props.show ? 'auto': 'none'};
  top: ${props => props.show ? 0 : '-40px'}
`;

const LoaderInner = styled.div`
  position: relative;
`;

const Circle = styled.div`
  animation-fill-mode: both;
  position: absolute;
  left: -20px;
  top: -20px;
  border: 2px solid ${props => props.theme.white};
  border-bottom-color: transparent;
  border-top-color: transparent;
  border-radius: 100%;
  height: 35px;
  width: 35px;
  animation: ${rotate} 1s 0s ease-in-out infinite;
`;

const SecondCircle = styled(Circle)`
  display: inline-block;
  top: -10px;
  left: -10px;
  width: 15px;
  height: 15px;
  animation-duration: 0.5s;
  border-color: ${props => props.theme.white} transparent ${props => props.theme.white} transparent;
  animation-direction: reverse;
`

const Loader = ({ show }) => (
  <LoaderContainer show={show}>
    <LoaderInner>
      <Circle />
      <SecondCircle />
    </LoaderInner>
  </LoaderContainer>
);

export default Loader;
