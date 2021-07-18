import React from 'react';
import Rentalcars from '../components/mainpage/rentalcars/Rentalcars';
import Sliders from '../components/mainpage/slider/Sliders';
import Banner from '../components/mainpage/banner/Banner';
import Course from '../components/mainpage/course/Course';
import Header from '../components/mainpage/header/Header';
const MainPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Sliders />
      <Course />
      <Rentalcars />
    </div>
  );
};

export default MainPage;
