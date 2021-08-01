import React from 'react';
import GoUpBtn from '../common/buttons/small_size/GoUpBtn';
import Footer from '../components/common/Footer';
import Header from '../components/common/header/Header';
import RentalcarMain from '../components/rentalcar/rentalcar_main/RantalcarMain';
const RentalcarMainPage = () => {
  return (
    <>
      <Header />
      {/* <HeaderNav /> */}
      <RentalcarMain />
      <GoUpBtn />
      <Footer />
    </>
  );
};

export default RentalcarMainPage;
