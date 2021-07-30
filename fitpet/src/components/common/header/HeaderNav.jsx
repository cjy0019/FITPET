import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import useWindowScroll from '../../../hooks/useWindowScroll';

const HeaderNav = () => {
  const yOffset = useWindowScroll();
  const _nav = useRef(null);

  useEffect(() => {
    function headerChange() {
      if (yOffset > 35) {
        _nav.current.style = 'opacity : 1; pointer-events : all;';
      } else _nav.current.style = 'opacity : 0; pointer-events : none;';
    }
    headerChange();
  }, [yOffset]);

  return (
    <StyledNav ref={_nav}>
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
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  transform: translateY(0.5rem);
  min-height: 3;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: 0.1s;
`;

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
    color: black;
    padding: 0 0.4rem;
    height: 2.8rem;
    display: table-cell;
    vertical-align: middle;
  }
  a:visited {
    color: black;
  }
`;

export default HeaderNav;
