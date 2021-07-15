import React from 'react';
import styled from 'styled-components';

const MenuCart = ({ text }) => {
  return (
    <Container>
      <CartImg></CartImg>
      <Text>{text}</Text>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2.1rem;
  margin-right: 3.6rem;
`;

const CartImg = styled.img.attrs({
  src: '/img/logo-social.png',
  alt: '마이메뉴',
})`
  font-size: 0;
  width: 3.4rem;
  height: 3.4rem;
`;

const Text = styled.p`
  margin-top: 0.6rem;
`;

export default MenuCart;
