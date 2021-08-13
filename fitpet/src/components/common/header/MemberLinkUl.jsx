import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MemberLinkUl = ({ showLogin, showSignUp }) => {
  return (
    <MemberWrapper>
      <StyeldLi>
        <NavLink to='/'>
          <StyledImg src={'/img/header/searchImg.svg'} alt='검색' />
          <p>검색</p>
        </NavLink>
      </StyeldLi>

      <StyeldLi>
        <StyledButton onClick={showSignUp}>
          <StyledImg src={'/img/header/signInImg.svg'} alt='회원가입' />
          <p>회원가입</p>
        </StyledButton>
      </StyeldLi>

      <StyeldLi>
        <StyledButton onClick={showLogin}>
          <StyledImg src={'/img/header/loginImg.svg'} alt='로그인' />
          <p>로그인</p>
        </StyledButton>
      </StyeldLi>

      <StyeldLi style={{ marginRight: 0 }}>
        <NavLink to='/'>
          <StyledImg src={'/img/header/cartImg.svg'} alt='장바구니' />
          <p>장바구니</p>
        </NavLink>
      </StyeldLi>
    </MemberWrapper>
  );
};

const MemberWrapper = styled.ul`
  display: flex;
`;

export const StyeldLi = styled.li`
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

export const StyledImg = styled.img`
  width: 3.4rem;
  height: 3.4rem;
  margin-right: 1rem;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  font-size: 1.4rem;
  background-color: ${(props) => props.theme.white_color};
`;

export default MemberLinkUl;
