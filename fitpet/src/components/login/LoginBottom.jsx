import React from 'react';
import styled from 'styled-components';
import FindId from './FindId';
import GotoSignUp from './GotoSignUp';
import LoginButton from './LoginButton';
import LoginInput from './LoginInput';
import LoginSocialBtn from './LoginSocialBtn';

const LoginBottom = () => {
  return (
    <BottomContainer>
      {/* login input 컴포넌트 */}
      <LoginInput />

      {/* 아이디 저장 및 찾기 */}
      <FindId />
      <LoginButton />
      <StyledP>SNS 계정으로 간편하게 로그인하기</StyledP>

      {/* 소셜 로그인 버튼 */}
      <LoginSocialBtn />

      {/* 경계선 */}
      <Line />

      <GotoSignUp />
    </BottomContainer>
  );
};

// 컨테이너
const BottomContainer = styled.div`
  margin: 0 auto;
  width: 37.39rem;
  color: #979797;
`;

const StyledP = styled.p`
  font-size: 1.4rem;
  margin-top: 3.6rem;
  text-align: center;
`;

// 구분선
const Line = styled.hr`
  margin-top: 3.6rem;
`;

export default LoginBottom;
