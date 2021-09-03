import React from 'react';
import HotelTextInfo from './HotelTextInfo';
import HotelDetails from './HotelDetails';
import {
  ImgBox,
  Info,
  LikeBtn,
  TextDetailWrapper,
} from '../hotel_common/filterCommon';
import styled, { css } from 'styled-components';
const IMG_API = 'http://211.219.114.239:61010/public';

const HotelInfo = ({ hotel }) => {
  const IMG_URL = IMG_API + hotel.lodgingImg;
  return (
    <>
      <Info>
        {/* 이미지 부분 */}
        <ImgBox IMG_URL={IMG_URL}>
          <LikeBtn />
          <SlideButton>
            <img src='/img/icon/leftbutton.svg' alt='왼쪽사진 더보기 버튼' />
          </SlideButton>
          <SlideButton right>
            <img src='/img/icon/rightbutton.svg' alt='오른쪽사진 더보기 버튼' />
          </SlideButton>
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

const SlideButton = styled.button`
  position: absolute;
  top: 45%;
  background: none;

  ${(props) =>
    props.right &&
    css`
      right: 0;
    `}
`;

export default HotelInfo;
