import React from 'react';
import styled from 'styled-components';
import { Font } from '../../../common';
import {
  City,
  CityStar,
  HotelName,
  InfoContainer,
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
          <StarIcon src='/img/hotel/hotel_list/staricon.svg' />
          <Font fontSize='1.4rem' ml='0.2rem'>
            4.5
          </Font>
        </Star>
        <City>
          <SmallIcon src='/img/hotel/hotel_list/smalllocationicon.svg' />
          <span style={{ marginLeft: '0.4rem' }}>서귀포시</span>
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

const StarIcon = styled.img``;

const SmallIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

export default HotelTextInfo;
