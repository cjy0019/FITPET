import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const LoginInput = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const idRef = useRef();
  const passRef = useRef();

  return (
    <>
      {email && <StyledText>이메일 아이디</StyledText>}
      {!email && <StyledTextHidden>이메일 아이디</StyledTextHidden>}

      <StyledInput
        placeholder='이메일 아이디'
        type='email'
        value={email}
        onChange={changeId}
        // onClick={click}
        ref={idRef}
      />

      {password && <StyledText>비밀번호</StyledText>}
      {!password && <StyledTextHidden>비밀번호</StyledTextHidden>}

      <StyledInput
        placeholder='비밀번호'
        type='password'
        value={password}
        onChange={changePassword}
        // onClick={passClick}
        ref={passRef}
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

  // 리팩토링 JS => CSS 📌
  // function click() {
  //   idRef.current.style = 'border-bottom: solid 0.5px red';
  //   passRef.current.style = 'border-bottom: solid 0.5px #979797;';
  // }

  // function passClick() {
  //   idRef.current.style = 'border-bottom: solid 0.5px #979797';
  //   passRef.current.style = 'border-bottom: solid 0.5px red;';
  // }
};

const StyledInput = styled.input`
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.grey3_color};
  padding-bottom: 1.4rem;
  background-color: transparent;
  font-size: 1.6rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  color: ${(props) => props.theme.black1_color};
  letter-spacing: -0.32px;
  text-align: left;
  outline: none;
  margin-top: 0.4rem;

  &:focus {
    border-bottom: 1px solid ${(props) => props.theme.grey2_color};
    color: ${(props) => props.theme.black1_color};
  }
`;

const StyledText = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: -0.28px;
  text-align: left;
  color: ${(props) => props.theme.black1_color};
  margin-top: 1.6rem;
`;

const StyledTextHidden = styled(StyledText)`
  visibility: hidden;
`;

export default LoginInput;
