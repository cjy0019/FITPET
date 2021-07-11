import React, { useState } from 'react';
import styled from 'styled-components';

const LoginInput = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      {email && <StyledText>이메일 아이디</StyledText>}
      {!email && <StyledTextHidden>이메일 아이디</StyledTextHidden>}

      <StyledInput
        placeholder='이메일 아이디'
        type='email'
        value={email}
        onChange={changeId}
      />

      {password && <StyledText>비밀번호</StyledText>}
      {!password && <StyledTextHidden>비밀번호</StyledTextHidden>}

      <StyledInput
        placeholder='비밀번호'
        type='password'
        value={password}
        onChange={changePassword}
      />
    </>
  );

  // 아이디
  function changeId(e) {
    setEmail(e.target.value);
  }

  // 비밀번호
  function changePassword(e) {
    setPassword(e.target.value);
  }
};

const StyledInput = styled.input`
  display: block;
  width: 100%;
  border: none;
  border-bottom: solid 0.5px #979797;
  padding-bottom: 1.4rem;
  background-color: transparent;
  font-size: 1.6rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  color: #707070;
  letter-spacing: -0.32px;
  text-align: left;
  outline: none;
  margin-top: 0.4rem;
`;

const StyledText = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: -0.28px;
  text-align: left;
  color: #707070;
  margin-top: 1.6rem;
`;

const StyledTextHidden = styled(StyledText)`
  visibility: hidden;
`;

export default LoginInput;
