import React from 'react';
import styled from 'styled-components';
import { Line } from '../reservation/Reservation';

const DriverPayment = () => {
  return (
    <PaySection>
      <h2>결제 수단 선택</h2>
      <Line />
      <SelectWrapper>
        <RadioWrapper>
          <RadioLabel htmlFor='kakaopay'>
            <RadioStyled type='radio' id='kakaopay' name='payments' />
            <RadioCircle></RadioCircle>
            카카오 페이
          </RadioLabel>
          <RadioLabel htmlFor='toss'>
            <RadioStyled type='radio' id='toss' name='payments' />
            <RadioCircle></RadioCircle>
            토스
          </RadioLabel>
          <RadioLabel htmlFor='naverpay'>
            <RadioStyled type='radio' id='naverpay' name='payments' />
            <RadioCircle></RadioCircle>
            네이버 페이
          </RadioLabel>
          <RadioLabel htmlFor='payco'>
            <RadioStyled type='radio' id='payco' name='payments' />
            <RadioCircle></RadioCircle>
            PAYCO
          </RadioLabel>
        </RadioWrapper>

        <RadioWrapperUnder>
          <RadioLabel htmlFor='credit'>
            <RadioStyled type='radio' id='credit' name='payments' />
            <RadioCircle></RadioCircle>
            신용/체크카드
          </RadioLabel>
          <RadioLabel htmlFor='phone'>
            <RadioStyled type='radio' id='phone' name='payments' />
            <RadioCircle></RadioCircle>
            휴대폰 결제
          </RadioLabel>
        </RadioWrapperUnder>
      </SelectWrapper>
    </PaySection>
  );
};

const PaySection = styled.section`
  margin-top: 6rem;

  h2 {
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 1.2;
    color: #707070;
  }
`;

const SelectWrapper = styled.div`
  margin-top: 3.1rem;
`;

const RadioWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

// 라디오 버튼 커스텀
const RadioLabel = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.19;
  color: #707070;
  margin-right: 1rem;
`;

const RadioStyled = styled.input`
  display: none;
`;

const RadioCircle = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.4rem;
  border: 2px solid #d8e4e2;
  border-radius: 50%;
  margin-right: 1rem;
  box-sizing: border-box;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    background-color: #009879;
    border-radius: 50%;

    transform: scale(0);
  }
  input:checked + &::after {
    transform: scale(1);
    transition: transform 0.3s;
  }
`;

const RadioWrapperUnder = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 38.1rem;
  margin-top: 3.1rem;
`;

export default DriverPayment;
