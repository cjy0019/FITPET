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

const CarTextInfo = ({ car }) => {
  return (
    <InfoContainer>
      <HotelName>
        <Font fontSize='1.4rem' fontWeight='bold' mb='1.4rem'>
          {car.carType}
        </Font>
        <Font fontSize='1.8rem' color='#707070' fontWeight='bold'>
          {car.carName}
        </Font>
      </HotelName>

      <CityStar rent>
        <Star>
          <AiFillStar size='2rem' />
          <Font fontSize='1.4rem' ml='0.73rem'>
            {car.romStar}
          </Font>
        </Star>
        <City>
          <Rect />
          <span>{car.rentLocation}</span>
        </City>
      </CityStar>

      <div>
        <Font fontSize='1.4rem' color='#707070' mt='2rem'>
          최대 {car.maximumPeople}인 |{' '}
          {car.options.deliveryCheck ? '딜리버리' : '직접 픽업'} |{' '}
          {car.options.fuelType} |{' '}
          {car.options.RearCamera ? '후방카메라' : '후방카메라 없음'}
        </Font>
      </div>
    </InfoContainer>
  );
};

export default CarTextInfo;
