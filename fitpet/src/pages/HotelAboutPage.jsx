import React from 'react';
import GoUpBtn from '../common/buttons/small_size/GoUpBtn';
import Footer from '../components/common/Footer';
import HotelAboutBanner from '../components/hotel/hotel_about/HotelAboutBanner';
import HeaderContainer from '../containers/HeaderContainer';
import HotelAboutContainer from '../containers/HotelAboutContainer';

// 숙소 상세보기 컴포넌트 입니다.
// 숙소 리스트에서 불러온 id 값으로 숙소 상세정보를 세팅합니다.
const HotelsAboutPage = (props) => {
  const hotelId = props.match.params.hotelId;
  return (
    <div>
      <HeaderContainer />
      <HotelAboutBanner />
      <HotelAboutContainer hotelId={hotelId} />
      <GoUpBtn />
      <Footer />
      {/* <RoomDetailModal />*/}
    </div>
  );
};

export default HotelsAboutPage;
