import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Font } from '../../../common';
import {
  City,
  CityStar,
  HotelName,
  InfoContainer,
  Rect,
  Star,
} from '../hotel_common/filterCommon';

const HotelTextInfo = () => {
  return (
    <InfoContainer>
      <HotelName>
        <Font fontSize='1.4rem' fontWeight='bold' mb='1.4rem'>
          호텔 | 5성급
        </Font>
        <Font fontSize='1.8rem' color='#707070' fontWeight='bold'>
          롯데호텔 제주
        </Font>
        <Font fontSize='1.4rem' mt='1rem' mb='1.1rem'>
          Lotte Hotel JEJU
        </Font>
      </HotelName>

      <CityStar>
        <Star>
          <AiFillStar size='2rem' />
          <Font fontSize='1.4rem' ml='0.73rem'>
            4.5
          </Font>
        </Star>
        <City>
          <Rect />
          <span>서귀포시</span>
        </City>
      </CityStar>

      <div>
        <Font fontSize='1.4rem' color='#707070' mt='2rem'>
          소형견 | 중형견 | 애견동반
        </Font>
      </div>
    </InfoContainer>
  );
};

export default HotelTextInfo;
