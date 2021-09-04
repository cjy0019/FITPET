import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MainNav = () => {
  const hotelLink = useRef(null);
  const homeLink = useRef(null);
  const rentalcarLink = useRef(null);
  const courseLink = useRef(null);
  const location = useSelector((state) => state.router.location.pathname);
  useEffect(() => {
    if (location === '/') {
      homeLink.current.style = 'border-bottom: solid 0.4rem #4765ff;';
    } else if (location === '/accomodations' || location === '/hotellist') {
      hotelLink.current.style = 'border-bottom: solid 0.4rem #4765ff;';
    } else if (location === '/rentalcar') {
      rentalcarLink.current.style = 'border-bottom: solid 0.4rem #4765ff;';
    } else if (location === '/course') {
      courseLink.current.style = 'border-bottom: solid 0.4rem #4765ff;';
    }
  }, [location]);

  return (
    <StyledNav>
      <ListWrapper>
        <MenuLi ref={homeLink}>
          <NavLink to='/'>홈</NavLink>
        </MenuLi>
        <MenuLi ref={hotelLink}>
          <NavLink to='/accomodations'>숙소</NavLink>
        </MenuLi>
        <MenuLi ref={rentalcarLink}>
          <NavLink to='/rentcar'>렌트카</NavLink>
        </MenuLi>
        <MenuLi ref={courseLink}>
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
  white-space: nowrap;
  margin-top: 2.6rem;
  align-items: center;
`;

const ListWrapper = styled.ul`
  display: flex;
`;

const MenuLi = styled.li`
  font-size: 1.8rem;
  margin-right: 3.6rem;
  padding-bottom: 0.4rem;
  border-bottom: solid 0.4rem transparent;
  color: ${(props) => props.theme.white_color};

  a {
    padding: 0 0.4rem;
    color: ${(props) => props.theme.white_color};
  }
  a:visited {
    color: ${(props) => props.theme.white_color};
  }
`;

export default MainNav;
