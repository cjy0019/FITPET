import React from 'react';
import GoUpBtn from '../common/buttons/small_size/GoUpBtn';
import Footer from '../components/common/Footer';
import HotelAbout from '../components/hotel/hotel_about/HotelAbout';
import HotelAboutBanner from '../components/hotel/hotel_about/HotelAboutBanner';
import HeaderContainer from '../containers/HeaderContainer';

const HotelsAboutPage = () => {
  return (
    <div>
      <HeaderContainer />
      <HotelAboutBanner />
      <HotelAbout />
      <GoUpBtn />
      <Footer />
      {/* <RoomDetailModal />*/}
    </div>
  );
};

export default HotelsAboutPage;
