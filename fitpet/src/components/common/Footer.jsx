import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Footer = () => {
  return (
    <FooterBlock>
      <Contents>
        <StyledP>고객센터 운영안내</StyledP>

        <Grid>
          <div>
            <Flex m>
              <StyledButton>1대1 상담하기</StyledButton>
              <div>
                <StyledP sub>고객센터</StyledP>
                <StyledP desc>평일 오전 9시~저녁 6시</StyledP>
              </div>
            </Flex>
            <Flex>
              <StyledButton>카카오톡 문의</StyledButton>
              <div>
                <StyledP sub>24시간 접수가능</StyledP>
                <StyledP desc>
                  고객센터 운영시간에 순차적으로 답변해 드립니다.
                </StyledP>
              </div>
            </Flex>
          </div>
          <div>
            <StyledP desc>
              평일 (채팅/유선) : 09:00-18:00(12시~13시 제외)
            </StyledP>
            <StyledP desc>주말/공휴일 채팅 상담만 가능</StyledP>
            <StyledP desc>환불/변경 : 9:00~17:00까지 접수 가능</StyledP>
            <StyledP desc>유선상담 : 1350-1888</StyledP>
          </div>
          <address>
            <StyledP desc>제휴문의 : business@FitPet.com</StyledP>
            <StyledP desc>채용문의 : welcome@FitPet.com</StyledP>
            <Flex img>
              <Link to='/'>
                <IconImg src='/img/icon/instaicon.svg' alt='인스타그램' />
              </Link>
              <Link to='/'>
                <IconImg src='/img/icon/facebookicon.svg' alt='페이스북' />
              </Link>
              <Link to='/'>
                <IconImg src='/img/icon/youtubeicon.svg' alt='유튜브' />
              </Link>
              <Link to='/'>
                <IconImg src='/img/icon/twittericon.svg' alt='트위터' />
              </Link>
            </Flex>
          </address>
        </Grid>

        <FooterMenu>
          <StyledList>
            <StyledItem>핏펫소개</StyledItem>
            <StyledItem>회사소개</StyledItem>
            <StyledItem>인재채용</StyledItem>
            <StyledItem>이용약관</StyledItem>
            <StyledItem>개인정보 처리방침</StyledItem>
            <StyledItem>취소 및 환불정책</StyledItem>
            <StyledItem>광고/제휴문의</StyledItem>
          </StyledList>

          <StyledP desc>
            상호명 (주)FitPet | 대표 김민정 | 개인정보보호책임자 김혜진 | 사업자
            등록번호 201-34-56311 사업자정보확인 | 통신판매 신고번호
            2021-서울서초-2350
          </StyledP>
          <StyledP desc>
            주소 서울특별시 서초구 강남대로 235 | 이메일 hello@FitPet.com |
            마케팅/제휴 문의 marketing@FitPet.com
          </StyledP>
          <StyledP desc>
            자사는 서울특별시관광협회 공제영업보증보험에 가입되어 있습니다.
          </StyledP>
        </FooterMenu>
      </Contents>
    </FooterBlock>
  );
};

const FooterBlock = styled.footer`
  width: 100%;
  height: 46rem;
  margin-top: 3.8rem;
`;

const Contents = styled.div`
  width: 128rem;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.7fr 1fr 1.12fr;
  border-bottom: solid 1px #cbcbcb;

  padding-bottom: 3.5rem;
  margin-top: 3.2rem;
`;

const StyledP = styled.p`
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.4px;
  color: ${(props) => props.theme.grey1_color};

  ${(props) =>
    props.sub &&
    css`
      font-size: 1.4rem;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.14;
      letter-spacing: -0.28px;
      text-align: left;
    `}

  ${(props) =>
    props.desc &&
    css`
      font-size: 1.4rem;
      font-weight: normal;
      margin-top: 0.4rem;
    `}
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 2.1rem;

  ${(props) =>
    props.m &&
    css`
      margin-bottom: 1.1rem;
    `}

  ${(props) =>
    props.img &&
    css`
      gap: 0.7rem;
      margin-top: 1.2rem;
    `}
`;

const StyledButton = styled.button`
  width: 12.8rem;
  height: 4.2rem;
  padding: 1.15rem 2.15rem;
  border-radius: 6px;
  border: solid 1px #d8d8d8;
  background-color: #fff;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.19;
  letter-spacing: -0.32px;
  color: #606060;
  white-space: nowrap;
`;

const IconImg = styled.img`
  width: 3.9rem;
  height: 3.9rem;
`;

const FooterMenu = styled.div`
  margin-top: 3.9rem;
`;

const StyledList = styled.ul`
  display: flex;
  gap: 4.8rem;
  margin-bottom: 2.1rem;
`;

const StyledItem = styled.li`
  font-size: 1.8rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: -0.36px;
  color: ${(props) => props.theme.grey1_color};
`;

export default Footer;
