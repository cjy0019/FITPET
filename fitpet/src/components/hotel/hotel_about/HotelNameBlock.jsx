import React from 'react';
import styled from 'styled-components';
import { Font } from '../../../common';

const HotelNameBlock = () => {
  return (
    <div>
      <HotelName>
        <Font
          color='theme.black1_color'
          fontSize='1.6rem'
          fontWeight='bold'
          mb='1.4rem'>
          호텔 | 5성급
        </Font>
        <Font color='theme.black1_color' fontSize='3.8rem' fontWeight='bold'>
          롯데호텔 제주
        </Font>
        <Font color='#979797' fontSize='1.6rem' mt='1rem' mb='1.1rem'>
          Lotte Hotel JEJU
        </Font>
      </HotelName>
      <Star>
        <img src='/img/icon/bluestaricon.svg' alt='평점' />
        <Font fontSize='1.6rem' ml='0.2rem' color='#2a2a2a'>
          4.5
        </Font>
      </Star>
      <PetInfo>
        <Font color='theme.black1_color' fontSize='1.4rem' mt='2rem'>
          소형견 | 중형견 | 애견동반
        </Font>
      </PetInfo>
    </div>
  );
};

const HotelName = styled.div`
  display: column;
`;
const Star = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;
const PetInfo = styled.div``;

export default HotelNameBlock;
