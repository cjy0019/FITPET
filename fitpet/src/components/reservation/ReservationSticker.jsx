import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MiddleBtn } from '../../common';
import { A11yHidden } from '../../common/accessibility/Hidden';
import SmallLine from '../../common/utility/SmallLine';

const ReservationSticker = () => {
  return (
    <RightSection>
      <h2>
        <A11yHidden>예약 정보 확인</A11yHidden>
      </h2>
      <HotelName>롯데호텔 제주</HotelName>
      <SmallLine />

      <SmallTitle>객실타입</SmallTitle>
      <Detail>스탠다드 더블룸 / 더블침대 1개</Detail>

      <SmallTitle>인원 및 반려동물 수</SmallTitle>
      <Detail>성인 2인 / 소형견 1마리</Detail>

      <SmallTitle>체크인-체크아웃 날짜</SmallTitle>
      <Detail>8월 6일 (금) - 8월 7일 (토) 1박</Detail>

      <SmallLine margin />

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

      <SmallTitle>최종 결제 금액</SmallTitle>
      <Price>
        466,790 <span>원</span>
      </Price>

      <NavLink to='/' activeStyle={navStyle}>
        <span>세금 서비스 및 요금 포함</span>
        <MdKeyboardArrowRight
          style={{ display: 'inline', verticalAlign: 'bottom' }}
        />
      </NavLink>
      <MiddleBtn fit_course style={{ marginTop: '3.4rem' }}>
        확인 및 결제
      </MiddleBtn>
    </RightSection>
  );
};

const navStyle = {
  display: 'inline-block',
  marginTop: '1rem',
  fontSize: '1.4rem',
  color: '#707070',
};

const RightSection = styled.section`
  position: sticky;
  top: 0;
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
  margin-bottom: 1.3rem;
  color: #707070;
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

export default ReservationSticker;
