import React from 'react';
import styled from 'styled-components';
import MemberLink from './MemberLink';
import MenuCart from './MenuCart';
import MenuNav from './MenuNav';
import Search from './Search';

const Header = () => {
  return (
    <MainHeader>
      <MemberLink />

      <CartMymenuFlex>
        {/* 로고 + 검색창 */}
        <Search />
        {/* 마이메뉴 장바구니 버튼 */}
        <CartWrapper>
          <MenuCart text='마이메뉴' />
          <MenuCart text='장바구니' />
        </CartWrapper>
      </CartMymenuFlex>

      <MenuNav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  background-color: antiquewhite;
  width: 132rem;
  margin: 0 auto;
`;

const CartWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CartMymenuFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Header;
