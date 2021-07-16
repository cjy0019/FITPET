import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MainNav = () => {
  return (
    <nav>
      <ListWrapper>
        <MenuLi>
          <NavLink to='/'>홈</NavLink>
        </MenuLi>
        <MenuLi>
          <NavLink to='/accomodation'>숙소</NavLink>
        </MenuLi>
        <MenuLi>
          <NavLink to='/rentcar'>렌트카</NavLink>
        </MenuLi>
        <MenuLi>
          <NavLink to='course'>코스짜기</NavLink>
        </MenuLi>
        <MenuLi>
          <NavLink to='community'>커뮤니티</NavLink>
        </MenuLi>
      </ListWrapper>
    </nav>
  );
};
const ListWrapper = styled.ul`
  display: flex;
`;

const MenuLi = styled.li`
  font-size: 1.8rem;
  margin-right: 3.6rem;
  padding-bottom: 0.4rem;

  &:hover {
    border-bottom: solid 4px red;
  }

  a {
    color: aliceblue;
    padding: 0 0.4rem;
  }
  a:visited {
    color: aliceblue;
  }
`;

export default MainNav;
