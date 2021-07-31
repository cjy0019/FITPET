import React from 'react';
import styled from 'styled-components';
import { Font, IconButton } from '../../../common';

const HotelLocationBlock = () => {
  return (
    <HotelLocationWrapper>
      <Font fontSize='3rem' fontWeight='normal' color='#ffffff' mb='5rem'>
        반려동물과 함께 <br />
        펫캉스 즐기자!
      </Font>
      <div className='tagBox'>
        <IconButton
          text='제주도'
          backColor='#eeeeee'
          color='#979797'
          pt='1.1rem'
          pr='1.9rem'
          pl='1.9rem'
          pb='1rem'
          fontSize='1.6rem'
          borderRadius='2.6rem'
          textHover='#ffffff'
          hoverColor='#2A2A2A'
          border='none'
          mb='1rem'
        />
        <IconButton
          text='속초'
          backColor='#eeeeee'
          color='#979797'
          pt='1.1rem'
          pr='1.9rem'
          pl='1.9rem'
          pb='1rem'
          fontSize='1.6rem'
          borderRadius='2.6rem'
          textHover='#ffffff'
          hoverColor='#2A2A2A'
          border='none'
          mb='1rem'
        />
        <IconButton
          text='전주'
          backColor='#eeeeee'
          color='#979797'
          pt='1.1rem'
          pr='1.9rem'
          pl='1.9rem'
          pb='1rem'
          fontSize='1.6rem'
          borderRadius='2.6rem'
          textHover='#ffffff'
          hoverColor='#2A2A2A'
          border='none'
          mb='1rem'
        />
        <IconButton
          text='부산'
          backColor='#eeeeee'
          color='#979797'
          pt='1.1rem'
          pr='1.9rem'
          pl='1.9rem'
          pb='1rem'
          fontSize='1.6rem'
          borderRadius='2.6rem'
          textHover='#ffffff'
          hoverColor='#2A2A2A'
          border='none'
          mb='1rem'
        />
      </div>
    </HotelLocationWrapper>
  );
};

const HotelLocationWrapper = styled.div`
  width: 44rem;
  height: 57.2rem;
  color: #fff;
  padding: 5rem 0 0 5rem;
  position: absolute;
  display: block;
  background-color: ${(props) => props.theme.grey2_color};
  line-height: 1.3; // 줄 간격
`;
export default HotelLocationBlock;
