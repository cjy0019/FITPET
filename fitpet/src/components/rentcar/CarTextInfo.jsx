import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Font } from '../../common';
import {
  City,
  CityStar,
  HotelName,
  InfoContainer,
  Rect,
  Star,
} from '../hotel/hotel_common/filterCommon';

const CarTextInfo = () => {
  return (
    <InfoContainer>
      <HotelName>
        <Font fontSize='1.4rem' fontWeight='bold' mb='1.4rem'>
          준중형차
        </Font>
        <Font fontSize='1.8rem' color='#707070' fontWeight='bold'>
          THE NEW 아반떼 AD
        </Font>
      </HotelName>

      <CityStar rent>
        <Star>
          <AiFillStar size='2rem' />
          <Font fontSize='1.4rem' ml='0.73rem'>
            4.5
          </Font>
        </Star>
        <City>
          <Rect />
          <span>SK렌트카 서울역지점</span>
        </City>
      </CityStar>

      <div>
        <Font fontSize='1.4rem' color='#707070' mt='2rem'>
          최대 5인 | 딜리버리 | 휘발유(가솔린) | 후방카메라
        </Font>
      </div>
    </InfoContainer>
  );
};

export default CarTextInfo;
