import React from 'react';
import GoUpBtn from '../common/buttons/small_size/GoUpBtn';
import Footer from '../components/common/Footer';
import HotelAbout from '../components/hotel/hotelAbout/HotelAbout';

const HotelsAboutPage = () => {
  return (
    <div>
      <HotelAbout />
      <GoUpBtn />
      <Footer />
      {/* <RoomDetailModal />*/}
    </div>
  );
};

export default HotelsAboutPage;
