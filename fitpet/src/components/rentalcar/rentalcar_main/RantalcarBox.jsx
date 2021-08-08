import React from 'react';
import styled from 'styled-components';

const RantalcarBox = (props) => {
  const { margin, handleClick } = props;
  const { img, text1, text2, backgroundColor } = props;

  const styles = {
    margin: margin,
  };

  return (
    <RentalcarBoxWrapper {...styles} backgroundColor='#eaea'>
      <p className='title'>{text1}</p>
      <p className='content'>{text2}</p>
      <ContentImg img={img}></ContentImg>
    </RentalcarBoxWrapper>
  );
};
const RentalcarBoxWrapper = styled.div`
  width: 40rem;
  height: 25.1rem;
  border-radius: 15px;
  margin: 0 4rem 0 0;
  color: ${(props) => props.theme.black1_color};
  background-color: ${(props) => props.backgroundColor};

  //background: red;
  font-size: 1.8rem;
  font-weight: normal;
`;
const ContentImg = styled.img`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid red;
`;
export default RantalcarBox;
