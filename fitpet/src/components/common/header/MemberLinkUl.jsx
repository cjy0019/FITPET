import React from 'react';
import styled from 'styled-components';
import MemberLinkLi from './MemberLinkLi';

const MemberLinkUl = ({ showLogin }) => {
  return (
    <MemberWrapper>
      <MemberLinkLi showLogin={showLogin} />
    </MemberWrapper>
  );
};

const MemberWrapper = styled.ul`
  display: flex;
`;

export default MemberLinkUl;
