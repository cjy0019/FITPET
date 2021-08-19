import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { SocialBtn } from '../../common';

const SignUp = ({ hideSignUp, signup, showSignupSuccess, goLogin }) => {
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [userPW, setUserPW] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [isEmail, setIsEmail] = useState(null);
  const [isPassword, setIsPassword] = useState(null);
  const _ref = useRef(null);

  useEffect(() => {
    const PwRegex =
      /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    setIsPassword(PwRegex.test(userPW));
    setIsEmail(emailRegex.test(userId));

    if (
      !userName ||
      !userId ||
      !userPW ||
      !checkPassword ||
      !isPassword ||
      !isEmail ||
      !(userPW === checkPassword)
    ) {
      _ref.current.disabled = true;
      _ref.current.style = `cursor : not-allowed;`;
    } else {
      _ref.current.disabled = false;
      _ref.current.style = `color :#fff; cursor : pointer; opacity: 1;`;
    }
  }, [checkPassword, isEmail, isPassword, userId, userName, userPW]);

  return (
    <>
      <StyledCenter>
        <SignUpWrapper>
          {/* 회원가입 헤더 부분 */}
          <SignUpHeader>
            <HeaderText>회원가입</HeaderText>
            <CloseBtn onClick={hideSignUp} />
          </SignUpHeader>
          {/* 회원가입 내용 */}
          <SignUpContent>
            {/* 회원 정보 입력 칸, 다음으로 버튼 */}
            <Input
              onChange={changeName}
              value={userName}
              placeholder='이름'
              type='text'
            />
            <Input
              onChange={changeId}
              value={userId}
              placeholder='이메일 아이디'
              type='email'
            />
            {!userId ? null : isEmail ? (
              <Warning okay>올바른 아이디 입니다.</Warning>
            ) : (
              <Warning>이메일 형식의 아이디를 입력해주세요.</Warning>
            )}

            <Input
              onChange={changePassword}
              value={userPW}
              placeholder='비밀번호 (8자 이상 / 특수문자 1개 이상)'
              type='password'
            />
            {!userPW ? null : isPassword ? (
              <Warning okay>유효한 비밀번호입니다.</Warning>
            ) : (
              <Warning>
                영문 8자 이상, 특수문자 1개 이상을 사용해주세요.
              </Warning>
            )}

            <Input
              onChange={changeCheckPassword}
              value={checkPassword}
              placeholder='비밀번호 확인'
              type='password'
            />
            {!checkPassword ? null : userPW === checkPassword ? (
              <Warning okay>입력한 비밀번호와 일치합니다.</Warning>
            ) : (
              <Warning>입력한 비밀번호와 동일하게 입력해주세요.</Warning>
            )}

            <NextButton onClick={clickSignup} disabled ref={_ref}>
              회원가입
            </NextButton>
            {/* sns계정으로 가입 */}
            <SocialBlock>
              <SocialText>SNS 계정으로 간편하게 가입하기</SocialText>
              {/* sns로 가입하기 버튼 */}
              <SocialBtn />
            </SocialBlock>
            {/* 라인 아래 부분 */}
            <BottomBlock>
              <BottomText>이미 핏펫 회원이신가요?</BottomText>
              <button className='login' onClick={goLogin}>
                로그인
              </button>
            </BottomBlock>
          </SignUpContent>
        </SignUpWrapper>
      </StyledCenter>
    </>
  );

  function clickSignup() {
    signup(userId, userPW);
  }

  function changeId(e) {
    setUserId(e.target.value);
  }

  function changePassword(e) {
    setUserPW(e.target.value);
  }
  function changeCheckPassword(e) {
    setCheckPassword(e.target.value);
  }

  function changeName(e) {
    setUserName(e.target.value);
  }
};

const StyledCenter = styled.div`
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SignUpWrapper = styled.div`
  width: 55.4rem;
  padding: 5rem 3.9rem 4.7rem;
  border-radius: 30px;
  border: solid 1px #707070;
  background-color: ${(props) => props.theme.white_color};
`;

// 회원가입 헤더 부분
const SignUpHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HeaderText = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: 0.4px;
  line-height: 1.18;
  color: ${(props) => props.theme.black1_color};
  text-align: left;
`;
const CloseBtn = styled.div`
  cursor: pointer;
  width: 3.4rem;
  height: 3.4rem;
  background-size: cover;
  background-image: url('/img/auth/closebutton.svg');
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

// 회원가입 내용
const SignUpContent = styled.div`
  padding: 5rem 3.6rem 0;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  font-size: 1.6rem;
  line-height: 1.19;
  text-align: left;
  padding-bottom: 1rem;
  color: ${(props) => props.theme.black1_color};
  letter-spacing: 0.5px;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.grey3_color};
  outline: none;
  :not(:first-child) {
    margin-top: 3.6rem;
  }
  &:focus {
    border-bottom: 1px solid ${(props) => props.theme.grey2_color};
    color: ${(props) => props.theme.black1_color};
  }
  &::placeholder {
    color: ${(props) => props.theme.grey3_color};
  }
`;

const Warning = styled.p`
  color: #f75e5e;
  margin-top: 0.6rem;

  ${(props) =>
    props.okay &&
    css`
      color: ${props.theme.main_color};
    `}
`;

const NextButton = styled.button.attrs({
  disabled: true,
})`
  cursor: pointer;
  width: 100%;
  height: 5.2rem;
  border-radius: 26px;
  background: ${(props) => props.theme.gradient_color};
  opacity: 0.4;
  border: none;
  letter-spacing: 0.4px;
  /* color: ${(props) => props.theme.black1_color}; */
  color: #ffffff;
  font-size: 1.8rem;
  margin-top: 3.6rem;
  transition: all 0.5s;
`;

// sns로 회원가입 하기
const SocialBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3.6rem 3.3rem;
  border-bottom: solid 1px ${(props) => props.theme.grey4_color};
`;
const SocialText = styled.p`
  margin: 0 6.5rem 2rem;
  font-size: 1.4rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.4px;
  white-space: nowrap;
  text-align: center;
  color: ${(props) => props.theme.black1_color};
`;

// 회원가입 하단 부분
const BottomBlock = styled.div`
  text-align: center;
  .login {
    display: inline-block;
    margin: 0 0 0 1.2rem;
    border: none;
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: 0.2px;
    padding: 0 0.2rem 0.2rem;
    text-align: center;
    background-color: transparent;
    border-bottom: 1px solid ${(props) => props.theme.grey1_color};
    color: ${(props) => props.theme.black1_color};

    &:hover {
      color: ${(props) => props.theme.main_color};
      border-bottom: 1px solid ${(props) => props.theme.main_color};
    }
  }
`;
const BottomText = styled.p`
  display: inline-block;
  height: 1.6rem;
  margin-top: 2.1rem;
  font-size: 1.4rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -0.28px;
  text-align: center;
  color: ${(props) => props.theme.black1_color};
`;
export default SignUp;
