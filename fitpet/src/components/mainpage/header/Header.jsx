import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import MemberLinkUl from './MemberLinkUl';

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

      {/* 멤버 링크 부분 */}
      <nav>
        <MemberLinkUl />
      </nav>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2.6rem 3.4rem 2.6rem 6rem;
  background-color: beige;
`;

// 웹 접근성을 위한 a11y-hidden style
const A11yHidden = styled.span`
  overflow: hidden;
  position: absolute;
  clip: rect(0 0 0 0); /* IE 6,7 */
  clip: rect(0, 0, 0, 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  &:focus {
    overflow: visible;
    position: static;
    clip: auto;
    width: auto;
    height: auto;
    margin: 0;
  }
`;

const FitPetLogo = styled.img.attrs({
  src: '/img/logo-social.png',
  alt: '핏펫 홈',
})`
  width: 11rem;
  height: 2.9rem;
`;

export default Header;
