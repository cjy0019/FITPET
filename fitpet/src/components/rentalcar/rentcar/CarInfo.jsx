import React from 'react';
import {
  ImgBox,
  Info,
  LikeBtn,
  TextDetailWrapper,
} from '../../hotel/hotel_common/filterCommon';
import RentDetails from '../rentcar/RentDetails';
import CarTextInfo from './CarTextInfo';
const IMG_API = 'http://www.ongyeol.com:61010/public';

const CarInfo = ({ car }) => {
  const IMG_URL = IMG_API + car.picture;
  return (
    <>
      <Info>
        {/* 이미지 부분 */}
        <ImgBox IMG_URL={IMG_URL}>
          <LikeBtn />
        </ImgBox>

        {/* 텍스트 Info */}
        <TextDetailWrapper>
          <CarTextInfo car={car} />
          <RentDetails car={car} />
        </TextDetailWrapper>
      </Info>
    </>
  );
};

export default CarInfo;
