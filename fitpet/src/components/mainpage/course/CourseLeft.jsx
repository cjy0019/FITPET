import React from 'react';
import styled from 'styled-components';
import { MiddleSizeButton } from '../../../common';

const CourseLeft = () => {
  return (
    <ButtonWrapper>
      <MiddleSizeButton
        text='나만의 맞춤코스 짜기'
        width='32.6rem'
        height='5.2rem'
        borderRadius='2.7rem'
        border='none'
        p='1rem 9.5rem 1rem 6.2rem'
        fontSize='2.0rem'
        backColor='#4765ff'
        color='#ffffff'
        url='/img/logo-social.png'
        size='3.4rem 3.4rem'
        bgp='1.4rem center'
      />

      <MiddleSizeButton
        text='다른 사람들의 코스 구경하기'
        width='32.6rem'
        height='5.2rem'
        border='none'
        borderRadius='2.7rem'
        p='1rem 9.5rem 1rem 6.2rem'
        fontSize='2rem'
        backColor='#4765ff'
        color='#ffffff'
        url='/img/logo-social.png'
        size='3.4rem 3.4rem'
        bgp='1.4rem center'
        mt='1.8rem'
      />
    </ButtonWrapper>
  );
};
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12.4rem;
`;
export default CourseLeft;
