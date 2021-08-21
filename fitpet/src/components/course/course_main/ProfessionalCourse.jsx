import React from 'react';
import styled from 'styled-components';
import { Font } from '../../../common';
import SliderOnly from '../../mainpage/slider/SliderOnly';
import GotoCourseCard from './GotoCourseCard';

const ProfessionalCourse = () => {
  return (
    <ProfessionalCourseWrapper>
      <Font fontSize='4.2rem' fontWeight='bold' mb='2.6rem' color='#2a2a2a'>
        전문가들의 Fit한 코스
      </Font>
      <GotoCourseCard />
      <SliderOnly />
    </ProfessionalCourseWrapper>
  );
};
const ProfessionalCourseWrapper = styled.article`
  width: 128rem;
  margin-bottom: 12rem;

  .courseBlock {
    display: flex;
    flex-direction: inherit;
    flex-wrap: wrap;
  }
`;

export default ProfessionalCourse;
