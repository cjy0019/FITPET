import React from 'react';
import styled, { css } from 'styled-components';
import { Font } from '../../../common';
import {
  City,
  CityStar,
  HotelName,
  InfoContainer,
  Star,
} from '../hotel_common/filterCommon';

const HotelTextInfo = ({ hotel }) => {
  return (
    <InfoContainer>
      <HotelName>
        <Text mb='1.2rem'>
          {hotel.lodgingType === 'Hotel' ? '호텔' : '숙소'} |{' '}
          {hotel.lodgingClass}
        </Text>
        <Text mb='0.6rem' maintext>
          {hotel.lodgingName}
        </Text>
        <Font color='#979797' fontSize='1.4rem' mb='1rem'>
          {hotel.lodgingEnName}
        </Font>
      </HotelName>

      <CityStar>
        <Star>
          <img src='/img/icon/bluestaricon.svg' alt='평점' />
          <Font fontSize='1.4rem' ml='0.2rem' color='#2a2a2a'>
            {hotel.lodgingStar}
          </Font>
        </Star>
        <City>
          <img src='/img/icon/bluelocationicon.svg' alt='위치' />
          <span style={{ marginLeft: '0.4rem' }}>{hotel.lodgingLocation}</span>
        </City>
      </CityStar>

      <div>
        <Text mt='1rem' normal>
          {hotel.lodginSubDescription}
        </Text>
      </div>
    </InfoContainer>
  );
};

const Text = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  color: ${(props) => props.theme.black1_color};
  margin-bottom: ${(props) => props.mb};
  margin-top: ${(props) => props.mt};

  ${(props) =>
    props.maintext &&
    css`
      font-size: 1.8rem;
      line-height: 1.33;
    `}

  ${(props) =>
    props.normal &&
    css`
      font-weight: normal;
    `}
`;
export default HotelTextInfo;
