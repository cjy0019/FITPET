import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Font } from '../../../common';
import HotelSlider from './HotelSlider';

const HotelListBlock = () => {
  const [handleState, setHandleState] = useState(1);
  const locationTab = (index) => {
    setHandleState(index);
  };
  return (
    <HotelListWrapper>
      <div className='hotelListBox'>
        <div className='locationBox'>
          <HotelLocationWrapper>
            <Font fontSize='3rem' fontWeight='normal' color='#ffffff' mb='5rem'>
              반려동물과 함께 <br />
              펫캉스 즐기자!
            </Font>
            <div className='tagBox'>
              <div className='tagBtnBlock'>
                <Link
                  index='1'
                  to='accomodations?region=jeju'
                  onClick={() => locationTab(1)}
                  className={handleState === 1 ? 'active tagBtn' : 'tagBtn'}>
                  제주도
                </Link>
              </div>
              <div className='tagBtnBlock'>
                <Link
                  index='2'
                  to='accomodations?region=sokcho'
                  onClick={() => locationTab(2)}
                  className={handleState === 2 ? 'active tagBtn' : 'tagBtn'}>
                  속초
                </Link>
              </div>
              <div className='tagBtnBlock'>
                <Link
                  index='3'
                  to='accomodations?region=jeonju'
                  onClick={() => locationTab(3)}
                  className={handleState === 3 ? 'active tagBtn' : 'tagBtn'}>
                  전주
                </Link>
              </div>
              <div className='tagBtnBlock'>
                <Link
                  index='4'
                  to='accomodations?region=busan'
                  onClick={() => locationTab(4)}
                  className={handleState === 4 ? 'active tagBtn' : 'tagBtn'}>
                  부산
                </Link>
              </div>
            </div>
          </HotelLocationWrapper>
        </div>
        {/* 호텔 슬라이드 부분 */}
        <HotelSlider />
      </div>
    </HotelListWrapper>
  );
};
const HotelListWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.grey3_color};
  height: 55.6rem;
  .hotelListBox {
    display: flex;
    width: 128rem;
    height: 55.6rem;
    .locationBox {
      margin-top: 10rem;
      position: absolute;
    }
  }
`;
const HotelLocationWrapper = styled.div`
  width: 44rem;
  height: 57.2rem;
  color: ${(props) => props.theme.white_color};
  padding: 5rem;
  position: absolute;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/img/hotel/hotel_main/locationBox.png');
  line-height: 1.3; // 줄 간격
  .tagBox {
    display: block;
    .tagBtn {
      border-radius: 26px;
      color: ${(props) => props.theme.grey1_color};
      font-size: 1.6rem;
      font-weight: normal;
      padding: 1.1rem 1.9rem 1rem 1.9rem;
      border-radius: 2.6rem;
      background-color: ${(props) => props.theme.grey4_color};
      &:active,
      &:focus {
        background-color: ${(props) => props.theme.main_color};
        color: ${(props) => props.theme.white_color};
      }
      &:hover {
        color: ${(props) => props.theme.main_color};
        background-color: ${(props) => props.theme.main2_color};
      }
    }
    .active {
      background-color: ${(props) => props.theme.main_color};
      color: ${(props) => props.theme.white_color};
    }
    .tagBtnBlock {
      display: flex;
      margin-bottom: 1rem;
    }
  }
`;
export default HotelListBlock;
