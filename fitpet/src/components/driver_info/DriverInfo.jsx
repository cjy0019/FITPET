import React from 'react';
import styled, { css } from 'styled-components';
import { Line } from '../reservation/Reservation';
import DriverInput from './DriverInput';
import DriverPayment from './DriverPayment';
import LicenseButton from './LicenseButton';

const DriverInfo = () => {
  return (
    <div>
      <StyledArticle>
        {/* 운전자 정보 입력 왼쪽 part */}
        <section style={{ width: '100%' }}>
          <FlexContainer space='space-between'>
            <FlexContainer>
              <StyledH1>운전자 정보 입력</StyledH1>
              <AddDriverLabel htmlFor='info'>
                <Circle></Circle>
                운전자 추가등록이 필요하신가요?
                <input type='checkbox' id='info' />
              </AddDriverLabel>
            </FlexContainer>

            <AddDriverLabel htmlFor='driverDiff' color='true'>
              <Rect></Rect>
              운전자가 달라요
              <input type='checkbox' id='driverDiff' />
            </AddDriverLabel>
          </FlexContainer>
          <Line />

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
            <StyledH2>쿠폰 / 포인트</StyledH2>
            <Line />
            <DriverInput hint='사용가능한 쿠폰 0개 / 전체 0개'>
              쿠폰 적용
            </DriverInput>
            <DriverInput btn text='모두사용' hint='0' point>
              포인트 사용
            </DriverInput>
          </section>

          {/* 결제 수단 선택 */}
          <DriverPayment />
        </section>

        {/* 오른쪽 파트 */}
      </StyledArticle>
    </div>
  );
};

const StyledArticle = styled.article`
  width: 128rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 46rem;
  padding-top: 6rem;
`;

const StyledH1 = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 1.21;
  letter-spacing: normal;
  color: #707070;
`;

const AddDriverLabel = styled.label`
  display: flex;
  margin-left: 1.6rem;
  font-size: 1.4rem;
  cursor: pointer;
  align-items: center;
  color: ${({ theme }) => theme.grey3_color};

  ${(props) =>
    props.color &&
    css`
      color: ${({ theme }) => theme.grey1_color};
    `}

  input {
    display: none;
  }
`;

const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 0.6rem;
  background-color: ${({ theme }) => theme.grey3_color};
`;

const Rect = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 0.6rem;
  background-color: ${({ theme }) => theme.grey3_color};
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.space};
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

const StyledH2 = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 2.8rem;
  margin-top: 6.2rem;
  color: ${(props) => props.theme.grey1_color};
`;

export default DriverInfo;
