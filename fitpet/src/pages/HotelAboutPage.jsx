import React from 'react';
import GoUpBtn from '../common/buttons/small_size/GoUpBtn';
import Footer from '../components/common/Footer';
import HotelAboutBanner from '../components/hotel/hotel_about/HotelAboutBanner';
import HeaderContainer from '../containers/HeaderContainer';
import HotelAboutContainer from '../containers/HotelAboutContainer';

const HotelsAboutPage = () => {
  return (
    <div>
      <HeaderContainer />
      <HotelAboutBanner />
      <HotelAboutContainer />
      <GoUpBtn />
      <Footer />
      {/* <RoomDetailModal />*/}
    </div>
  );
};

export default HotelsAboutPage;
