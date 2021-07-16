import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MemberLinkLi = ({ text, img }) => {
  return (
    <StyeldLi>
      <NavLink to='/'>
        <StyledImg src={img} alt={text} />
        <p>{text}</p>
      </NavLink>
    </StyeldLi>
  );
};

const StyeldLi = styled.li`
  display: flex;
  margin-right: 2.6rem;
  font-size: 1.4rem;
  color: #707070;

  a {
    display: flex;
    align-items: center;

    &:visited {
      color: #707070;
    }
  }
`;

const StyledImg = styled.img`
  width: 3.4rem;
  height: 3.4rem;
  margin-right: 1rem;
`;

export default MemberLinkLi;
