import React from 'react';
import styled from 'styled-components';

const SignUpEnd = () => {
  return (
    <SignUpEndWrapper>
      <Logo />
      <EndText>
        회원가입이 완료되었습니다!
        <br />
        반려동물과 함께 맞춤 여행을 떠나보세요:)
      </EndText>
      <BtnBlock>
        <GotoBtn color='#cbcbcb'>홈으로</GotoBtn>
        <GotoBtn color='#979797'>로그인</GotoBtn>
      </BtnBlock>
    </SignUpEndWrapper>
  );
};

const SignUpEndWrapper = styled.div`
  width: 524px;
  height: 476px;
  border-radius: 30px;
  border: solid 1px #707070;
  background-color: #ffffff;
  padding: 6.6rem 7.5rem;
`;
const Logo = styled.img.attrs({
  src: '/img/logo-social.png',
  alt: 'FitPet',
})`
  border: 1px solid #707070;
  display: block;
  width: 14.8rem;
  height: 16.6rem;
  margin: 0 auto;
`;

const EndText = styled.p`
  width: 35.4rem;
  height: 5.6rem;
  margin: 2rem 0 5rem 0;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: -0.44px;
  text-align: center;
  color: #979797;
`;

const BtnBlock = styled.div`
  display: flex;
`;

const GotoBtn = styled.button`
  width: 172px;
  height: 52px;
  margin: 0 30px 0 0;
  font-size: 1.8rem;
  color: #fff;
  border-radius: 26px;
  border: none;
  background: ${(props) => props.color || 'white'};
`;

export default SignUpEnd;
