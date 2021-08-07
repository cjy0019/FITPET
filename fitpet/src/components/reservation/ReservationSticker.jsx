import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { MiddleBtn } from '../../common';
import { A11yHidden } from '../../common/accessibility/Hidden';

const ReservationSticker = () => {
  return (
    <RightSection>
      <A11yHidden>예약 정보 확인</A11yHidden>
      <HotelName>롯데호텔 제주</HotelName>

      <SmallTitle>객실타입</SmallTitle>
      <Detail>스탠다드 더블룸 / 더블침대 1개</Detail>

      <SmallTitle>인원 및 반려동물 수</SmallTitle>
      <Detail>성인 2인 / 소형견 1마리</Detail>

      <SmallTitle>체크인-체크아웃 날짜</SmallTitle>
      <Detail line>8월 6일 (금) - 8월 7일 (토) 1박</Detail>

      {/* 결제 금액 부분 */}
      <SmallTitle>결제 금액</SmallTitle>
      <SimpleFlex>
        <Detail inline>쿠폰 할인 금액</Detail>
        <Detail inline right>
          0 원
        </Detail>
      </SimpleFlex>

      <SimpleFlex>
        <Detail inline>포인트사용</Detail>
        <Detail inline>0 원</Detail>
      </SimpleFlex>

      <SmallTitle price>최종 결제 금액</SmallTitle>
      <Price>
        466,790 <span>원</span>
      </Price>

      <IconNavLink to='/'>
        <span>세금 서비스 및 요금 포함</span>
      </IconNavLink>
      <MiddleBtn fit_course style={{ marginTop: '3.4rem', width: '100%' }}>
        확인 및 결제
      </MiddleBtn>
    </RightSection>
  );
};

const RightSection = styled.section`
  position: sticky;
  top: 22rem;
  background-color: ${(props) => props.theme.grey5_color};
  padding: 4.2rem 3.55rem 4.2rem 3.6rem;
  min-width: 39.8rem;
  max-height: 66rem;
  margin-left: 4.2rem;
`;

const HotelName = styled.p`
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 1.21;
  padding-bottom: 1.3rem;
  border-bottom: solid 1px ${(props) => props.theme.grey3_color};
  color: ${(props) => props.theme.black1_color};
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
  color: ${(props) => props.theme.grey2_color};

  ${(props) =>
    props.price &&
    css`
      color: ${(props) => props.theme.black1_color};
    `}
`;

const Detail = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.7rem;
  line-height: 1.17;
  letter-spacing: -0.36px;
  color: ${(props) => props.theme.black1_color};

  ${(props) =>
    props.line &&
    css`
      border-bottom: solid 1px ${(props) => props.theme.grey3_color};
      padding-bottom: 2.8rem;
    `}
`;

const Price = styled.p`
  font-size: 2.8rem;
  margin-top: 1.3rem;
  font-weight: bold;
  line-height: 0.86;
  letter-spacing: -0.56px;
  color: ${(props) => props.theme.main_color};

  span {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.33;
    letter-spacing: -0.36px;
    color: ${(props) => props.theme.main_color};
  }
`;

const IconNavLink = styled(NavLink)`
  display: inline-block;
  font-size: 1.4rem;
  margin-top: 1rem;
  padding-right: 2.4rem;
  position: relative;
  color: ${(props) => props.theme.grey2_color};

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -0.13rem;
    right: 0rem;
    width: 18px;
    height: 18px;
    background-image: url(/img/icon/moreicon.svg);
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
`;

export default ReservationSticker;
