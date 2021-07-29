import React, { useState } from 'react';
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
//import { SocialBtn } from '../../common';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [CheckPassword, setCheckPassword] = useState('');

  return (
    <form>
      <SignUpWrapper>
        {/* 회원가입 헤더 부분 */}
        <SignUpHeader>
          <HeaderText>회원가입</HeaderText>
          <CloseBtn>
            <CloseOutlined styled={{ color: '#979797' }} />
          </CloseBtn>
        </SignUpHeader>
        {/* 회원가입 내용 */}
        <SignUpContent>
          {/* 회원 정보 입력 칸, 다음으로 버튼 */}
          <Input
            onChange={changeId}
            value={email}
            placeholder='이메일 아이디'
            type='email'
          />
          <Input
            onChange={changePassword}
            value={password}
            placeholder='비밀번호'
            type='password'
          />
          <Input
            onChange={changeCheckPassword}
            value={CheckPassword}
            placeholder='비밀번호 확인'
            type='password'
          />
          <NextButton>다음으로</NextButton>
          {/* sns계정으로 가입 */}
          <SocialBlock>
            <SocialText>SNS 계정으로 간편하게 가입하기</SocialText>
            {/* sns로 가입하기 버튼 */}
            {/* <SocialBtn /> */}
          </SocialBlock>
          <Line />
          {/* 라인 아래 부분 */}
          <BottomBlock>
            <BottomText>이미 핏펫 회원이신가요?</BottomText>
            <Link to='/login' className='login'>
              로그인
            </Link>
          </BottomBlock>
        </SignUpContent>
      </SignUpWrapper>
    </form>
  );

  function changeId(e) {
    setEmail(e.target.value);
  }

  function changePassword(e) {
    setPassword(e.target.value);
  }
  function changeCheckPassword(e) {
    setCheckPassword(e.target.value);
  }
};

const SignUpWrapper = styled.div`
  width: 55.4rem;
  height: 68.7rem;
  padding: 5rem 3.9rem 4.7rem;
  border-radius: 30px;
  border: solid 1px #707070;
  background-color: #ffffff;
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
  color: #979797;
  text-align: left;
`;
const CloseBtn = styled.div`
  cursor: pointer;
  margin: 0 0 0 33.7rem;
  font-size: 2.2rem;
  width: 1.52rem;
  height: 1.52rem;
  color: #707070;
  background-color: #ffffff;
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
  color: #707070;
  border: none;
  border-bottom: 0.5px solid #979797;
  outline: none;
  :not(:first-child) {
    margin-top: 3.6rem;
  }
  &:focus {
    border-bottom: 0.5px solid #707070;
  }
`;
const NextButton = styled.button`
  cursor: pointer;
  width: 37.4rem;
  height: 5.2rem;
  border-radius: 26px;
  background-color: #979797;
  border: none;
  color: #ffffff;
  font-size: 1.8rem;
  margin-top: 3.6rem;
`;

// sns로 회원가입 하기
const SocialBlock = styled.div`
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

const Line = styled.hr`
  color: #979797; /* IE */
  border-color: #979797; /* 사파리 */
  background-color: #979797; /* 크롬, 모질라 등, 기타 브라우저 */
  height: 0.5px;
  border: none;
`;
// 회원가입 하단 부분

const BottomBlock = styled.div`
  text-align: center;
  .login {
    display: inline-block;
    width: 3.6rem;
    height: 1.6rem;
    margin: 0 0.3rem 0.2rem 1.5rem;
    font-size: 1.4rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: -0.28px;
    text-align: center;
    border-bottom: 1px solid #979797;
    color: #979797;
  }
`;
const BottomText = styled.p`
  display: inline-block;
  width: 13.2rem;
  height: 1.6rem;
  margin-top: 2.1rem;
  font-size: 1.4rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -0.28px;
  text-align: center;
  color: #979797;
`;
export default SignUp;
