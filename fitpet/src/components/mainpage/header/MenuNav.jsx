import React from 'react';
import styled from 'styled-components';
import MenuNavLi from './MenuNavLi';

const MenuNav = () => {
  return (
    <StyledNav>
      <StyledUl>
        <MenuNavLi to='/'>홈</MenuNavLi>
        <MenuNavLi to='/accomodation'>숙소</MenuNavLi>
        <MenuNavLi to='/rentcars'>렌트카</MenuNavLi>
        <MenuNavLi to='/course'>코스짜기</MenuNavLi>
        <MenuNavLi to='/community'>커뮤니티</MenuNavLi>
      </StyledUl>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: aliceblue;
  margin-top: 4.3rem;
`;

const StyledUl = styled.ul`
  display: flex;
  font-size: 1.8rem;
`;

export default MenuNav;
