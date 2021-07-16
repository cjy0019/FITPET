import React from 'react';
import styled from 'styled-components';
import CourseLeft from './CourseLeft';

const Course = () => {
  return (
    <CourseSection>
      <LeRiWrapper>
        {/* 코스짜기 왼쪽 파트 */}
        <div>
          <StyledH2>코스짜기</StyledH2>
          <p>나만의 맞춤 여행코스를 계획해보세요.</p>
          <CourseLeft />
        </div>

        {/* 오른쪽 지도 파트 */}
      </LeRiWrapper>
    </CourseSection>
  );
};

const CourseSection = styled.section`
  background-color: #b0cfcf;
  padding: 4rem 32rem 4rem 32rem;
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
// 왼쪽

const LeftContainer = styled.div``;

const StyledH2 = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  letter-spacing: -0.8px;
  margin-top: 7rem;
`;

export default Course;
