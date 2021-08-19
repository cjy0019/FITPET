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
      setIsScrollDate(false);
      setIsScrollMenu(true);
    } else if (yOffset > 100) {
      setIsScrollDate(true);
      setIsScrollMenu(false);
    } else {
      setIsScrollDate(false);
      setIsScrollMenu(false);
    }
  }, [yOffset]);

  return (
    <>
      {isScrollDate ? (
        <Banner scroll>
          <div className='bannerDate'>
            <HotelDate isScroll={isScrollDate} />
          </div>
        </Banner>
      ) : (
        <Banner></Banner>
      )}
      {isScrollMenu ? (
        <Banner scroll>
          <div className='bannerMenu'>
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
    padding-left: 32rem;
    box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 0.16);
  }
  ${(props) =>
    props.scroll &&
    css`
      margin-top: 0;
    `}
`;

export default HotelAboutBanner;
