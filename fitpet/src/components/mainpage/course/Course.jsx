import React from 'react';
import styled from 'styled-components';
import { A11yHidden } from '../../../common/accessibility/Hidden';
import CourseLeft from './CourseLeft';
import CourseRight from './CourseRight';

const Course = () => {
  return (
    <CourseSection>
      <LeRiWrapper>
        {/* 코스짜기 왼쪽 파트 */}
        <div>
          <StyledH2>코스짜기</StyledH2>
          <A11yHidden>지도에서 확인하세요</A11yHidden>
          <p>나만의 맞춤 여행코스를 계획해보세요.</p>
          <CourseLeft />
        </div>

        {/* 오른쪽 지도 파트 */}
        <CourseRight />
      </LeRiWrapper>
    </CourseSection>
  );
};

const CourseSection = styled.section`
  background-color: #b0cfcf;
  padding: 4rem 0;
  color: #ffffff;

  p {
    margin-top: 0.7rem;
    font-size: 2.4rem;
    letter-spacing: -0.48px;
    line-height: 1.21;
    white-space: nowrap;
  }
`;

const LeRiWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledH2 = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  letter-spacing: -0.8px;
  margin-top: 7rem;
`;

export default Course;
