import React from 'react';
import styled from 'styled-components';
import MemberLinkLi from './MemberLinkLi';

const MemberLinkLoginUl = ({ showLogin, showSignUp }) => {
  return (
    <MemberWrapper>
      <MemberLinkLi showLogin={showLogin} showSignUp={showSignUp} />
    </MemberWrapper>
  );
};

const MemberWrapper = styled.ul`
  display: flex;
`;

export default MemberLinkLoginUl;
