import React from 'react';
import HotelTextInfo from './HotelTextInfo';
import HotelDetails from './HotelDetails';
import {
  ImgBox,
  Info,
  LikeBtn,
  TextDetailWrapper,
} from '../hotel_common/filterCommon';

const HotelInfo = ({ hotel }) => {
  return (
    <>
      <Info>
        {/* 이미지 부분 */}
        <ImgBox>
          <LikeBtn />
          <img src='/img/icon/leftbutton.svg' alt='왼쪽사진 더보기 버튼' />
          <img src='/img/icon/rightbutton.svg' alt='오른쪽사진 더보기 버튼' />
        </ImgBox>

        {/* 텍스트 Info */}
        <TextDetailWrapper>
          <HotelTextInfo hiddenPrice hotel={hotel} />
          <HotelDetails hotel={hotel} />
        </TextDetailWrapper>
      </Info>
    </>
  );
};

export default HotelInfo;
