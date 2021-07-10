import React from 'react';
import styled from 'styled-components';

const LoginButton = () => {
  return <StyledButton children='로그인' />;
};

const StyledButton = styled.button`
  width: 100%;
  height: 5.2rem;
  border-radius: 26px;
  background-color: #979797;
  cursor: pointer;
  outline: none;
  border: none;
  color: #ffffff;
`;
export default LoginButton;
