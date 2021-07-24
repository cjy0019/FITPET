import React from 'react';
import GoUpBtn from '../common/buttons/small-size/GoUpBtn';
import Footer from '../components/common/Footer';
import HotelsAbout from '../components/hotel/HotelsAbout';
import RoomDetailModal from '../components/hotel/popup/RoomDetailModal';

const HotelsAboutPage = () => {
  return (
    <div>
      <HotelsAbout />
      <GoUpBtn />
      <Footer />
      {/* <RoomDetailModal />*/}
    </div>
  );
};

export default HotelsAboutPage;
