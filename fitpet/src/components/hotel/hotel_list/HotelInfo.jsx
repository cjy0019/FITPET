import React from 'react';
import styled from 'styled-components';
import HotelTextInfo from './HotelTextInfo';
import HotelDetails from './HotelDetails';
import SmallLine from '../../../common/utility/SmallLine';
import { LeftButton, RightButton } from '../hotel_common/filterCommon';

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

const Info = styled.div`
  padding: 4rem 0;
  display: flex;
`;

const ImgBox = styled.div`
  position: relative;
  min-width: 22rem;
  height: 22rem;
  border-radius: 18px;
  background-color: #979797;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LikeBtn = styled.div`
  position: absolute;
  top: 1.8rem;
  right: 1.8rem;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background-color: #cbcbcb;
`;

const TextDetailWrapper = styled.div`
  width: 100%;

  /* clearfix */
  &:after {
    display: block;
    content: '';
    clear: both;
  }
`;
export default HotelInfo;
