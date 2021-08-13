import React from 'react';
import styled, { css } from 'styled-components';

const ImageBox = (props) => {
  const { margin, handleClick, height, img } = props;

  const styles = {
    margin: margin,
    height: height,
    img: img,
  };
  return (
    <ImageBoxBlock {...styles} onClick={handleClick} img={img}>
      <TextBox>
        올 여름은 <br />
        애견수영장에서 시원하게
      </TextBox>
    </ImageBoxBlock>
  );
};

const ImageBoxBlock = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 30px;
  margin: 0 4rem 6rem 0;
  color: ${(props) => props.theme.black1_color};
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.img});
  font-size: 1.8rem;
  font-weight: normal;
  width: 40rem;
  ${(props) => (props.height ? `height:${props.height};` : 'height:40rem')}
`;

const TextBox = styled.div`
  font-size: 3rem;
  color: ${(props) => props.theme.white_color};
  line-height: 1.4;
  font-weight: normal;
  bottom: 0;
  position: absolute;
  margin: 0 0 4.2rem 3.1rem;
`;

export default ImageBox;
