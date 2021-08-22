import React from 'react';
import GoUpBtn from '../common/buttons/small_size/GoUpBtn';
import Footer from '../components/common/Footer';
import CourseNav from '../components/course/course_common/CourseNav';
import CourseMain from '../components/course/course_main/CourseMain';
import HeaderContainer from '../containers/HeaderContainer';

const CourseMainPage = () => {
  return (
    <>
      <HeaderContainer />
      <CourseNav />
      <CourseMain />
      <GoUpBtn />
      <Footer />
    </>
  );
};

export default CourseMainPage;
