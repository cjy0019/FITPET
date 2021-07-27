import React from 'react';
import styled from 'styled-components';
import MemberLinkLi from './MemberLinkLi';

const MemberLinkUl = ({ show }) => {
  return (
    <MemberWrapper>
      <MemberLinkLi show={show} />
    </MemberWrapper>
  );
};

const MemberWrapper = styled.ul`
  display: flex;
`;

export default MemberLinkUl;
