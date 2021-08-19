import React, { useState } from 'react';
import styled from 'styled-components';
import { SocialBtn } from '../../common';

const SignUp = ({ hideSignUp, signup, showSignupSuccess, goLogin }) => {
  const [userId, setUserId] = useState('');
  const [userPW, setUserPW] = useState('');
  const [CheckPassword, setCheckPassword] = useState('');

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
              onChange={changeId}
              value={userId}
              placeholder='이메일 아이디'
              type='email'
            />
            <Input
              onChange={changePassword}
              value={userPW}
              placeholder='비밀번호'
              type='password'
            />
            <Input
              onChange={changeCheckPassword}
              value={CheckPassword}
              placeholder='비밀번호 확인'
              type='password'
            />
            <NextButton onClick={clickSignup}>회원가입</NextButton>
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
};

const StyledCenter = styled.div`
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SignUpWrapper = styled.div`
  width: 55.4rem;
  height: 62.7rem;
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
  font-weight: bold;
  letter-spacing: -0.44px;
  line-height: 1.18;
  color: ${(props) => props.theme.black1_color};
  text-align: left;
`;
const CloseBtn = styled.div`
  cursor: pointer;
  width: 3.4rem;
  height: 3.4rem;
  object-fit: contain;
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
  width: 38.39rem;
  height: 3.3rem;
  font-size: 1.6rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) => props.theme.black1_color};
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
`;
const NextButton = styled.button`
  cursor: pointer;
  width: 37.4rem;
  height: 5.2rem;
  border-radius: 26px;
  background: ${(props) => props.theme.gradient_color};
  border: none;
  color: ${(props) => props.theme.white_color};
  font-size: 1.8rem;
  margin-top: 3.6rem;
`;

// sns로 회원가입 하기
const SocialBlock = styled.div`
  display: block;
  padding: 3.6rem 3.3rem;
  border-bottom: solid 1px ${(props) => props.theme.grey4_color};
`;
const SocialText = styled.p`
  // width: 17.8rem;
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

// 회원가입 하단 부분
const BottomBlock = styled.div`
  text-align: center;
  .login {
    display: inline-block;
    margin: 0 0 0 1.2rem;
    border: none;
    font-size: 1.4rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: -0.28px;
    padding-bottom: 0.2rem;
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
