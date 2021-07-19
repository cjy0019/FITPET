import React from 'react';
import styled from 'styled-components';
import MemberLinkLi from './MemberLinkLi';

const MemberLinkUl = () => {
  return (
    <MemberWrapper>
      <MemberLinkLi />
    </MemberWrapper>
  );
};

const MemberWrapper = styled.ul`
  display: flex;
`;

export default MemberLinkUl;
