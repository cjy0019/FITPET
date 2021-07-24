import React from 'react';
import styled from 'styled-components';
import Agreement from './Agreement';
import Payment from './Payment';
import ReservationInput from './ReservationInput';
import ReservationSticker from './ReservationSticker';

const Reservation = () => {
  return (
    <div>
      <StyledArticle>
        {/* 예약 정보 입력 왼쪽 파트 */}
        <section style={{ width: '100%' }}>
          <StyledH1>예약 정보 입력</StyledH1>
          <Line />

          {/* 예약자 정보 */}
          <section>
            <StyledH2>예약자 정보</StyledH2>

            <ReservationInput hint='체크인 시 확인가능한 예약자 실명을 입력해주세요.'>
              성명
            </ReservationInput>
            <ReservationInput
              btn
              text='인증하기'
              hint="예약 문자를 받을 휴대폰 번호를 입력해주세요. ('-'없이 전체자리)">
              휴대폰 번호
            </ReservationInput>

            {/* 쿠폰 / 포인트 */}
          </section>

          <section>
            <StyledH2>쿠폰 / 포인트</StyledH2>
            <ReservationInput hint='사용가능한 쿠폰 0개 / 전체 0개'>
              쿠폰 적용
            </ReservationInput>
            <ReservationInput btn text='모두사용' hint='0' point>
              포인트 사용
            </ReservationInput>
          </section>

          <Payment />
          <Agreement />
        </section>

        {/* 오른쪽 파트 */}
        <ReservationSticker />
      </StyledArticle>
    </div>
  );
};

const StyledArticle = styled.article`
  width: 128rem;
  display: flex;
  justify-content: space-between;
  /* background-color: #bea2bd; */
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

const StyledH2 = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 2.8rem;
  margin-top: 2.8rem;
  color: #707070;
`;

const Line = styled.div`
  border-bottom: solid 1.5px #979797;
  margin-top: 1.4rem;
  width: 100%;
`;

export default Reservation;
