import React, { useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { A11yHidden } from '../../../common/accessibility/Hidden';
import HeaderNav from './HeaderNav';
import Modal from '../../modal/Modal';
import SignupContainer from '../../../containers/SignupContainer';
import SignupSuccessContainer from '../../../containers/SignupSuccessContainer';
import LoginContainer from '../../../containers/LoginContainer';
import MemberLinkLoginUl from './MemberLinkLoginUl';
import MemberLinkUl from './MemberLinkUl';

const Header = ({
  token,
  logOut,
  showLogin,
  hideLogin,
  loginOpen,
  showSignUp,
  hideSignUp,
  signupOpen,
  signupSuccessOpen,
  showSignupSuccess,
  hideSignupSuccess,
  signupStatus,
}) => {
  return (
    <>
      <MainHeader>
        {/* 로고 부분 */}
        <h1>
          <NavLink to='/'>
            <A11yHidden>핏펫 홈</A11yHidden>
            <FitPetLogo />
          </NavLink>
        </h1>

        {/* 네브 */}
        <HeaderNav />

        {/* 멤버 링크 부분 */}
        <nav>
          {token ? (
            <MemberLinkLoginUl logOut={logOut} />
          ) : (
            <MemberLinkUl showLogin={showLogin} showSignUp={showSignUp} />
          )}
        </nav>
      </MainHeader>
      {/* 로그인 모달 */}
      {loginOpen ? (
        <Modal>
          <LoginContainer hideLogin={hideLogin} />
        </Modal>
      ) : null}

      {/* 회원가입 모달 */}
      {signupOpen ? (
        <Modal>
          <SignupContainer
            hideSignUp={hideSignUp}
            showSignupSuccess={showSignupSuccess}
          />
        </Modal>
      ) : null}

      {/* 회원가입 성공 모달 */}
      {signupSuccessOpen ? (
        <Modal>
          <SignupSuccessContainer showLogin={showLogin} />
        </Modal>
      ) : null}
    </>
  );
};

const MainHeader = styled.header`
  display: grid;
  align-items: center;
  background-color: #ffffff;
  grid-template-columns: 1.15fr 1.15fr 0.3fr;
  position: fixed;
  width: 100%;
  min-height: 10rem;
  top: 0;
  padding: 0rem 6rem 0rem 6rem;
  z-index: 30;
`;

const FitPetLogo = styled.img.attrs({
  src: '/img/header/mainlogo.svg',
  alt: '핏펫 홈',
})`
  width: 18.6rem;
  height: 5.2rem;
`;

export default Header;
