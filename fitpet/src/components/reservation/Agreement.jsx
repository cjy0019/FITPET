import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { DownButton, UpButton } from '../hotel/hotel_common/filterCommon';
import { HiCheck } from 'react-icons/hi';

const Agreement = () => {
  const [showAll, setShowAll] = useState(true);
  const showRef = useRef(null);

  useEffect(() => {
    if (showAll) {
      showRef.current.style = 'visibility : visible; opacity : 1;';
    } else {
      showRef.current.style = 'height:0rem; visibility : hidden; opacity:0';
    }
  }, [showAll]);

  return (
    <AgreeWrapper>
      <StyledP>이용 약관 동의</StyledP>

      <RadioWrapper firstline>
        <AgreeLabel htmlFor='agreeAll'>
          <Agree id='agreeAll' type='checkbox' />
          <AgreeCheck>
            <IconWrapper>
              <HiCheck />
            </IconWrapper>
          </AgreeCheck>
          주문 상품 정보 및 서비스 이용약관에 모두 동의
        </AgreeLabel>
        {showAll ? (
          <UpButton handleClick={handleClick} />
        ) : (
          <DownButton handleClick={handleClick} />
        )}
      </RadioWrapper>

      {/* 숨겨지는 부분 */}
      <RadioWrapper flex ref={showRef}>
        <AgreeLabel htmlFor='agreeFirst'>
          <Agree id='agreeFirst' type='checkbox' />
          <AgreeCheck>
            <IconWrapper>
              <HiCheck />
            </IconWrapper>
          </AgreeCheck>
          [필수] 숙소이용규칙 및 취소/환불규정 동의
        </AgreeLabel>

        <AgreeLabel htmlFor='agreeSecond'>
          <Agree id='agreeSecond' type='checkbox' />
          <AgreeCheck>
            <IconWrapper>
              <HiCheck />
            </IconWrapper>
          </AgreeCheck>
          [필수] 개인정보 수집 및 이용 동의
        </AgreeLabel>

        <AgreeLabel htmlFor='agreeThird'>
          <Agree id='agreeThird' type='checkbox' />
          <AgreeCheck>
            <IconWrapper>
              <HiCheck />
            </IconWrapper>
          </AgreeCheck>
          [필수] 개인정보 제 3자 제공 동의
        </AgreeLabel>

        <AgreeLabel htmlFor='agreeFourth'>
          <Agree id='agreeFourth' type='checkbox' />
          <AgreeCheck>
            <IconWrapper>
              <HiCheck />
            </IconWrapper>
          </AgreeCheck>
          [필수] 만 14세 이상 확인
        </AgreeLabel>
      </RadioWrapper>
    </AgreeWrapper>
  );

  function handleClick() {
    setShowAll(!showAll);
  }
};

const AgreeWrapper = styled.div`
  margin-top: 6.2rem;

  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;

const StyledP = styled.p`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.2;
  color: #707070;
`;

const RadioWrapper = styled.div`
  margin-top: 2.8rem;
  margin-bottom: 1.3rem;

  ${(props) =>
    props.firstline &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.flex &&
    css`
      display: flex;
      flex-direction: column;
      height: 11rem;
      margin: 0;
      transition: all 0.2s;
    `}
`;
//  체크박스 부분
const Agree = styled.input`
  margin: 0;
  display: none;
  cursor: pointer;
`;

const AgreeLabel = styled.label`
  display: inline-flex;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.19;
  margin-top: 1.1rem;
  cursor: pointer;
  color: #979797;

  ${(props) =>
    props.margin &&
    css`
      margin-top: 1.1rem;
    `}
`;

const AgreeCheck = styled.div`
  position: relative;
  width: 2.4rem;
  height: 2.4rem;
  border: solid 2px #979797;
  border-radius: 50%;
  margin-right: 1rem;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 50%;
    transform: scale(0);
  }
  /* size='1.6rem' color='blue' stroke-width='1.4' */
  input:checked + &::after {
    background-color: #0186df;
    transform: scale(1);
    transition: transform 0.3s;
  }

  input:checked + & div {
    color: yellow;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  z-index: 10;
  color: #000000;
  transform: translate(-50%, -50%);
`;

export default Agreement;
