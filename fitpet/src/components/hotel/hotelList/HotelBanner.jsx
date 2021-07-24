import React from 'react';
import styled from 'styled-components';
import MainNav from '../../mainpage/banner/MainNav';
import HotelSearch from '../hotel_common/HotelSearch';

const HotelBanner = () => {
  return (
    <Banner>
      <MainNav />
      <HotelSearch />
    </Banner>
  );
};

const Banner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.6rem;
  padding-bottom: 2.3rem;
  background-color: #cbcbcb;
`;

export default HotelBanner;
