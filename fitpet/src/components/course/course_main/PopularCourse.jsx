import React from 'react';
import styled from 'styled-components';
import { BasicBox, Font } from '../../../common';

const PopularCourse = () => {
  return (
    <PopularCourseWrapper>
      <Font fontSize='4.2rem' fontWeight='bold' mb='2.6rem' color='#2a2a2a'>
        여름 여행 인기 코스 총정리
      </Font>
      <div className='courseBlock'>
        <div className='videoBox'></div>
        <div>
          <BasicBox rentalcar_box2></BasicBox>
          <Font
            color='#2A2A2A'
            fontSize='1.4rem'
            margin='1.4rem 0 0.6rem 2.3rem'>
            강릉 &#124; 3박 4일
          </Font>
          <Font
            color='#2A2A2A'
            fontWeight='bold'
            fontSize='1.8rem'
            margin='0 0 0 2.3rem'>
            시원해지는 계절 강릉여행 떠나기
          </Font>
        </div>
        <div>
          <BasicBox rentalcar_box2 style={{ margin: '0' }}></BasicBox>
          <Font
            color='#2A2A2A'
            fontSize='1.4rem'
            margin='1.4rem 0 0.6rem 2.3rem'>
            강릉 &#124; 3박 4일
          </Font>
          <Font
            color='#2A2A2A'
            fontWeight='bold'
            fontSize='1.8rem'
            margin='0 0 0 2.3rem'>
            시원해지는 계절 강릉여행 떠나기
          </Font>
        </div>
        <div>
          <BasicBox rentalcar_box2></BasicBox>
          <Font
            color='#2A2A2A'
            fontSize='1.4rem'
            margin='1.4rem 0 0.6rem 2.3rem'>
            강릉 &#124; 3박 4일
          </Font>
          <Font
            color='#2A2A2A'
            fontWeight='bold'
            fontSize='1.8rem'
            margin='0 0 0 2.3rem'>
            시원해지는 계절 강릉여행 떠나기
          </Font>
        </div>
        <div>
          <BasicBox rentalcar_box2></BasicBox>
          <Font
            color='#2A2A2A'
            fontSize='1.4rem'
            margin='1.4rem 0 0.6rem 2.3rem'>
            강릉 &#124; 3박 4일
          </Font>
          <Font
            color='#2A2A2A'
            fontWeight='bold'
            fontSize='1.8rem'
            margin='0 0 0 2.3rem'>
            시원해지는 계절 강릉여행 떠나기
          </Font>
        </div>
        <div>
          <BasicBox rentalcar_box2></BasicBox>
          <Font
            color='#2A2A2A'
            fontSize='1.4rem'
            margin='1.4rem 0 0.6rem 2.3rem'>
            강릉 &#124; 3박 4일
          </Font>
          <Font
            color='#2A2A2A'
            fontWeight='bold'
            fontSize='1.8rem'
            margin='0 0 0 2.3rem'>
            시원해지는 계절 강릉여행 떠나기
          </Font>
        </div>
        <div>
          <BasicBox rentalcar_box2 style={{ margin: '0' }}></BasicBox>
          <Font
            color='#2A2A2A'
            fontSize='1.4rem'
            margin='1.4rem 0 0.6rem 2.3rem'>
            강릉 &#124; 3박 4일
          </Font>
          <Font
            color='#2A2A2A'
            fontWeight='bold'
            fontSize='1.8rem'
            margin='0 0 0 2.3rem'>
            시원해지는 계절 강릉여행 떠나기
          </Font>
        </div>
      </div>
    </PopularCourseWrapper>
  );
};
const PopularCourseWrapper = styled.article`
  width: 128rem;
  margin-bottom: 12rem;

  .courseBlock {
    display: flex;
    flex-direction: inherit;
    flex-wrap: wrap;
    .videoBox {
      width: 62rem;
      height: 43.6rem;
      background-color: pink;
      border-radius: 25px;
      margin: 0 4rem 9.4rem 0;
    }
  }
`;
export default PopularCourse;
