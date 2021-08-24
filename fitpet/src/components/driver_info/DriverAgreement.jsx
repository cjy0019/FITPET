import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { DownButton, UpButton } from '../hotel/hotel_common/filterCommon';
import { HiCheck } from 'react-icons/hi';

const DriverAgreement = () => {
  const [showAll, setShowAll] = useState(true);
  const showRef = useRef(null);

  useEffect(() => {
    if (showAll) {
      showRef.current.style =
        'visibility : visible; opacity : 1; height:14.3rem';
    } else {
      showRef.current.style = 'height:0rem; visibility : hidden; opacity:0';
    }
  }, [showAll]);

  return (
    <AgreeWrapper>
      <FlexContainer line>
        <StyledTitle>이용 약관 동의</StyledTitle>
        <FlexContainer>
          <IconImg src='/img/icon/infoicon.svg' />
          <Desc>
            현장에서 사인한 계약서를 기준으로 약관이 적용되니 반드시 현장
            계약서를 확인해주시기 바랍니다
          </Desc>
        </FlexContainer>
      </FlexContainer>

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
          [필수] 여행지 약관 동의
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

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  ${(props) =>
    props.line &&
    css`
      padding-bottom: 1.4rem;
      border-bottom: solid 1.5px ${(props) => props.theme.main_color};
    `}
`;

const IconImg = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  margin-right: 0.4rem;
`;

const Desc = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.14;
  color: ${(props) => props.theme.grey1_color};
`;

const AgreeWrapper = styled.div`
  margin-top: 6.2rem;

  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;

const StyledTitle = styled.p`
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 1.2;
  color: ${(props) => props.theme.black1_color};

  margin-right: 1.8rem;
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
      padding-bottom: 1.3rem;
      border-bottom: solid 1px #eee; ;
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
  border: solid 1px #eee;
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
    background-color: ${(props) => props.theme.main_color};
    transform: scale(1.15);
    transition: transform 0.3s;
  }

  input:checked + & div {
    color: #fff;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  z-index: 10;
  color: #eee;
  transform: translate(-50%, -50%);
`;

export default DriverAgreement;
