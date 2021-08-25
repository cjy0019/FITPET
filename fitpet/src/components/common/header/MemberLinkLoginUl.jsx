import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { StyeldLi, StyledButton, StyledImg } from './MemberLinkUl';

const MemberLinkLoginUl = ({ logOut }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const userName = useSelector((state) => state.login.userName);

  useEffect(() => {
    if (isOpen) {
      menuRef.current.style = 'opacity:1; visibility:visible; height:auto;';
    } else {
      menuRef.current.style = 'height:0; visibility:hidden; opacity:0;';
    }
  }, [isOpen]);

  return (
    <>
      <MemberWrapper>
        <StyeldLi>
          <NavLink to='/'>
            <StyledImg src={'/img/header/searchImg.svg'} alt='검색' />
            <p>검색</p>
          </NavLink>
        </StyeldLi>

        <StyeldLi onClick={openMenu}>
          <StyledButton>
            <StyledImg src={'/img/header/mymenu.svg'} alt='마이메뉴' />
            <p>마이메뉴</p>
          </StyledButton>
        </StyeldLi>

        <StyeldLi style={{ marginRight: 0, position: 'relative' }}>
          <NavLink to='/'>
            <CartCircle>2</CartCircle>
            <StyledImg src={'/img/header/cartImg.svg'} alt='장바구니' />
            <p>장바구니</p>
          </NavLink>
        </StyeldLi>
      </MemberWrapper>

      <Mymenu ref={menuRef}>
        <UserId>
          <img src='/img/header/usericon.svg' alt='userid' />
          <div>{userName === 'undefined' ? '고객' : userName} 님</div>
        </UserId>
        <LinkWrapper>
          <Link to='/'>포인트</Link>
          <Link to='/'>쿠폰</Link>
          <Link to='/'>위시리스트</Link>
          <Link to='/'>내가 Fit한 코스</Link>
          <Link to='/'>예약내역</Link>
        </LinkWrapper>
        <Logout onClick={logOut}>로그아웃</Logout>
      </Mymenu>
    </>
  );
  function openMenu() {
    setIsOpen(!isOpen);
  }
};

const MemberWrapper = styled.ul`
  display: flex;
  position: relative;
`;

const CartCircle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -0.4rem;
  left: 2.4rem;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 50px;
  font-size: 1.2rem;
  padding-bottom: 0.2rem;
  text-align: center;
  color: ${(props) => props.theme.white_color};
  background-color: ${(props) => props.theme.main_color};
`;

const Mymenu = styled.div`
  position: absolute;
  right: 10rem;
  top: 8.5rem;
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  color: ${(props) => props.theme.black1_color};
  background-color: ${(props) => props.theme.white_color};
  width: 17.4rem;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px ${(props) => props.theme.main_color};
`;

const UserId = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 2rem 2rem 2rem 2rem;
  border-bottom: solid 1px #eee;

  img {
    width: 3.6rem;
    height: 3.6rem;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;

  a {
    padding-left: 1.9rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    &:visited {
      color: ${(props) => props.theme.black1_color};
    }
    &:hover {
      background-color: ${(props) => props.theme.grey3_color};
    }
  }
`;

const Logout = styled.button`
  border: none;
  cursor: pointer;
  padding: 2rem 0 2rem 2rem;
  font-size: 1.6rem;
  text-align: left;
  background-color: transparent;
  border-top: solid 1px #eee;

  &:hover {
    background-color: ${(props) => props.theme.grey3_color};
  }
`;

export default MemberLinkLoginUl;
