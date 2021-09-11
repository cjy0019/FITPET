import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import useWindowScroll from '../../../hooks/useWindowScroll';
import MainNav from '../../mainpage/banner/MainNav';
import HotelDate from '../hotel_common/HotelDate';
import HotelSearch from '../hotel_common/HotelSearch';

const HotelBanner = () => {
  const yOffset = useWindowScroll();
  const [isScroll, setIsScroll] = useState(true);

  // 210911 by.dy
  // 스크롤 시 헤더에 붙어있는 날짜 헤더
  const [isScrollDate, setIsScrollDate] = useState(true);

  useEffect(() => {
    if (yOffset > 20) {
      setIsScroll(false);
      setIsScrollDate(true);
    } else {
      setIsScroll(true);
      setIsScrollDate(false);
    }
  }, [yOffset]);

  return (
    <>
      {isScroll ? (
        <Banner>
          <MainNav />
          <div className='bannerMain'>
            <HotelSearch isScroll={isScroll} />
          </div>
        </Banner>
      ) : (
        <Banner scroll>
          {/* 210911 by.dy 
          호버시 박스 쉐도우 스타일 적용 추가 */}
          <div className='bannerDate'>
            <HotelDate isScroll={isScrollDate} />
          </div>
        </Banner>
      )}
    </>
  );
};

const Banner = styled.div`
  position: fixed;
  z-index: 10;
  top: 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/img/hotel/hotel_list/hotelsearchbanner.png');
  .bannerMain {
    padding-bottom: 2.3rem;
  }
  .bannerDate {
    top: 8rem;
    background-color: #fff;
    width: 100%;
    height: 8rem;
    padding-right: 60rem;
    display: -webkit-box; // 오른쪽으로 붙음
    box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 0.16);
  }
`;

export default HotelBanner;
