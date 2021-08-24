import React from 'react';
import styled, { css } from 'styled-components';

const LoginFail = ({ hideLoginFail, retryLogin }) => {
  return (
    <CenterDiv>
      <SignUpEndWrapper>
        <Logo />
        <EndText>
          로그인에 실패하였습니다.
          <br />
          아이디와 비밀번호를 다시한번 확인해주세요.
        </EndText>

        <BtnBlock>
          <GotoBtn onClick={hideLoginFail}>홈으로</GotoBtn>
          <GotoBtn primary onClick={retryLogin}>
            다시 로그인하기
          </GotoBtn>
        </BtnBlock>
      </SignUpEndWrapper>
    </CenterDiv>
  );
};

const CenterDiv = styled.div`
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SignUpEndWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 52.4rem;
  height: 47.6rem;
  border-radius: 30px;
  border: solid 1px #707070;
  background-color: #ffffff;
`;
const Logo = styled.img.attrs({
  src: '/img/auth/signuplogo.svg',
  alt: 'FitPet',
})`
  display: block;
  width: 14.8rem;
  height: 16.6rem;
`;

const EndText = styled.p`
  margin: 2rem 0 5rem 0;
  font-size: 2.2rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: -0.44px;
  text-align: center;
  color: ${(props) => props.black1_color};
`;

const BtnBlock = styled.div`
  display: flex;
  gap: 3rem;
`;

const GotoBtn = styled.button`
  width: 17.2rem;
  height: 5.2rem;
  font-size: 1.8rem;
  background-color: #eee;
  color: ${(props) => props.theme.main_color};
  border-radius: 26px;
  border: none;

  ${(props) =>
    props.primary &&
    css`
      background: ${props.theme.main_color};
      color: #fff;
    `}
`;

export default LoginFail;
