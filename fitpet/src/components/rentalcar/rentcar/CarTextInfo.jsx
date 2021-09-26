import React from 'react';
import { Font } from '../../../common';
import {
  City,
  CityStar,
  HotelName,
  InfoContainer,
  Star,
} from '../../hotel/hotel_common/filterCommon';

const CarTextInfo = ({
  carType,
  carName,
  rentLocation,
  romStar,
  maximumPeople,
  deliveryCheck,
  RearCamera,
  fuelType,
}) => {
  return (
    <InfoContainer>
      <HotelName>
        <Font fontSize='1.4rem' fontWeight='bold' mb='1.4rem'>
          {carType}
        </Font>
        <Font fontSize='1.8rem' color='#2a2a2a' fontWeight='bold'>
          {carName}
        </Font>
      </HotelName>

      <CityStar rent>
        <Star>
          <img src='/img/rentalcar/rentcar_list/bluestar.svg' alt='평점' />
          <Font fontSize='1.4rem'>{romStar}</Font>
        </Star>
        <City>
          <img
            src='/img/rentalcar/rentcar_list/bluelocation.svg'
            alt='픽업위치'
          />
          <span>{rentLocation}</span>
        </City>
      </CityStar>

      <div>
        <Font fontSize='1.4rem' color='#707070' mt='2rem'>
          최대 {maximumPeople}인 | {deliveryCheck ? '딜리버리' : '직접 픽업'} |{' '}
          {fuelType} | {RearCamera ? '후방카메라' : '후방카메라 없음'}
        </Font>
      </div>
    </InfoContainer>
  );
};

export default CarTextInfo;
