import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MenuNavLi = ({ children, to }) => {
  return (
    <StyledLi>
      <NavLink
        to={to}
        style={{ color: '#707070' }}
        activeStyle={{ color: '#707070' }}>
        {children}
      </NavLink>
    </StyledLi>
  );
};

const StyledLi = styled.li`
  margin-right: 4rem;
`;

export default MenuNavLi;
