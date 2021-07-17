import React from 'react';
import styled from 'styled-components';

const WishSmall = (props) => {
  const { margin, _onClick } = props;

  const styles = {
    margin: margin,
  };
  return (
    <WishBox {...styles} onClick={_onClick}>
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
  background-color: #979797;
  border-radius: 25px;
  /* &:hover {
    margin-top: -1rem;
  } */
  ${(props) => (props.margin ? `margin:${props.margin};` : 'margin:0px')}
`;
// const WishBlock = styled.div`
//   margin: 28.6rem 3.8rem 3.6rem 3.8rem;
//   color: #fff;
// `;
const WishBtn = styled.button`
  margin: 28px 28px 214px 214px;
  width: 48px;
  height: 48px;
  background-color: #cbcbcb;
  border: none;
  border-radius: 50px;
`;
