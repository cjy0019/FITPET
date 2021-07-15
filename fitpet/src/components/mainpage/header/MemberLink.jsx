import React from 'react';
import styled from 'styled-components';
import MemberLinkLi from './MemberLinkLi';

const MemberLink = () => {
  return (
    <MemberWrapper>
      <MemberUl>
        <MemberLinkLi divide to='/login'>
          로그인
        </MemberLinkLi>
        <MemberLinkLi divide to='/signup'>
          회원가입
        </MemberLinkLi>
        <MemberLinkLi to='/'>고객센터</MemberLinkLi>
      </MemberUl>
    </MemberWrapper>
  );
};

const MemberWrapper = styled.div`
  width: 100%;
  background-color: aliceblue;

  &::after {
    content: '';
    display: block;
    clear: both;
  }
`;

const MemberUl = styled.ul`
  float: right;
  font-size: 1.4rem;
  margin-top: 4.2rem;

  &::after {
    content: '';
    display: block;
    clear: both;
  }
`;

export default MemberLink;
