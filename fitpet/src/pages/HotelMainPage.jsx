import React from 'react';
import GoUpBtn from '../common/buttons/small_size/GoUpBtn';
import Footer from '../components/common/Footer';
import HeaderContainer from '../containers/HeaderContainer';
import HotelMainContainer from '../containers/HotelMainContainer';

const HotelMainPage = () => {
  return (
    <>
      <HeaderContainer />
      <HotelMainContainer />
      <GoUpBtn />
      <Footer />
    </>
  );
};

export default HotelMainPage;
