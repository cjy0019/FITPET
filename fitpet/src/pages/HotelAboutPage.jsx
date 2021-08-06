import React from 'react';
import GoUpBtn from '../common/buttons/small_size/GoUpBtn';
import Footer from '../components/common/Footer';
import Header from '../components/common/header/Header';
import HotelAbout from '../components/hotel/hotel_about/HotelAbout';
import HotelAboutBanner from '../components/hotel/hotel_about/HotelAboutBanner';

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
