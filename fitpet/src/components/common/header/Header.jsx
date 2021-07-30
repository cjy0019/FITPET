import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import MemberLinkUl from './MemberLinkUl';
import { A11yHidden } from '../../../common/accessibility/Hidden';
import HeaderNav from './HeaderNav';
import LoginModal from '../../login/LoginModal';

const Header = () => {
  const [visible, setVisible] = useState(false);
  const showLogin = useCallback(() => setVisible(true), []);
  const hideLogin = useCallback(() => setVisible(false), []);

  useEffect(() => {
    if (visible) {
      document.body.style.cssText = `
      position:fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;
    `;
    }

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(window.scrollY, parseInt(scrollY || '0', 10) * -1);
    };
  }, [visible]);

  return (
    <>
      {visible && <LoginModal hideLogin={hideLogin} />}
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
          <MemberLinkUl showLogin={showLogin} />
        </nav>
      </MainHeader>
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
  src: '/img/mainlogo.svg',
  alt: '핏펫 홈',
})`
  width: 18.6rem;
  height: 5.2rem;
`;

export default Header;
