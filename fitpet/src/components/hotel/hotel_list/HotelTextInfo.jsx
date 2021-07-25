import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import styled from 'styled-components';
import { Font } from '../../../common';

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

const InfoContainer = styled.div`
  color: #979797;
  margin-left: 2.6rem;
  transform: translateY(5%);
`;

const HotelName = styled.div`
  display: column;
`;

const Star = styled.div`
  display: inline-block;
  display: flex;
  text-align: center;
  align-items: center;
`;

const City = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.6rem;
`;

const Rect = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  background-color: #979797;
  margin-right: 0.4rem;
  display: inline-block;
`;

const CityStar = styled.div`
  display: flex;
`;

export default HotelTextInfo;
