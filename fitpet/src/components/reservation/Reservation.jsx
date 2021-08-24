import React from 'react';
import styled, { css } from 'styled-components';
import { StyledArticle } from '../../common';
import { A11yHidden } from '../../common/accessibility/Hidden';
import HeaderContainer from '../../containers/HeaderContainer';
import Footer from '../common/Footer';
import Agreement from './Agreement';
import Payment from './Payment';
import ReservationHeader from './ReservationHeader';
import ReservationInput from './ReservationInput';
import ReservationSticker from './ReservationSticker';

const Reservation = () => {
  return (
    <>
      <Wrapper>
        <HeaderContainer />
        <ReservationHeader />
        <StyledArticle>
          {/* 예약 정보 입력 왼쪽 파트 */}
          <section style={{ width: '100%' }}>
            <A11yHidden>예약 정보 입력</A11yHidden>
            <StyledH2>예약자 정보 입력</StyledH2>

            {/* 예약자 정보 */}
            <ReservSection>
              <ReservationInput hint='체크인 시 확인가능한 예약자 실명을 입력해주세요.'>
                성명
              </ReservationInput>
              <ReservationInput
                btn
                text='인증하기'
                hint="예약 문자를 받을 휴대폰 번호를 입력해주세요. ('-'없이 전체자리)">
                휴대폰 번호
              </ReservationInput>
              <ReservationInput hint='예약 이메일을 받을 이메일 주소를 입력해주세요'>
                이메일 주소
              </ReservationInput>
            </ReservSection>

            {/* 쿠폰 / 포인트 */}

            <ReservSection>
              <StyledH2 mt>쿠폰 / 포인트</StyledH2>
              <ReservationInput hint='사용가능한 쿠폰 0개 / 전체 0개'>
                쿠폰 적용
              </ReservationInput>
              <ReservationInput btn text='모두사용' hint='0' point>
                포인트 사용
              </ReservationInput>
            </ReservSection>

            <Payment />
            <Agreement />
          </section>

          {/* 오른쪽 파트 */}
          <ReservationSticker />
        </StyledArticle>
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  border-bottom: solid 1px #cbcbcb;
  padding-bottom: 14.9rem;
`;

export const ReservSection = styled.section`
  margin-top: 2.8rem;
`;

export const StyledH2 = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 1.21;
  letter-spacing: normal;
  border-bottom: solid 1.5px ${(props) => props.theme.main_color};
  padding-bottom: 1.4rem;
  color: ${({ theme }) => theme.black1_color};

  ${(props) =>
    props.mt &&
    css`
      margin-top: 6rem;
    `}
`;

export const Line = styled.div`
  border-bottom: solid 1.5px #979797;
  margin-top: 1.4rem;
  width: 100%;
`;

export default Reservation;
