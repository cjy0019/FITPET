import React from 'react';
import styled from 'styled-components';

const WishSmall = (props) => {
  const { margin, handleClick, picture } = props;
  const url = 'http://211.219.114.239:61010/public' + picture;

  const styles = {
    margin: margin,
  };
  return (
    <WishBox {...styles} onClick={handleClick}>
      <StyledImg src={url} alt='123' />
      <WishBtn />
    </WishBox>
  );
};

export default WishSmall;

const WishBox = styled.div`
  position: relative;
  width: 29rem;
  height: 29rem;
  border-radius: 25px;
  cursor: pointer;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => (props.margin ? `margin:${props.margin};` : 'margin:0')}
`;
const WishBtn = styled.button`
  position: absolute;
  right: 1rem;
  top: 1.2rem;
  width: 4rem;
  height: 4rem;
  background-color: #cbcbcb;
  border: none;
  border-radius: 50px;
`;

const StyledImg = styled.img`
  width: 29rem;
  width: 29rem;
`;
