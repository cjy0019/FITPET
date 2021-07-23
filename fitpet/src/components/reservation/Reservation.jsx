import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { A11yHidden } from '../../common/accessibility/Hidden';
import { MdKeyboardArrowRight } from 'react-icons/md';
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
            <ReservationInput hint="예약 문자를 받을 휴대폰 번호를 입력해주세요('-'없이 전체자리)">
              휴대폰 번호
            </ReservationInput>

            {/* 쿠폰 / 포인트 */}
          </section>

          <section>
            <StyledH2>쿠폰 / 포인트</StyledH2>
            <ReservationInput hint='사용가능한 쿠폰 0개 / 전체 0개'>
              쿠폰 적용
            </ReservationInput>
            <ReservationInput hint='0' point>
              포인트 사용
            </ReservationInput>
          </section>

          <section>
            <h2>결제 수단 선택</h2>
            <div>
              <input type='radio' id='kakaopay' value='kakaopay' />
              <label for='kakaopay'>카카오 페이</label>

              <input type='radio' id='toss' value='toss' />
              <label for='toss'>토스</label>

              <input type='radio' id='naverpay' value='naverpay' />
              <label for='naverpay'>네이버 페이</label>

              <input type='radio' id='payco' value='payco' />
              <label for='payco'>PAYCO</label>

              <input type='radio' id='credit' value='credit' />
              <label for='credit'>신용/체크 카드</label>

              <input type='radio' id='phone' value='phone' />
              <label for='phone'>휴대폰 결제</label>
            </div>
          </section>

          <div>
            <p>이용 약관 동의</p>
          </div>

          <button>확인 및 결제</button>
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
  margin: 0 auto;
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
