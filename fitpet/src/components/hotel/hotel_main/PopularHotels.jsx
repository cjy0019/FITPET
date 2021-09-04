import { Skeleton } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { Font } from '../../../common';
import { LikeBtn } from '../hotel_common/filterCommon';

// 210905 by.dy
// '지금 이 숙소가 인기있어요' 컴포넌트 분리
const PopularHotels = ({ hitsList, isLoading }) => {
  // 210904 API 주소 변경.
  const IMG_API = 'http://211.219.114.239:61010/public';

  // 210905 by.dy
  // 로딩 스피너 제거 & 스켈레톤 UI 적용
  const list = Array.from({ length: 8 }, (x) => x);

  return (
    <PopularHotelsWrapper>
      <TextBlock>
        <Font color='#2A2A2A' fontSize='4.2rem' fontWeight='bold' mb='2.6rem'>
          지금 이 숙소가 인기있어요
        </Font>
      </TextBlock>
      <div className='popularHotelsBox'>
        {isLoading &&
          list.map((v, i) => {
            return (
              <PopularHotel key={i} style={{ marginBottom: '7rem' }}>
                <div className='imgBox'>
                  <Skeleton.Image style={{ width: '29rem', height: '29rem' }} />
                </div>
                <Skeleton active={true} paragraph={{ rows: 2 }} />
              </PopularHotel>
            );
          })}
      </div>
      <div className='popularHotelsBox'>
        {hitsList.map((hotel, i) => {
          return (
            <PopularHotel key={i}>
              <div className='imgBox'>
                <img src={IMG_API + hotel.lodgingImg} alt={hotel.lodgingImg} />
                <LikeBtn />
              </div>
              <Font
                color='#2A2A2A'
                fontSize='1.8rem'
                margin='1.4rem 0 3.8rem 2.3rem'>
                <span className='smallFont'>
                  {hotel.lodgingTypeKr}| {hotel.lodgingClass}
                </span>
                <span>
                  <br />
                  {hotel.lodgignName}
                  <br />
                  {hotel.lodgingMinMoney.toLocaleString()}
                </span>
                <span className='smallPrice'>
                  ~ {hotel.lodgingMaxMoney.toLocaleString()}
                </span>
              </Font>
            </PopularHotel>
          );
        })}
      </div>
    </PopularHotelsWrapper>
  );
};

const PopularHotelsWrapper = styled.div`
  margin: 0 auto;
  width: 128rem;
  display: block;
  margin-bottom: 12rem;
  .popularHotelsBox {
    display: flex;
    flex-wrap: wrap;
    li {
      :not(:nth-child(4n)) {
        margin-right: 4rem;
      }
    }
  }
`;
const TextBlock = styled.div`
  margin: 0 auto;
`;
const PopularHotel = styled.li`
  position: relative;
  .smallFont {
    font-size: 1.4rem;
    font-weight: 600;
  }
  .imgBox {
    img {
      width: 29rem;
      height: 29rem;
      border-radius: 25px;
    }
    cursor: pointer;
  }
  span {
    font-weight: bold;
  }
  p {
    line-height: 25px;
  }
  .smallPrice {
    margin-left: 1rem;
    font-size: 1.8rem;
    font-weight: normal;
  }
`;
export default PopularHotels;
