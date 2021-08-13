import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { StyeldLi, StyledButton, StyledImg } from './MemberLinkUl';

const MemberLinkLoginUl = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      menuRef.current.style =
        'height : 35rem; backgroundColor:white; opacity:1';
    } else {
      menuRef.current.style = 'height : 0; visibility:hidden; opacity:0;';
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
          <UserIcon>
            <img src='/img/header/usericon.svg' alt='userid' />
          </UserIcon>
          <p>김혜진</p>
        </UserId>
        <LinkWrapper>
          <Link to='/'>포인트</Link>
          <Link to='/'>쿠폰</Link>
          <Link to='/'>위시리스트</Link>
          <Link to='/'>내가 Fit한 코스</Link>
          <Link to='/'>예약내역</Link>
        </LinkWrapper>
        <Logout>로그아웃</Logout>
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
  top: -0.4rem;
  left: 2.4rem;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 100%;
  font-size: 1.2rem;
  padding: 0.4rem;
  text-align: center;
  border: solid 1px #fff;
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
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.16s;
`;

const UserId = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 2rem 0 2rem 2rem;
  border-bottom: solid 1px #eee;
`;

const UserIcon = styled.div`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
`;

const LinkWrapper = styled.div`
  padding: 1.95rem 0 1.95rem 1.9rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  a {
    &:visited {
      color: ${(props) => props.theme.black1_color};
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
`;

export default MemberLinkLoginUl;
