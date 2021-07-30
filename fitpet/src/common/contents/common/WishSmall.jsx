import React from 'react';
import styled from 'styled-components';

const WishSmall = (props) => {
  const { margin, handleClick } = props;

  const styles = {
    margin: margin,
  };
  return (
    <WishBox {...styles} onClick={handleClick}>
      <WishBtn />
      {/* <WishBlock>
      </WishBlock> */}
    </WishBox>
  );
};

export default WishSmall;

const WishBox = styled.div`
  width: 29rem;
  height: 29rem;
  background-color: ${(props) => props.theme.grey5_color};
  border-radius: 25px;
  cursor: pointer;

  /* &:hover {
    margin-top: -1rem;
  } */
  ${(props) => (props.margin ? `margin:${props.margin};` : 'margin:0')}
`;
const WishBtn = styled.button`
  margin: 2.8rem 2.8rem 21.4rem 21.4rem;
  width: 4.8rem;
  height: 4.8rem;
  background-color: #cbcbcb;
  border: none;
  border-radius: 50px;
`;
