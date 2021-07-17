import React from 'react';
import styled from 'styled-components';
import { BsChevronLeft } from 'react-icons/bs';

const SliderLeftButton = () => {
  return (
    <CircleBtn>
      <BsChevronLeft size='20px' color='#707070' />
    </CircleBtn>
  );
};

export default SliderLeftButton;

const CircleBtn = styled.button`
  display: block;
  width: 48px;
  height: 48px;

  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  border: none;
  border-radius: 50px;
`;
