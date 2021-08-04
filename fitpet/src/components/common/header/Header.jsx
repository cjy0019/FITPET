import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import MemberLinkUl from './MemberLinkUl';

import { A11yHidden } from '../../../common/accessibility/Hidden';
import HeaderNav from './HeaderNav';
import Login from '../../login/Login';
import SignUp from '../../signUp/SignUp';
import Modal from '../../modal/Modal';

const Header = ({
  showLogin,
  hideLogin,
  loginOpen,
  showSignUp,
  hideSignUp,
  signupOpen,
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
          <MemberLinkUl showLogin={showLogin} showSignUp={showSignUp} />
        </nav>
      </MainHeader>
      {/* 로그인 모달 */}
      {loginOpen ? (
        <Modal>
          <Login hideLogin={hideLogin} />
        </Modal>
      ) : null}

      {/* 회원가입 모달 */}
      {signupOpen ? (
        <Modal>
          <SignUp hideSignUp={hideSignUp} />
        </Modal>
      ) : null}
    </>
  );
};

const MainHeader = styled.header`
  display: grid;
  align-items: center;
  background-color: #ffffff;
  grid-template-columns: 1.17fr 1.15fr 0.7fr;
  position: fixed;
  width: 100%;
  height: 8rem;
  top: 0;
  padding: 0rem 6rem 0rem 6rem;
  z-index: 10;
`;

const FitPetLogo = styled.img.attrs({
  src: '/img/header/mainlogo.svg',
  alt: '핏펫 홈',
})`
  width: 18.6rem;
  height: 5.2rem;
`;

export default Header;
