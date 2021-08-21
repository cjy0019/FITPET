import React, { useEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import { Font, RoundSquareBtn } from '../../../common';
import useWindowScroll from '../../../hooks/useWindowScroll';
import MainNav from '../../mainpage/banner/MainNav';

const CourseNav = () => {
  const yOffset = useWindowScroll();
  const _nav = useRef(null);
  const _gotoCourse = useRef(null);

  useEffect(() => {
    function headerChange() {
      if (yOffset < 35) {
        _nav.current.style = 'opacity : 1; pointer-events : all;';
        _gotoCourse.current.style = 'opacity: 0;  pointer-events: none;';
      } else {
        _nav.current.style = 'opacity: 0; pointer-events: none;';
        _gotoCourse.current.style = 'opacity: 1;  pointer-events: all;';
      }
    }
    headerChange();
  }, [yOffset]);

  return (
    <>
      <CourseNavWrapper ref={_nav}>
        <MainNav />
      </CourseNavWrapper>
      <GoToCourseWrapper ref={_gotoCourse}>
        <Font
          fontSize='2rem'
          color='#2a2a2a'
          fontWeight='normal'
          lineHeigh='1.2'>
          핏펫에서 반려동물과 함께하는 나만의 맞춤 여행코스를 계획해보세요!
        </Font>
        <RoundSquareBtn course_btn>Fit한 코스 계획하기</RoundSquareBtn>
      </GoToCourseWrapper>
    </>
  );
};

const CourseNavWrapper = styled.div`
  position: fixed;
  top: 10rem;
  background-color: ${(props) => props.theme.white_color};
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-evenly;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.16);
`;
const GoToCourseWrapper = styled.div`
  white-space: nowrap;
  position: fixed;
  top: 10rem;
  background-color: ${(props) => props.theme.white_color};
  width: 100%;
  height: 8rem;
  padding: 1rem auto;
  display: flex;
  justify-content: space-evenly;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  z-index: 100;
`;

export default CourseNav;
