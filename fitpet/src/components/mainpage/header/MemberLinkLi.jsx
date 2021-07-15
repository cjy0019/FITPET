import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MemberLinkLi = ({ children, divide, to }) => {
  const activeStyle = {
    color: '#707070',
  };

  return (
    <MemberLi>
      <NavLink
        to={to}
        activeStyle={activeStyle}
        style={{ marginRight: '1.6rem', color: '#707070' }}>
        {children}
      </NavLink>

      {divide && <Divider aria-hidden='true'>ㅣ</Divider>}
    </MemberLi>
  );
};

const MemberLi = styled.li`
  float: left;
`;

const Divider = styled.span`
  margin-right: 1.6rem;
`;

export default MemberLinkLi;
