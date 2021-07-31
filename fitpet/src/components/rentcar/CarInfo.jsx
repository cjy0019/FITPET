import React from 'react';
import SmallLine from '../../common/utility/SmallLine';
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
      <SmallLine />
    </>
  );
};

export default CarInfo;
