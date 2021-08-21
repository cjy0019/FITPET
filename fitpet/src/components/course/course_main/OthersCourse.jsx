import React from 'react';
import styled from 'styled-components';
import { Font, SmallBtn } from '../../../common';
import WishCourse from './WishCourse';

const OthersCourse = () => {
  return (
    <OthersCourseWrapper>
      <Font fontSize='4.2rem' fontWeight='bold' mb='2.6rem' color='#2a2a2a'>
        다른 사람들의 Fit한 코스
      </Font>
      <div className='tagBlock'>
        <SmallBtn style={{ marginRight: '1rem' }}>최신</SmallBtn>
        <SmallBtn style={{ marginRight: '1rem' }}>활동적인</SmallBtn>
        <SmallBtn style={{ marginRight: '1rem' }}>여유로운</SmallBtn>
        <SmallBtn style={{ marginRight: '1rem' }}>맛집투어</SmallBtn>
        <SmallBtn style={{ marginRight: '1rem' }}>소형견</SmallBtn>
        <SmallBtn style={{ marginRight: '1rem' }}>중형견</SmallBtn>
        <SmallBtn style={{ marginRight: '1rem' }}>대형견</SmallBtn>
        <SmallBtn style={{ marginRight: '1rem' }}>가족여행</SmallBtn>
        <SmallBtn style={{ marginRight: '1rem' }}>어린이</SmallBtn>
      </div>
      <div className='othersCourse'>
        <WishCourse margin='0 4rem 4rem 0'></WishCourse>
        <WishCourse margin='0 4rem 4rem 0'></WishCourse>
        <WishCourse margin='0 0rem 4rem 0'></WishCourse>
        <WishCourse margin='0 4rem 0 0'></WishCourse>
        <WishCourse margin='0 4rem 0 0'></WishCourse>
        <WishCourse margin='0 0rem 0 0'></WishCourse>
      </div>
    </OthersCourseWrapper>
  );
};

const OthersCourseWrapper = styled.article`
  background-color: #cdcdcd;
  width: 128rem;
  .tagBlock {
    margin-bottom: 2.6rem;
  }
  .othersCourse {
    display: flex;
    flex-direction: inherit;
    flex-wrap: wrap;
  }
`;

export default OthersCourse;
