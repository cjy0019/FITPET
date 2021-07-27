import React from 'react';
import GoUpBtn from '../common/buttons/small_size/GoUpBtn';
import Footer from '../components/common/Footer';
import HotelAbout from '../components/hotel/hotelAbout/HotelAbout';
import HotelAboutBanner from '../components/hotel/hotelAbout/HotelAboutBanner';
import Header from '../components/mainpage/header/Header';

const HotelsAboutPage = () => {
  return (
    <div>
      <Header />
      <HotelAboutBanner />
      <HotelAbout />
      <GoUpBtn />
      <Footer />
      {/* <RoomDetailModal />*/}
    </div>
  );
};

export default HotelsAboutPage;
