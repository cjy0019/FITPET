import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import MiddleSizeButton from '../../common/buttons/middle_size/MiddleSizeButton';
import SmallLine from '../../common/utility/SmallLine';
import { DownButton, UpButton } from '../hotel/hotel_common/filterCommon';

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
        <Agree id='agreeAll' type='radio' />
        <AgreeLabel htmlFor='agreeAll'>
          주문 상품 정보 및 서비스 이용약관에 모두 동의
        </AgreeLabel>
        {showAll ? (
          <UpButton handleClick={handleClick} />
        ) : (
          <DownButton handleClick={handleClick} />
        )}
      </RadioWrapper>

      <SmallLine />
      {/* 숨겨지는 부분 */}
      <RadioWrapper flex ref={showRef}>
        <Agree id='agreeAll' type='radio' />
        <AgreeLabel htmlFor='agreeAll' margin>
          [필수] 숙소이용규칙 및 취소/환불규정 동의
        </AgreeLabel>

        <Agree id='agreeAll' type='radio' />
        <AgreeLabel htmlFor='agreeAll' margin>
          [필수] 개인정보 수집 및 이용 동의
        </AgreeLabel>

        <Agree id='agreeAll' type='radio' />
        <AgreeLabel htmlFor='agreeAll' margin>
          [필수] 개인정보 제 3자 제공 동의
        </AgreeLabel>

        <Agree id='agreeAll' type='radio' />
        <AgreeLabel htmlFor='agreeAll' margin>
          [필수] 만 14세 이상 확인
        </AgreeLabel>
      </RadioWrapper>

      <MiddleSizeButton
        text='확인 및 결제'
        width='37.4rem'
        height='5.2rem'
        border='none'
        borderRadius='0.7rem'
        pt='1.6rem'
        pb='1.5rem'
        color='#ffffff'
        backColor='#979797'
        mt='6.1rem'
        float='right'
      />
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
      transition: all 0.2s;
    `}
`;

const Agree = styled.input`
  margin: 0;
  display: none;
  cursor: pointer;
`;

const AgreeLabel = styled.label`
  display: inline;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.19;
  cursor: pointer;
  color: #979797;

  ${(props) =>
    props.margin &&
    css`
      margin-top: 1.1rem;
    `}

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
`;

export default Agreement;
