import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MainNav = () => {
  return (
    <StyledNav>
      <ListWrapper>
        <MenuLi>
          <NavLink to='/'>홈</NavLink>
        </MenuLi>
        <MenuLi>
          <NavLink to='/hotel'>숙소</NavLink>
        </MenuLi>
        <MenuLi>
          <NavLink to='/rentalcar'>렌트카</NavLink>
        </MenuLi>
        <MenuLi>
          <NavLink to='course'>코스짜기</NavLink>
        </MenuLi>
        <MenuLi>
          <NavLink to='community'>커뮤니티</NavLink>
        </MenuLi>
      </ListWrapper>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 2.8rem;
  white-space: nowrap;
`;

const ListWrapper = styled.ul`
  display: flex;
`;

const MenuLi = styled.li`
  font-size: 1.8rem;
  margin-right: 3.6rem;
  padding-bottom: 0.4rem;

  &:hover {
    border-bottom: solid 0.4rem #4765ff;
  }

  a {
    color: ${(props) => props.theme.black1_color};
    padding: 0 0.4rem;
  }
  a:visited {
    color: ${(props) => props.theme.black1_color};
  }
`;

export default MainNav;
