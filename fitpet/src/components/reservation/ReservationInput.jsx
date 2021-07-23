import React from 'react';
import styled, { css } from 'styled-components';

const ReservationInput = ({ children, hint, point }) => {
  return (
    <StyledDiv m4>
      <StyledP>{children}</StyledP>
      <StyledInput type='text' placeholder={hint} />
      {point && <StyledPoint>사용가능한 포인트 : 0</StyledPoint>}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
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
  border: none;
  border-bottom: solid 0.05rem #979797;
  padding-bottom: 1.4rem;
  padding-top: 1rem;
  outline: none;
  width: 100%;

  &::placeholder {
    font-size: 1.6rem;
    color: #cbcbcb;
    line-height: 1.19;
  }
`;

export default ReservationInput;
