import React from 'react';
import {
  Font,
  Only,
  SliderLeftButton,
  SliderRightButton,
  Tag,
} from '../../../common';
import styled from 'styled-components';

const Slider = () => {
  return (
    <SliderBlock>
      {/* 어디로 갈까요? 슬라이드 부분 */}
      <Font color='#707070' fontSize='4.2rem' fontWeight='bold'>
        어디로 갈까요?
      </Font>
      <LocationBlock>
        <LocationWrapper>
          <SliderLeftButton />
          <Tag margin='0 4rem 0 0'></Tag>
          <Tag margin='0 4rem 0 0'></Tag>
          <Tag margin='0 4rem 0 0'></Tag>
          <Tag></Tag>
          <SliderRightButton />
        </LocationWrapper>
      </LocationBlock>
      {/* 오직 핏펫에서만 슬라이드 부분 */}
      <Font
        color='#707070'
        fontSize='4.2rem'
        fontWeight='bold'
        margin='12rem auto 0'>
        오직 핏펫에서만
      </Font>
      <OnlyFitpetBlock>
        <OnlyFitpetWrapper>
          <Only margin='0 4rem 0 0'></Only>
          <Only margin='0 4rem 0 0'></Only>
          <Only margin='0 4rem 0 0'></Only>
        </OnlyFitpetWrapper>
      </OnlyFitpetBlock>
    </SliderBlock>
  );
};

export default Slider;

const SliderBlock = styled.div`
  display: flow-root;
  margin: 0 32rem;
  padding: 12rem 0;
`;
const LocationBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.6rem auto 0;
`;
const LocationWrapper = styled.div`
  height: 40rem;
  display: flex;
  justify-content: center;
  z-index: 0;
`;
const OnlyFitpetBlock = styled.div`
  display: flex;

  justify-content: center;
`;
const OnlyFitpetWrapper = styled.div`
  justify-content: center;
  margin-top: 1.6rem;
  height: 40rem;
  display: flex;
`;
