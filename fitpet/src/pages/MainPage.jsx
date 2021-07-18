import React from 'react';
import Rentalcars from '../components/mainpage/rentalcars/Rentalcars';
import Slider from '../components/mainpage/slider/Slider';
import Banner from '../components/mainpage/banner/Banner';
import Course from '../components/mainpage/course/Course';
import Header from '../components/mainpage/header/Header';
import Community from '../components/mainpage/community/Community';
import GoUpBtn from '../common/buttons/small-size/GoUpBtn';
import styled from 'styled-components';
const MainPage = () => {
  return (
    <MainWrapper>
      <Header />
      <Banner />
      <Slider />
      <Course />
      <Rentalcars />
      <Community />
      <GoUpBtn />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  margin-bottom: 20rem;
`;

export default MainPage;
