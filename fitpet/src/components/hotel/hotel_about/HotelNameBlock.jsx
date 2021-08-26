import React from 'react';
import styled from 'styled-components';
import { Font } from '../../../common';

const HotelNameBlock = ({ options }) => {
  return (
    <div>
      <HotelName>
        <Font
          color='theme.black1_color'
          fontSize='1.6rem'
          fontWeight='bold'
          mb='1.4rem'>
          {options.lodgingType === 'Hotel' ? '호텔' : '숙소'} |{' '}
          {options.lodgingClass}
        </Font>
        <Font color='theme.black1_color' fontSize='3.8rem' fontWeight='bold'>
          {options.lodgignName}
        </Font>
        <Font color='#979797' fontSize='1.6rem' mt='1rem' mb='1.1rem'>
          {options.lodgingEnName}
        </Font>
      </HotelName>
      <Star>
        <img src='/img/icon/bluestaricon.svg' alt='평점' />
        <Font fontSize='1.6rem' ml='0.2rem' color='#2a2a2a'>
          {options.lodgingStar}
        </Font>
      </Star>
      <PetInfo>
        <Font color='theme.black1_color' fontSize='1.4rem' mt='2rem'>
          {options.lodginSubDescription}
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
