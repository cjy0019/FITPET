import React from 'react';
import styled from 'styled-components';
import MemberLinkLi from './MemberLinkLi';

const MemberLinkUl = () => {
  const img = '/img/logo-social.png';

  return (
    <MemberWrapper>
      <MemberLinkLi img={img} text='검색' />
      <MemberLinkLi img={img} text='회원가입' />
      <MemberLinkLi img={img} text='로그인' />
      <MemberLinkLi img={img} text='마이메뉴' />
      <MemberLinkLi img={img} text='장바구니' />
    </MemberWrapper>
  );
};

const MemberWrapper = styled.ul`
  display: flex;
`;

export default MemberLinkUl;
