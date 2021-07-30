import React from 'react';
import GoUpBtn from '../common/buttons/small_size/GoUpBtn';
import Footer from '../components/common/Footer';
import HotelMain from '../components/hotel/hotel_main/HotelMain';
import Header from '../components/mainpage/header/Header';
import HeaderNav from '../components/mainpage/header/HeaderNav';

const HotelMainPage = () => {
  return (
    <div>
      <Header />
      {/* <HeaderNav /> */}
      <HotelMain />
      <GoUpBtn />
      <Footer />
      {/* <RoomDetailModal />*/}
    </div>
  );
};

export default HotelMainPage;
