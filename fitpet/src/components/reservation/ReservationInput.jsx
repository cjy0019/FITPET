import React from 'react';
import styled, { css } from 'styled-components';
import { RoundSquareBtn } from '../../common';

const ReservationInput = ({ children, hint, point, btn, text }) => {
  return (
    <StyledDiv m4>
      <StyledP>{children}</StyledP>
      <StyledInput type='text' placeholder={hint} />
      {point && <StyledPoint>사용가능한 포인트 : 0</StyledPoint>}
      {btn && (
        <RoundSquareBtn
          grey_color
          text={text}
          style={{ position: 'absolute', top: '0', right: '0' }}
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
  color: ${(props) => props.black1_color};
`;

const StyledPoint = styled.p`
  font-size: 1.4rem;
  line-height: 1.19;
  letter-spacing: -0.32px;
  margin-top: 1rem;
  color: #cbcbcb;
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: solid 1px ${(props) => props.theme.grey3_color};
  color: ${(props) => props.grey1_color};
  padding-bottom: 1.4rem;
  margin-top: 1.2rem;
  outline: none;
  font-size: 1.6rem;
  line-height: 1.19;

  width: 100%;

  &::placeholder {
    color: ${(props) => props.theme.grey3_color};
  }
`;

export default ReservationInput;
