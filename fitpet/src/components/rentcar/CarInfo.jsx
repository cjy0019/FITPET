import React from 'react';
import {
  ImgBox,
  Info,
  LikeBtn,
  TextDetailWrapper,
} from '../hotel/hotel_common/filterCommon';
import RentDetails from '../rentcar/RentDetails';
import CarTextInfo from './CarTextInfo';

const CarInfo = () => {
  return (
    <>
      <Info>
        {/* 이미지 부분 */}
        <ImgBox>
          <LikeBtn />
        </ImgBox>

        {/* 텍스트 Info */}
        <TextDetailWrapper>
          <CarTextInfo />
          <RentDetails />
        </TextDetailWrapper>
      </Info>
    </>
  );
};

export default CarInfo;
