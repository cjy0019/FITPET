import React from 'react';
import styled from 'styled-components';

const LoginInput = ({ kind, password }) => {
  if (kind === 'email') {
    return <StyledInput placeholder='이메일 아이디' type='email' />;
  }
  return <StyledInput placeholder='비밀번호' type='password' />;
};

const StyledInput = styled.input`
  display: block;
  margin: 0 auto;
  border: solid 0.5px #979797;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  margin-top: 3.6rem;
  width: 100%;
  padding-bottom: 0.7rem;
`;

export default LoginInput;
