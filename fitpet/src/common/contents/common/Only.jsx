import React from 'react';
import styled from 'styled-components';

const Only = (props) => {
  const { margin, handleClick } = props;
  const { img, text1, text2 } = props;

  const styles = {
    margin: margin,
  };
  return (
    <OnlyBox {...styles} onClick={handleClick} img={img}>
      <OnlyBlock>
        <Text>
          <p>{text1}</p>
          <p>{text2}</p>
        </Text>
      </OnlyBlock>
    </OnlyBox>
  );
};

export default Only;

const OnlyBox = styled.div`
  width: 40rem;
  height: 40rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.img});
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    margin-top: -1rem;
  }
  ${(props) => (props.margin ? `margin:${props.margin};` : 'margin:0')}
`;
const OnlyBlock = styled.div`
  display: inline-block;
  margin: 28.6rem 3.8rem 3.6rem 3.8rem;
  color: #fff;
`;
const Text = styled.div`
  height: 7.8rem;
  font-size: 3rem;
  line-height: 1.2; // 줄 간격
`;
