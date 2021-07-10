import React from 'react';
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import LoginInput from './LoginInput';
import FindId from './FindId';
import LoginButton from './LoginButton';
import LoginSocialBtn from './LoginSocialBtn';

const Login = () => {
  return (
    <form>
      <LoginWrapper>
        <div className='header'>
          <h1>로그인</h1>
          <CloseOutlined />
        </div>
        <Logo />
        <div className='slogan'>
          <p>반려동물과 함께하는 맞춤 힐링여행!</p>
          <p>핏펫에 오신걸 환영합니다&#58;&#41;</p>
        </div>
        {/* login input 컴포넌트 */}
        <div
          style={{
            margin: '0 auto',
            width: '19.5vw',
          }}>
          <LoginInput kind='email' />
          <LoginInput kind='password' />

          {/* 아이디 저장 및 찾기 */}
          <FindId />

          <LoginButton />
          <p style={{ marginTop: '3.6rem' }}>
            SNS 계정으로 간편하게 로그인하기
          </p>

          {/* 소셜 로그인 버튼 */}
          <LoginSocialBtn />
          <div
            style={{
              borderBottom: 'solid 0.5px #979797',
              marginTop: '3.6rem',
            }}></div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p style={{ display: 'inline-block', textAlign: 'center' }}>
              아직 핏펫 회원이 아니신가요?
            </p>
            <Link to='/signup'>회원가입</Link>
          </div>
        </div>
      </LoginWrapper>
    </form>
  );
};

// style
// 최상위 wrapper
const LoginWrapper = styled.div`
  width: 27.3vw;
  /* height: 75.1vh; */
  padding: 5rem 3.9rem 4.7rem;
  background-color: aliceblue;
  border-radius: 30px;
  a:visited {
    color: #979797;
  }

  .header {
    display: flex;
    justify-content: space-between;
    font-size: 2.2rem;
    font-weight: bold;
    color: #979797;
  }

  .slogan {
    margin-top: 0.6rem;
  }

  p {
    font-size: 14px;
    font-style: normal;
    letter-spacing: -0.28px;
    text-align: center;
    color: #979797;
  }
`;

// 로고부분
const Logo = styled.img.attrs({
  src: '/img/logo-social.png',
  alt: 'FitPet',
})`
  display: block;
  width: 7.71vw;
  height: 15.4vh;
  margin: 3.5rem auto 0 auto;
`;

export default Login;
