import React from 'react';
import Banner from '../components/mainpage/banner/Banner';
import Course from '../components/mainpage/course/Course';
import Header from '../components/mainpage/header/Header';

const MainPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Course />
    </div>
  );
};

export default MainPage;
