import React from 'react';
import styled from 'styled-components';
import LoginBottom from './LoginBottom';

const Login = ({ hideLogin, login }) => {
  return (
    <>
      <StyledCenter>
        <StyledForm onSubmit={handleSubmit}>
          <div>
            <StyledDiv>
              <h1>로그인</h1>
              <StyledX onClick={hideLogin} />
            </StyledDiv>
            {/* 로고 */}
            <Logo />

            {/* 슬로건 */}
            <StyledSlogan>
              반려동물과 함께하는 맞춤 힐링여행!
              <br /> 핏펫에 오신걸 환영합니다&#58;&#41;
            </StyledSlogan>

            {/* 팝업에서 아래쪽 부분 */}
            <LoginBottom login={login} />
          </div>
        </StyledForm>
      </StyledCenter>
    </>
  );
  function handleSubmit(e) {
    e.preventDefault();
  }
};
// 로그인 상단
const StyledCenter = styled.div`
  position: absolute;
  top: 50vh;
  left: 50%;
  border-radius: 30px;
  box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.6);
  transform: translate(-50%, -50%);
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2.2rem;
  letter-spacing: 0.5px;
  font-weight: 600;
  color: ${(props) => props.theme.black1_color};
`;

const StyledX = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 3.2rem;
  height: 3.2rem;
  background-size: cover;
  background-image: url('/img/auth/closebutton.svg');
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

// 로고부분
const Logo = styled.img.attrs({
  src: '/img/header/loginLogo.svg',
  alt: 'FitPet',
})`
  display: block;
  width: 14.4rem;
  height: 16rem;
  margin: 1.5rem auto 0;
`;

const StyledForm = styled.form`
  display: block;
  width: 52.4rem;
  padding: 5rem 3.9rem 4.7rem;
  border-radius: 30px;
  border: 1px solid black;
  background-color: ${(props) => props.theme.white_color};

  a:visited {
    color: ${(props) => props.theme.grey2_color};
  }
`;

// 슬로건
const StyledSlogan = styled.p`
  margin-top: 1.2rem;
  font-size: 1.4rem;
  font-style: normal;
  letter-spacing: -0.28px;
  text-align: center;
  line-height: 1.43;
  color: ${(props) => props.theme.black1_color};
`;

export default Login;
