import React from 'react';
import { Font } from '../../../common';
import styled from 'styled-components';
import SliderLocation from './SliderLocation';
import SliderOnly from './SliderOnly';

const Sliders = () => {
  return (
    <SliderBlock>
      <TextBlock>
        <Font color='#2A2A2A' fontSize='4.2rem' fontWeight='bold'>
          어디로 갈까요?
        </Font>
      </TextBlock>
      {/* 어디로 갈까요? 슬라이드 부분 */}
      <LocationBlock>
        <SliderLocation />
      </LocationBlock>
      <TextBlock>
        <Font
          color='#2A2A2A'
          fontSize='4.2rem'
          fontWeight='bold'
          margin='12rem auto 0'>
          오직 핏펫에서만
        </Font>
      </TextBlock>
      {/* 오직 핏펫에서만 슬라이드 부분 */}
      <OnlyFitpetBlock>
        <SliderOnly />
      </OnlyFitpetBlock>
    </SliderBlock>
  );
};

export default Sliders;

const SliderBlock = styled.div`
  padding: 12rem 0;
`;
const TextBlock = styled.div`
  margin: 1.6rem auto 0;
  width: 128rem;
`;
const LocationBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.6rem auto 0;
  width: 128rem;
  height: 40rem;
`;

const OnlyFitpetBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.6rem auto 0;
  width: 128rem;
  height: 40rem;
`;
