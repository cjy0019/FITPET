import React from 'react';
import { Font, Tag } from '../../../common';
import styled from 'styled-components';

const Slider = () => {
  return (
    <SliderBlock>
      {/* 어디로 갈까요? 슬라이드 부분 */}
      <LocationBlock>
        <Font color='#707070'>어디로 갈까요?</Font>
        <LocationWrapper>
          <Tag margin='0 4rem 0 0'></Tag>
          <Tag margin='0 4rem 0 0'></Tag>
          <Tag margin='0 4rem 0 0'></Tag>
          <Tag></Tag>
        </LocationWrapper>
      </LocationBlock>
      {/* 오직 핏펫에서만 슬라이드 부분 */}
      <OnlyFitpetBlock>
        <Font color='#707070'>오직 핏펫에서만</Font>
        <OnlyFitpetWrapper>슬라이드 상자</OnlyFitpetWrapper>
      </OnlyFitpetBlock>
    </SliderBlock>
  );
};

export default Slider;

const SliderBlock = styled.div`
  display: flow-root;
  margin: 0 32rem;
  width: 132rem;
  height: 129.2rem;
  background-color: aliceblue;
`;
const LocationBlock = styled.div`
  margin: 12rem 2rem;
`;

const LocationWrapper = styled.div`
  margin-top: 1.6rem;
  height: 40rem;
  display: flex;
`;
const OnlyFitpetBlock = styled.div`
  margin: 12rem 2rem;
`;
const OnlyFitpetWrapper = styled.div`
  margin-top: 1.6rem;
  height: 40rem;
  background-color: #5396d1;
`;
