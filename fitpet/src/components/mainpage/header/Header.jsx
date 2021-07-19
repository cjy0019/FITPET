import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import MemberLinkUl from './MemberLinkUl';
import { A11yHidden } from '../../../common/accessibility/Hidden';
import HeaderNav from './HeaderNav';

const Header = () => {
  return (
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
        <MemberLinkUl />
      </nav>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  display: grid;
  grid-template-columns: 1.17fr repeat(2, 1fr);
  position: fixed;
  width: 100%;
  height: 8rem;
  top: 0;
  padding: 2.6rem 6rem 2.6rem 6rem;
  background-color: darkgoldenrod;
  z-index: 999;
`;

const FitPetLogo = styled.img.attrs({
  src: '/img/logo-social.png',
  alt: '핏펫 홈',
})`
  width: 11rem;
  height: 2.9rem;
`;

export default Header;
