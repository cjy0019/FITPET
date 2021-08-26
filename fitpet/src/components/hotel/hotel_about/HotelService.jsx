import React from 'react';
import styled from 'styled-components';
import { Font } from '../../../common';

const HotelService = ({ options }) => {
  return (
    <HotelServiceWrapper>
      <ServiceBox>
        <img src='/img/icon/smallPet.png' alt='소형견' />
        <Font fontSize='1.2rem' fontWeight='normal' color='#2a2a2a' mt='0.6rem'>
          소형견
        </Font>
      </ServiceBox>
      <ServiceBox>
        <img src='/img/icon/mediumPet.png' alt='중형견' />
        <Font fontSize='1.2rem' fontWeight='normal' color='#2a2a2a' mt='0.6rem'>
          중형견
        </Font>
      </ServiceBox>
      <ServiceBox>
        <img src='/img/icon/withPet.png' alt='반려동물 동반' />
        <Font fontSize='1.2rem' fontWeight='normal' color='#2a2a2a' mt='0.6rem'>
          반려동물 <br />
          동반
        </Font>
      </ServiceBox>
      <ServiceBox>
        <img src='/img/icon/stadium.png' alt='반려동물 운동장' />
        <Font fontSize='1.2rem' fontWeight='normal' color='#2a2a2a' mt='0.6rem'>
          반려동물
          <br />
          운동장
        </Font>
      </ServiceBox>
      <ServiceBox>
        <img src='/img/icon/petPool.png' alt='반려동물 수영장' />
        <Font fontSize='1.2rem' fontWeight='normal' color='#2a2a2a' mt='0.6rem'>
          반려동물
          <br />
          수영장
        </Font>
      </ServiceBox>
      <ServiceBox>
        <img src='/img/icon/wifi.png' alt='와이파이' />
        <Font fontSize='1.2rem' fontWeight='normal' color='#2a2a2a' mt='0.6rem'>
          와이파이
        </Font>
      </ServiceBox>
      <ServiceBox>
        <img src='/img/icon/fitness.png' alt='피트니스 센터' />
        <Font fontSize='1.2rem' fontWeight='normal' color='#2a2a2a' mt='0.6rem'>
          피트니스
          <br />
          센터
        </Font>
      </ServiceBox>
      <ServiceBox>
        <img src='/img/icon/pool.png' alt='수영장' />
        <Font fontSize='1.2rem' fontWeight='normal' color='#2a2a2a' mt='0.6rem'>
          수영장
        </Font>
      </ServiceBox>
      <ServiceBox>
        <img src='/img/icon/freeParking.png' alt='무료주차' />
        <Font fontSize='1.2rem' fontWeight='normal' color='#2a2a2a' mt='0.6rem'>
          무료주차
        </Font>
      </ServiceBox>
      <ServiceBox>
        <img src='/img/icon/reception.png' alt='24시 리셉션' />
        <Font fontSize='1.2rem' fontWeight='normal' color='#2a2a2a' mt='0.6rem'>
          24시
          <br />
          리셉션
        </Font>
      </ServiceBox>
    </HotelServiceWrapper>
  );
};

const HotelServiceWrapper = styled.div`
  display: flex;
  width: 128rem;
  margin: 0 auto;
  border-bottom: 1px solid #979797;
`;
const ServiceBox = styled.div`
  line-height: 1.16;
  height: 16.4rem;
  display: block;
  padding: 4rem 0 4rem 0;
  text-align: center;
  margin-right: 1.6rem;
`;

export default HotelService;
