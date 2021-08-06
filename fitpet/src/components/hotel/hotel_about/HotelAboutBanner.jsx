import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import useWindowScroll from '../../../hooks/useWindowScroll';
import HotelDate from '../hotel_common/HotelDate';
import HotelMenu from '../hotel_common/HotelMenu';

const HotelAboutBanner = () => {
  const yOffset = useWindowScroll();
  // 객실 선택까지 고정되는 날짜 헤더
  const [isScrollDate, setIsScrollDate] = useState(true);
  // 객실 선택부터 고정되는 메뉴 헤더
  const [isScrollMenu, setIsScrollMenu] = useState(true);

  useEffect(() => {
    if (yOffset > 1000) {
      console.log('메뉴헤더만 나와야함');
      setIsScrollMenu(true);
      setIsScrollDate(false);
    } else if (yOffset > 100) {
      console.log('날짜헤더만 나와야함');
      setIsScrollDate(true);
      setIsScrollMenu(false);
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
            <HotelMenu isScroll={isScrollMenu} />
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
  //display: flex;
  //flex-direction: column;
  //align-items: center;
  //padding-top: 2.6rem;
  background-color: #fff;
  width: 100%;
  .bannerDate {
    height: 8rem;
    padding-bottom: 1.6rem;
    padding-top: 1.6rem;
    padding-right: 60rem;
    display: -webkit-box; // 오른쪽으로 붙음
    box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 0.16);
  }
  .bannerMenu {
    height: 8rem;
    padding-bottom: 3.1rem;
    padding-top: 3.1rem;
    padding-left: 32rem;
    box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 0.16);
  }
  ${(props) =>
    props.scroll &&
    css`
      //padding-right: 0.2rem;
      //  padding: 1.6rem auto;
    `}
`;

export default HotelAboutBanner;
