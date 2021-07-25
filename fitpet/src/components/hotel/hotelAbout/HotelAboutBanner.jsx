import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import useWindowScroll from '../../../hooks/useWindowScroll';
import MainNav from '../../mainpage/banner/MainNav';
import HotelDate from '../hotel_common/HotelDate';
import HotelScroll from '../hotel_common/HotelScroll';
import HotelSearch from '../hotel_common/HotelSearch';

const HotelAboutBanner = () => {
  const yOffset = useWindowScroll();
  // 객실 선택까지 고정되는 날짜 헤더
  const [isScrollDate, setIsScrollDate] = useState(true);
  // 객실 선택부터 고정되는 메뉴 헤더
  const [isScrollMenu, setIsScrollMenu] = useState(true);

  useEffect(() => {
    if (yOffset > 1000) {
      setIsScrollMenu(true);
      console.log('메뉴헤더만 나와야함');
      setIsScrollDate(false);
    } else if (yOffset > 15) {
      setIsScrollDate(true);
      setIsScrollMenu(false);

      console.log('날짜헤더만 나와야함');
    } else {
      console.log('둘다 안나와야함');
      setIsScrollDate(false);
      setIsScrollMenu(false);
    }
  }, [yOffset]);

  return (
    <>
      {isScrollDate ? (
        <Banner scroll>
          <div class='bannerDate'>
            <HotelDate isScroll={isScrollDate} />
          </div>
        </Banner>
      ) : (
        <Banner></Banner>
      )}
      {isScrollMenu ? (
        <Banner scroll>
          <div class='bannerMenu'>
            <HotelScroll isScroll={isScrollMenu} />
          </div>
        </Banner>
      ) : (
        <Banner></Banner>
      )}
    </>
  );
};

const Banner = styled.div`
  position: fixed;
  z-index: 999;
  top: 8rem;
  display: flex;
  //flex-direction: column;
  align-items: center;
  //padding-top: 2.6rem;
  background-color: #fff;
  width: 100%;

  .bannerDate {
    padding-bottom: 2.3rem;
    background-color: red;
  }
  .bannerMenu {
    margin: 0;
    // box-sizing: content-box;

    background-color: #cdcdcd;
  }
  ${(props) =>
    props.scroll &&
    css`
      padding-right: 0.2rem;
      //  padding: 1.6rem auto;
    `}
`;

export default HotelAboutBanner;
