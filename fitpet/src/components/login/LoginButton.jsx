import React from 'react';
import styled from 'styled-components';

const LoginButton = () => {
  return <StyledButton children='로그인' />;
};

const StyledButton = styled.button`
  width: 100%;
  height: 5.2rem;
  border-radius: 26px;
  background-color: ${(props) => props.theme.main_color};
  cursor: pointer;
  outline: none;
  border: none;
  color: ${(props) => props.theme.white_color};
`;
export default LoginButton;
