import React from 'react';
import GoUpBtn from '../common/buttons/small_size/GoUpBtn';
import Footer from '../components/common/Footer';
import Header from '../components/common/header/Header';
import HotelAbout from '../components/hotel/hotelAbout/HotelAbout';
import HotelAboutBanner from '../components/hotel/hotelAbout/HotelAboutBanner';

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
