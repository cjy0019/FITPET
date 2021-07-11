import React from 'react';
import styled from 'styled-components';

const SignUpSocial = () => {
  return (
    <SocialBox>
      <SocialText>SNS 계정으로 간편하게 가입하기</SocialText>
      {/* sns로 가입하기 버튼 */}
      <SocialBtn>네이버</SocialBtn>
      <SocialBtn>카카오톡</SocialBtn>
      <SocialBtn>페이스북</SocialBtn>
      <SocialBtn>애플</SocialBtn>
    </SocialBox>
  );
};

const SocialBox = styled.div`
  display: block;
  padding: 3.6rem 3.3rem;
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
  color: #979797;
`;
const SocialBtn = styled.button`
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  font-size: 1rem;
  justify-content: space-between;
  background-color: #979797;
  color: white;
  border-radius: 30px;
  border: none;
  :not(:last-child) {
    margin: 0 3.5rem 0 0;
  }
`;
export default SignUpSocial;
