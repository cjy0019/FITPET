import React from 'react';
import styled from 'styled-components';
import { SocialBtn } from '../../common';
import FindId from './FindId';
import GotoSignUp from './GotoSignUp';
import LoginButton from './LoginButton';
import LoginInput from './LoginInput';

const LoginBottom = () => {
  return (
    <BottomContainer>
      {/* login input 컴포넌트 */}
      <LoginInput />

      {/* 아이디 저장 및 찾기 */}
      <FindId />
      <LoginButton />
      {/* sns계정으로 가입 */}
      <SocialBlock>
        <SocialText>SNS 계정으로 간편하게 가입하기</SocialText>
        {/* sns로 가입하기 버튼 */}
        <SocialBtn />
      </SocialBlock>

      <GotoSignUp />
    </BottomContainer>
  );
};

// 컨테이너
const BottomContainer = styled.div`
  margin: 0 auto;
  width: 37.39rem;
  color: ${(props) => props.theme.black1_color};
`;

// sns로 회원가입 하기
const SocialBlock = styled.div`
  display: block;
  padding: 3.6rem 3.3rem;
  border-bottom: solid 1px ${(props) => props.theme.grey4_color};
`;
const SocialText = styled.p`
  width: 17.8rem;
  height: 1.6rem;
  margin: 0 6.5rem 2rem;
  font-size: 1.4rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -0.28px;
  text-align: center;
  color: ${(props) => props.theme.black1_color};
`;

export default LoginBottom;
