import React from 'react';
import {
  ImgBox,
  Info,
  LikeBtn,
  TextDetailWrapper,
} from '../../hotel/hotel_common/filterCommon';
import RentDetails from '../rentcar/RentDetails';
import CarTextInfo from './CarTextInfo';
const IMG_API = 'http://211.219.114.239:61010/public';

const CarInfo = (props) => {
  const {
    carType,
    carName,
    minPrice,
    picture,
    romStar,
    rentLocation,
    maximumPeople,
    deliveryCheck,
    fuelType,
    RearCamera,
  } = props;
  const IMG_URL = IMG_API + picture;
  return (
    <>
      <Info>
        {/* 이미지 부분 */}
        <ImgBox IMG_URL={IMG_URL}>
          <LikeBtn />
        </ImgBox>

        {/* 텍스트 Info */}
        <TextDetailWrapper>
          <CarTextInfo
            carType={carType}
            carName={carName}
            romStar={romStar}
            rentLocation={rentLocation}
            maximumPeople={maximumPeople}
            deliveryCheck={deliveryCheck}
            fuelType={fuelType}
            RearCamera={RearCamera}
          />
          <RentDetails
            carType={carType}
            minPrice={minPrice}
            picture={picture}
          />
        </TextDetailWrapper>
      </Info>
    </>
  );
};

export default CarInfo;
