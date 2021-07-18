import React from 'react';
import styled from 'styled-components';
import { BsChevronLeft } from 'react-icons/bs';

const SliderLeftButton = (props) => {
  const { handleClick } = props;
  return (
    <CircleBtn onClick={handleClick}>
      <BsChevronLeft size='2rem' color='#707070' />
    </CircleBtn>
  );
};

export default SliderLeftButton;

const CircleBtn = styled.button`
  display: block;
  width: 4.8rem;
  height: 4.8rem;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  border: none;
  border-radius: 50px;
`;
