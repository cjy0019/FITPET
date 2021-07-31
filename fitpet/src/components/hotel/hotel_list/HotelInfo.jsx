import React from 'react';
import styled from 'styled-components';
import HotelTextInfo from './HotelTextInfo';
import HotelDetails from './HotelDetails';
import SmallLine from '../../../common/utility/SmallLine';
import {
  ImgBox,
  Info,
  LeftButton,
  LikeBtn,
  RightButton,
  TextDetailWrapper,
} from '../hotel_common/filterCommon';

const HotelInfo = () => {
  return (
    <>
      <Info>
        {/* 이미지 부분 */}
        <ImgBox>
          <LikeBtn />
          <LeftButton />
          <RightButton />
        </ImgBox>

        {/* 텍스트 Info */}
        <TextDetailWrapper>
          <HotelTextInfo />
          <HotelDetails />
        </TextDetailWrapper>
      </Info>
      <SmallLine />
    </>
  );
};

export default HotelInfo;
