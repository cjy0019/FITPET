import React from 'react';
import styled from 'styled-components';
import { Font } from '../../common';
import { AiFillStar } from 'react-icons/ai';

const HotelNameBlock = () => {
  return (
    <div>
      <HotelName>
        <Font fontSize='1.6rem' fontWeight='bold' mb='1.4rem'>
          호텔 | 5성급
        </Font>
        <Font fontSize='3.8rem' color='#707070' fontWeight='bold'>
          롯데호텔 제주
        </Font>
        <Font fontSize='1.6rem' color='#979797' mt='1rem' mb='1.1rem'>
          Lotte Hotel JEJU
        </Font>
      </HotelName>
      <Star>
        <AiFillStar size='2rem' color='#979797' />
        <Font fontSize='1.6rem' color='#979797' ml='0.73rem'>
          4.5
        </Font>
      </Star>
      <PetInfo>
        <Font fontSize='1.4rem' color='#707070' mt='2rem'>
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
