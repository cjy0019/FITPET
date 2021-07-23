import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { A11yHidden } from '../../common/accessibility/Hidden';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Reservation = () => {
  return (
    <div>
      <StyledArticle>
        {/* 예약 정보 입력 왼쪽 파트 */}
        <section>
          <StyledH1>예약 정보 입력</StyledH1>
          <div>구분선</div>
          <section>
            <h2>예약자 정보</h2>
            <p>성명</p>
            <input type='text' />
            <p>휴대폰 번호</p>
            <input type='text' />
          </section>

          <section>
            <h2>쿠폰 / 포인트</h2>
            <p>쿠폰 적용</p>
            <input type='text' />

            <p>포인트 사용</p>
            <input type='text' />
            <button>모두 사용</button>
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
        <RightSection>
          <h2>
            <A11yHidden>예약 정보 확인</A11yHidden>
          </h2>
          <p>롯데호텔 제주</p>
          <div>선</div>
          <p>객실타입</p>
          <p>스탠다드 더블룸 / 더블침대 1개</p>

          <p>인원 및 반려동물 수</p>
          <p>성인 2인 / 소형견 1마리</p>

          <p>체크인-체크아웃 날짜</p>
          <p>8월 6일 (금) - 8월 7일 (토) 1박</p>

          <div>선</div>

          <p>결제 금액</p>
          <p>쿠폰 할인 금액</p>
          <p>0원</p>
          <p>포인트사용</p>
          <p>0원</p>

          <p>최종 결제 금액</p>
          <p>466,790 원</p>
          <NavLink to='/'>
            서비스 및 요금포함{' '}
            <div style={{ backgroundColor: '#62997b', verticalAlign: 'top' }}>
              <MdKeyboardArrowRight />
            </div>
          </NavLink>
        </RightSection>
      </StyledArticle>
    </div>
  );
};

const StyledArticle = styled.article`
  width: 128rem;
  display: flex;
  justify-content: space-between;
  background-color: #bea2bd;
  margin: 0 auto;
`;

const StyledH1 = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 1.21;
  letter-spacing: normal;
  color: #707070;
`;

// 레이아웃 오른쪽 내용 확인 부분
const RightSection = styled.section`
  background-color: navajowhite;
  padding: 4.2rem 3.55rem 4.2rem 3.6rem;
`;

export default Reservation;
