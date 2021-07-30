import React from 'react';
import styled from 'styled-components';
import LoginBottom from './LoginBottom';
import LoginHeader from './LoginHeader';
import Slogan from './Slogan';

const Login = ({ hideLogin }) => {
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <LoginHeader hideLogin={hideLogin} />
          {/* 로고 */}
          <Logo />

          {/* 슬로건 */}
          <Slogan />

          {/* 팝업에서 아래쪽 부분 */}
          <LoginBottom />
        </div>
      </StyledForm>
    </>
  );

  // form 기본동작 방지
  function handleSubmit(e) {
    e.preventDefault();
  }
};

// style
// login wrapper

const StyledForm = styled.form`
  display: block;
  width: 52.4rem;
  padding: 5rem 3.9rem 4.7rem;
  border-radius: 30px;
  border: 1px solid black;
  background-color: #fff;

  a:visited {
    color: #979797;
  }
`;

// 로고부분
const Logo = styled.img.attrs({
  src: '/img/loginLogo.svg',
  alt: 'FitPet',
})`
  display: block;
  width: 14.8rem;
  height: 16.6rem;
  margin: 3.5rem auto 0;
`;

export default Login;
