import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MemberLinkLi = ({ showSignUp, showLogin }) => {
  return (
    <>
      <StyeldLi>
        <NavLink to='/'>
          <StyledImg src={'/img/searchImg.svg'} alt='검색' />
          <p>검색</p>
        </NavLink>
      </StyeldLi>

      <StyeldLi>
        <StyledButton onClick={showSignUp} img='/img/signInImg.svg'>
          <StyledImg src={'/img/signInImg.svg'} alt='회원가입' />
          <p>회원가입</p>
        </StyledButton>
      </StyeldLi>

      <StyeldLi>
        <StyledButton onClick={showLogin}>
          <StyledImg src={'/img/loginImg.svg'} alt='로그인' />
          <p>로그인</p>
        </StyledButton>
      </StyeldLi>

      {/* <StyeldLi>
        <NavLink to='/'>
          <StyledImg src={'/img/cartImg.svg'} alt='마이메뉴' />
          <p>마이메뉴</p>
        </NavLink>
      </StyeldLi> */}

      <StyeldLi style={{ marginRight: 0 }}>
        <NavLink to='/'>
          <StyledImg src={'/img/cartImg.svg'} alt='장바구니' />
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
  color: #707070;

  a {
    display: flex;
    align-items: center;

    &:visited {
      color: #707070;
    }
  }

  p {
    word-break: keep-all;
  }
`;

const StyledImg = styled.img`
  width: 3.4rem;
  height: 3.4rem;
  margin-right: 1rem;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  font-size: 1.4rem;
  background-color: #ffffff;
  color: #707070;
`;

export default MemberLinkLi;
