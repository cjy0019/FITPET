import React from 'react';
import styled from 'styled-components';

const Payment = () => {
  return (
    <PaySection>
      <h2>결제 수단 선택</h2>
      <SelectWrapper>
        <RadioWrapper>
          <RadioButton id='kakaopay' value='kakaopay' />
          <RadioLabel htmlFor='kakaopay'>카카오 페이</RadioLabel>

          <RadioButton id='toss' value='toss' />
          <RadioLabel htmlFor='toss'>토스</RadioLabel>

          <RadioButton id='naverpay' value='naverpay' />
          <RadioLabel htmlFor='naverpay'>네이버 페이</RadioLabel>

          <RadioButton id='payco' value='payco' />
          <RadioLabel htmlFor='payco'>PAYCO</RadioLabel>
        </RadioWrapper>

        <RadioWrapperUnder>
          <RadioButton id='credit' value='credit' />
          <RadioLabel htmlFor='credit' m>
            신용/체크 카드
          </RadioLabel>

          <RadioButton id='phone' value='phone' />
          <RadioLabel htmlFor='phone'>휴대폰 결제</RadioLabel>
        </RadioWrapperUnder>
      </SelectWrapper>
    </PaySection>
  );
};

const PaySection = styled.section`
  margin-top: 6rem;

  h2 {
    font-size: 2rem;
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
const RadioButton = styled.input.attrs({
  type: 'radio',
})`
  margin: 0;
  display: none;
  cursor: pointer;

  &:checked + label:before {
    height: 1.2rem;
    width: 1.2rem;
    border-radius: 50%;
    background-color: #01cc65;
  }
`;

// 라벨링
const RadioLabel = styled.label`
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.19;
  display: inline;

  &:before {
    content: '';
    display: inline-block;
    width: 2.4rem;
    height: 2.4rem;
    border: solid 1px #979797;
    border-radius: 50%;
    margin-right: 1rem;
    vertical-align: middle;
  }

  input[type='radio']:checked + label {
    background-color: #01cc65;
    color: white;
  }

  input[type='radio']:checked + label:before {
    height: 1.6rem;
    width: 1.6rem;
    border: 10px solid white;
    background-color: #01cc65;
  }
`;

const RadioWrapperUnder = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 37.4rem;
  margin-top: 3.1rem;
`;

export default Payment;
