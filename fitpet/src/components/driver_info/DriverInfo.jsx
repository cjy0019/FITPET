import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { StyledArticle } from '../../common';
import HeaderContainer from '../../containers/HeaderContainer';
import DriverAgreement from './DriverAgreement';
import DriverInfoHeader from './DriverInfoHeader';
import DriverInput from './DriverInput';
import DriverPayment from './DriverPayment';
import DriverSticky from './DriverSticky';
import LicenseButton from './LicenseButton';

const DriverInfo = () => {
  const [speechBox, setSpeechBox] = useState(false);

  return (
    <div>
      <HeaderContainer />
      <DriverInfoHeader />

      <StyledArticle>
        {/* 운전자 정보 입력 왼쪽 part */}
        <section style={{ width: '100%' }}>
          <FlexContainer space='space-between' top>
            <FlexContainer>
              <StyledH2>운전자 정보 입력</StyledH2>
              <InfoBlock
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}>
                <IconImg src='/img/icon/infoicon.svg' alt='icon' /> 운전자
                추가등록이 필요하신가요?
              </InfoBlock>
            </FlexContainer>
            {speechBox && (
              <SpeechBox>
                <p>
                  예약시에는 운전자 1인의 정보만 입력하시면 됩니다. 나머지
                  운전자 정보는 매장에서 등록이 가능합니다.
                </p>
              </SpeechBox>
            )}

            <AddDriverLabel htmlFor='driverDiff' color='true'>
              <Rect></Rect>
              운전자가 달라요
              <input type='checkbox' id='driverDiff' />
            </AddDriverLabel>
          </FlexContainer>

          {/* 예약자 정보 */}

          <section>
            <DriverInput value='김혜진'>운전자 이름</DriverInput>
            <DriverInput value='01054729026'>휴대폰 번호</DriverInput>
            <DriverInput value='YYMMDD'>이메일 주소</DriverInput>
            <DriverInput value='931028'>생년월일</DriverInput>
          </section>

          <LicenseTitle>운전 면허 종류</LicenseTitle>
          <LicenseWrapper>
            <LicenseButton name='normal_M'>2종 보통</LicenseButton>
            <LicenseButton name='normal_S'>2종 소형</LicenseButton>
            <LicenseButton name='special_M'>1종 보통</LicenseButton>
            <LicenseButton name='special_L'>1종 대형</LicenseButton>
          </LicenseWrapper>

          {/* 쿠폰 포인트 */}
          <section>
            <StyledH2 line>쿠폰 / 포인트</StyledH2>
            <DriverInput hint='사용가능한 쿠폰 0개 / 전체 0개'>
              쿠폰 적용
            </DriverInput>
            <DriverInput btn text='모두사용' hint='0' point>
              포인트 사용
            </DriverInput>
          </section>

          {/* 결제 수단 선택 */}
          <DriverPayment />

          {/* 이용약관 동의 */}
          <DriverAgreement />
        </section>

        {/* 오른쪽 파트 */}
        <DriverSticky />
      </StyledArticle>
    </div>
  );

  function handleMouseOver() {
    setSpeechBox(() => true);
  }

  function handleMouseOut() {
    setSpeechBox(() => false);
  }
};

const StyledH2 = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 1.21;
  letter-spacing: normal;
  color: ${(props) => props.theme.black1_color};

  ${(props) =>
    props.line &&
    css`
      margin-top: 6.2rem;
      padding-bottom: 1.4rem;
      border-bottom: solid 1.5px ${props.theme.main_color};
    `}
`;

const AddDriverLabel = styled.label`
  display: flex;
  margin-left: 1.6rem;
  font-size: 1.4rem;
  cursor: pointer;
  align-items: center;
  color: ${(props) => props.theme.black1_color};

  ${(props) =>
    props.color &&
    css`
      color: ${({ theme }) => theme.grey1_color};
    `}

  input {
    display: none;
  }
`;

const FlexContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.space};

  ${(props) =>
    props.top &&
    css`
      padding-bottom: 1.4rem;
      border-bottom: solid 1.5px ${props.theme.main_color};
    `}
`;

const InfoBlock = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 1.6rem;
  font-size: 1.4rem;
  line-height: 1.14;
  letter-spacing: -0.28px;
  color: ${(props) => props.theme.black1_color};
`;

const IconImg = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  margin-right: 0.4rem;
`;

const SpeechBox = styled.div`
  z-index: 50;
  position: absolute;
  top: -8rem;
  left: 14.7rem;
  width: 21.7rem;
  padding: 1.2rem;
  border-radius: 12px;
  background-color: #eee;
  font-size: 1.2rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.24px;
  text-align: left;
  color: #2a2a2a;

  &::after {
    z-index: -1;
    position: absolute;
    left: 2.4rem;
    bottom: -1.2rem;
    content: '';
    display: block;
    background: url('/img/icon/speechicon.svg') no-repeat;
    width: 1.78rem;
    height: 3.79rem;
  }
`;

const Rect = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 0.6rem;
  background-color: ${({ theme }) => theme.grey3_color};
`;

// 운전자 이름 ~ 생년월일
const LicenseTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.14;
  color: ${(props) => props.theme.grey1_color};
  margin: 4rem 0 1.3rem;
`;

const LicenseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default DriverInfo;
