import React from 'react';
import styled from 'styled-components';
import { MiddleBtn } from '../../../common';

const CourseLeft = () => {
  return (
    <ButtonWrapper>
      <MiddleBtn
        goto_course
        style={{
          marginBottom: '1rem',
          backgroundImage: 'url(/img/main/locationicon.svg)',
        }}>
        나만의 맞춤코스 짜기
      </MiddleBtn>
      <MiddleBtn
        goto_course
        style={{
          backgroundImage: 'url(/img/main/arrowicon.svg)',
        }}>
        다른 사람들의 코스 구경하기
      </MiddleBtn>
    </ButtonWrapper>
  );
};
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12.4rem;
`;
export default CourseLeft;
