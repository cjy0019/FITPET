import React from 'react';
import styled from 'styled-components';
import { Font, RoundSquareBtn } from '../../../common';
import OthersCourse from './OthersCourse';

const CourseMain = () => {
  return (
    <CourseMainWrapper>
      <div className='margin'>
        <div className='articleBlock'>
          <CourseHeader>
            <div>
              <Font
                fontSize='3.4rem'
                fontWeight='600'
                mb='1rem'
                lineHeight='1.18'>
                나만의 맞춤 코스짜기
              </Font>
              <Font fontSize='2rem' fontWeight='normal' lineHeight='1.2'>
                핏펫에서 반려동물과 함께하는 나만의 맞춤 여행코스를
                계획해보세요!
              </Font>
            </div>
            <div className='btnBlock'>
              <RoundSquareBtn course_btn>Fit한 코스 계획하기</RoundSquareBtn>
            </div>
          </CourseHeader>
          {/* 다른 사람들의 fit한 코스 */}
          <OthersCourse />
        </div>
      </div>
    </CourseMainWrapper>
  );
};

const CourseMainWrapper = styled.section`
  max-width: 100%;
  margin-top: 16rem;
  .margin {
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    .articleBlock {
      display: block;
    }
  }
`;

const CourseHeader = styled.header`
  display: flex;
  width: 128.2rem;
  height: 14.9rem;
  padding: 3.8rem 5.6rem 3.7rem 4rem;
  background-color: ${(props) => props.theme.grey5_color};
  margin-bottom: 12rem;
  p {
    color: ${(props) => props.theme.black1_color};
  }
  .btnBlock {
    margin-left: auto;
  }
`;

export default CourseMain;
