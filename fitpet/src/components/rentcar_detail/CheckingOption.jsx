import React, { useRef } from 'react';
import { HiCheck } from 'react-icons/hi';
import styled, { css } from 'styled-components';

const CheckingOption = ({ children, detail1, detail2, id }) => {
  const _label = useRef(null);

  return (
    <OptionLabel ref={_label} htmlFor={id}>
      <CheckBox type='checkbox' name='options' id={id} />

      <Check>
        <IconWrapper>
          <HiCheck size='2rem' />
        </IconWrapper>
      </Check>

      <FlexText>
        <div>
          <Text subtitle>{children}</Text>
          {detail1 ? (
            <Text detail>최대 만 1세, 체중 0~9kg의 영아에게 적합합니다.</Text>
          ) : detail2 ? (
            <Text detail>
              만 9개월~4세, 체중 9~25kg의 영유아와 아동에게 적합합니다.
            </Text>
          ) : (
            <Text detail>
              체중 10~18kg, 신장 101cm 이하의 영유아와 아동에게 적합합니다.
            </Text>
          )}
        </div>

        <div>
          <Text borrow>대여건당</Text>
          <Text price>
            15,000 <span>원</span>
          </Text>
        </div>
      </FlexText>
    </OptionLabel>
  );
};

const OptionLabel = styled.label`
  position: relative;
  width: 85rem;
  height: 10.8rem;
  padding: 3.1rem 2.4rem 0 7.6rem;
  cursor: pointer;
  border: solid 2px #707070;
  border-radius: 10px;

  input:checked label {
    border: solid 3px blue;
  }
`;

const CheckBox = styled.input`
  margin: 0;
  display: none;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  z-index: 10;
  color: #000000;
  transform: translate(-50%, -50%);
`;

const Check = styled.div`
  position: absolute;
  top: 4.2rem;
  left: 2.4rem;
  width: 2.4rem;
  height: 2.4rem;
  border: solid 3px #979797;
  border-radius: 6px;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    transform: scale(0);
  }
  input:checked + &::after {
    background-color: #bf88ca;
    transform: scale(1.1);
  }

  input:checked + .parent-box {
    background-color: yellowgreen;
  }

  input:checked + & div {
    color: yellow;
  }
`;

const Text = styled.p`
  color: ${(props) => props.theme.grey1_color};

  ${(props) =>
    props.subtitle &&
    css`
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 1.33;
      letter-spacing: -0.36px;
    `}

  ${(props) =>
    props.detail &&
    css`
      font-size: 1.6rem;
      line-height: 1.75;
      letter-spacing: -0.32px;
      text-align: left;
    `}

    ${(props) =>
    props.borrow &&
    css`
      font-size: 1.4rem;
      line-height: 1.71;
      letter-spacing: -0.28px;
      text-align: left;
      text-align: right;
    `}

    ${(props) =>
    props.price &&
    css`
      font-size: 2rem;
      font-weight: bold;
      line-height: 1.2;
      letter-spacing: -0.4px;
      text-align: left;

      span {
        font-size: 1.4rem;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.71;
        letter-spacing: -0.28px;
      }
    `};
`;

const FlexText = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default CheckingOption;
