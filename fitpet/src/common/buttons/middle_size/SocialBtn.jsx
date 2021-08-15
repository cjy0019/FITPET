import React from 'react';
import styled, { css } from 'styled-components';
const SocialBtn = () => {
  return (
    <SocialBtnWrapper>
      <LoginBtn naver></LoginBtn>
      <LoginBtn kakao></LoginBtn>
    </SocialBtnWrapper>
  );
};

const SocialBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 4.8rem;
`;

const LoginBtn = styled.button`
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: 4.8rem 4.8rem;
  border: none;

  ${(props) =>
    props.kakao &&
    css`
      background-image: url('/img/auth/kakao.svg');
    `}

  ${(props) =>
    props.naver &&
    css`
      background-image: url('/img/auth/naver.svg');
    `}
`;

export default SocialBtn;
