import React from 'react';
import styled from 'styled-components';
import { MiddleBtn } from '../../common';
import { A11yHidden } from '../../common/accessibility/Hidden';
import SmallLine from '../../common/utility/SmallLine';

const DriverSticky = () => {
  return (
    <>
      <RightSection>
        <h2>
          <A11yHidden>렌트 정보 확인</A11yHidden>
        </h2>
        <FlexContainer>
          <CarImg></CarImg>
          <div>
            <CarName>THE NEW 아반떼 AD</CarName>
            <SmallDetail>일반자차보험</SmallDetail>
          </div>
        </FlexContainer>
        <SmallLine />

        <SmallTitle>인수</SmallTitle>
        <Detail>서울 강서구 / 8월 6일 (금) 10:00</Detail>

        <SmallTitle>반납</SmallTitle>
        <Detail>서울 강서구 / 8월 7일 (토) 10:00</Detail>

        <SmallLine margin />

        {/* 결제 금액 부분 */}
        <SmallTitle>결제 금액</SmallTitle>
        <SimpleFlex>
          <Detail inline>대여료</Detail>
          <Detail inline right>
            116,000 원
          </Detail>
        </SimpleFlex>

        <SimpleFlex>
          <Detail inline>일반 자차 보험</Detail>
          <Detail inline>40,000 원</Detail>
        </SimpleFlex>

        <SimpleFlex>
          <Detail inline>인수</Detail>
          <Detail inline>0 원</Detail>
        </SimpleFlex>

        <SimpleFlex>
          <Detail inline>반납</Detail>
          <Detail inline>0 원</Detail>
        </SimpleFlex>

        <SimpleFlex>
          <Detail inline>추가 옵션</Detail>
          <Detail inline>0 원</Detail>
        </SimpleFlex>

        <SmallTitle>최종 결제 금액</SmallTitle>
        <Price>
          156,000 <span>원</span>
        </Price>

        <MiddleBtn fit_course style={{ marginTop: '3.4rem' }}>
          확인 및 결제
        </MiddleBtn>
      </RightSection>
    </>
  );
};

const RightSection = styled.section`
  position: sticky;
  top: 0;
  background-color: #cbcbcb;
  padding: 4.2rem 3.55rem 4.2rem 3.6rem;
  min-width: 39.8rem;
  max-height: 75rem;
  margin-left: 4.2rem;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const CarName = styled.p`
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 1.21;
  margin-bottom: 0.6rem;
  color: #707070;
`;

const CarImg = styled.div`
  width: 12rem;
  height: 12rem;
  margin-right: 1.6rem;
  margin-bottom: 2.8rem;
  background-color: #979797;
`;

const SmallDetail = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${(props) => props.theme.grey1_color};
`;

// 결제 금액 아래 part
const SimpleFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SmallTitle = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 1.14;
  letter-spacing: -0.28px;
  margin-top: 2.8rem;
  color: #707070;
`;

const Detail = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.6rem;
  line-height: 1.17;
  letter-spacing: -0.36px;
  color: #707070;
`;

const Price = styled.p`
  font-size: 2.8rem;
  margin-top: 0.6rem;
  font-weight: bold;
  line-height: 0.86;
  letter-spacing: -0.56px;
  color: #707070;

  span {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.33;
    letter-spacing: -0.36px;
    color: #707070;
  }
`;

export default DriverSticky;
