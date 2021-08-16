import React from 'react';
import styled from 'styled-components';
import LoginBottom from './LoginBottom';

const Login = ({ hideLogin, login }) => {
  return (
    <>
      <Overlay>
        <div className='center'>
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
        </div>
      </Overlay>
    </>
  );
  function handleSubmit(e) {
    e.preventDefault();
  }
};

// 로그인 상단
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.black1_color};
`;

const StyledX = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 3.4rem;
  height: 3.4rem;
  object-fit: contain;
  background-image: url('/img/auth/closebutton.svg');
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

// style
// login wrapper

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999999999;
  background-color: rgba(0, 0, 0, 0.7);

  .center {
    position: absolute;
    top: 50vh;
    left: 50%;
    transform: translate(-50%, -50%);
  }
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

// 로고부분
const Logo = styled.img.attrs({
  src: '/img/header/loginLogo.svg',
  alt: 'FitPet',
})`
  display: block;
  width: 14.8rem;
  height: 16.6rem;
  margin: 3.5rem auto 0;
`;

// 슬로건
const StyledSlogan = styled.p`
  margin-top: 0.6rem;
  font-size: 1.4rem;
  font-style: normal;
  letter-spacing: -0.28px;
  text-align: center;
  line-height: 1.43;
  color: ${(props) => props.theme.black1_color};
`;

export default Login;
