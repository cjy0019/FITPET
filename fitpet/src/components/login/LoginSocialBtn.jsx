import React from 'react';
import styled from 'styled-components';

const LoginSocialBtn = () => {
  return (
    <SocialButton>
      <li>네이버</li>
      <li>카카오톡</li>
      <li>페이스북</li>
      <li>애플</li>
    </SocialButton>
  );
};

const SocialButton = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 0 3rem;
`;

export default LoginSocialBtn;
