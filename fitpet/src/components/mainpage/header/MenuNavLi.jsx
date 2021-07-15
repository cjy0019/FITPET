import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MenuNavLi = ({ children, to }) => {
  return (
    <StyledLi>
      <NavLink to={to}>{children}</NavLink>
    </StyledLi>
  );
};

const StyledLi = styled.li`
  margin-right: 4rem;
  padding-bottom: 0.4rem;

  a {
    text-decoration: none;
    color: #707070;
  }
  a:hover {
    border-bottom: solid 0.4rem #979797;
  }
`;

export default MenuNavLi;
