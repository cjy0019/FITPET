import React from 'react';
import Rentalcars from '../components/mainpage/rentalcars/Rentalcars';
import Slider from '../components/mainpage/slider/Slider';
import Banner from '../components/mainpage/banner/Banner';
import Course from '../components/mainpage/course/Course';
import Header from '../components/mainpage/header/Header';
import Community from '../components/mainpage/community/Community';
const MainPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Slider />
      <Course />
      <Rentalcars />
      <Community />
    </div>
  );
};

export default MainPage;
