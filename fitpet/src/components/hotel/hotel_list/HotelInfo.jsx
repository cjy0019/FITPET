import React from 'react';
import HotelTextInfo from './HotelTextInfo';
import HotelDetails from './HotelDetails';
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
    </>
  );
};

export default HotelInfo;
