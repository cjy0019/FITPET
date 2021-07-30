import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MemberLinkLi = ({ showSignUp, showLogin }) => {
  const img = '/img/logo-social.png';

  return (
    <>
      <StyeldLi>
        <NavLink to='/'>
          <StyledImg src={img} alt='검색' />
          <p>검색</p>
        </NavLink>
      </StyeldLi>
      <StyeldLi>
        <StyledImg src={img} alt='회원가입' />
        <StyledButton onClick={showSignUp}>
          <p>회원가입</p>
        </StyledButton>
      </StyeldLi>
      <StyeldLi>
        <StyledImg src={img} alt='로그인' />
        <StyledButton onClick={showLogin}>
          <p>로그인</p>
        </StyledButton>
      </StyeldLi>
      <StyeldLi>
        <NavLink to='/'>
          <StyledImg src={img} alt='마이메뉴' />
          <p>마이메뉴</p>
        </NavLink>
      </StyeldLi>
      <StyeldLi style={{ marginRight: 0 }}>
        <NavLink to='/'>
          <StyledImg src={img} alt='장바구니' />
          <p>장바구니</p>
        </NavLink>
      </StyeldLi>
    </>
  );
};

const StyeldLi = styled.li`
  display: flex;
  margin-right: 2.6rem;
  font-size: 1.4rem;

  a {
    display: flex;
    align-items: center;

    &:visited {
      color: ${(props) => props.theme.black1_color};
    }
  }

  p {
    color: ${(props) => props.theme.black1_color};
    word-break: keep-all;
  }
`;

const StyledImg = styled.img`
  width: 3.4rem;
  height: 3.4rem;
  margin-right: 1rem;
`;

const StyledButton = styled.button`
  border: none;
  font-size: 1.4rem;
  background-color: #ffffff;
  color: #707070;
`;

export default MemberLinkLi;
