import React from 'react';
import Rentalcars from '../components/mainpage/rentalcars/Rentalcars';
import Slider from '../components/mainpage/slider/Slider';
import Banner from '../components/mainpage/banner/Banner';
import Course from '../components/mainpage/course/Course';
import Header from '../components/mainpage/header/Header';
const MainPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Slider />
      <Course />
      <Rentalcars />
    </div>
  );
};

export default MainPage;
