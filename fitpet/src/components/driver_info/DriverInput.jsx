import React from 'react';
import styled, { css } from 'styled-components';
import { MiddleSizeButton } from '../../common';

const DriverInput = ({ ...props }) => {
  const { children, hint, value, text, btn, point } = props;
  return (
    <StyledDiv m4>
      <StyledP>{children}</StyledP>
      <StyledInput readOnly type='text' placeholder={hint} value={value} />
      {point && <StyledPoint>사용가능한 포인트 : 0</StyledPoint>}
      {btn && (
        <MiddleSizeButton
          text={text}
          width='11.6rem'
          color='#ffffff'
          backColor='#cbcbcb'
          border='none'
          pt='1.5rem'
          pb='1.4rem'
          borderRadius='7px'
          fontSize='1.6rem'
          position='absolute'
          top='0'
          right='0'
        />
      )}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  position: relative;

  ${(props) =>
    props.m4 &&
    css`
      margin-top: 4rem;
    `}
`;

const StyledP = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: -0.28px;
  color: #707070;
`;

const StyledPoint = styled.p`
  font-size: 1.4rem;
  line-height: 1.19;
  letter-spacing: -0.32px;
  margin-top: 1rem;
  color: #cbcbcb;
`;

const StyledInput = styled.input`
  font-size: 1.6rem;
  border: none;
  border-bottom: solid 0.05rem #979797;
  padding-bottom: 1.4rem;
  margin-top: 1rem;
  outline: none;
  width: 100%;

  &::placeholder {
    font-size: 1.6rem;
    color: #cbcbcb;
    line-height: 1.19;
  }
`;

export default DriverInput;
