import React from 'react';
import styled from 'styled-components';
import { MiddleSizeButton } from '../../../common';

const HotelDate = () => {
  return (
    <DateContainer>
      <DateBox placeholder='8월 6일 (금) - 8월 7일(토) | 1박' />
      <DateBox placeholder='성인1 | 객실1 | 소형견1' />
      <MiddleSizeButton
        fontSize='1.6rem'
        width='7.4rem'
        height='4.8rem'
        text='재검색'
        color='#707070'
        border='none'
        borderRadius='7px'
      />
    </DateContainer>
  );
};

const DateContainer = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 15px;
  margin-left: auto;
`;

const DateBox = styled.input`
  border: none;
  width: 30rem;
  height: 4.8rem;
  padding: 0.7rem 0 0.7rem 5.6rem;
  margin-right: 1rem;
  font-size: 1.6rem;
  border-radius: 7px;
  color: #707070;
  outline: none;
  background-color: #cbcbcb;
  background-image: url('/img/logo-social.png');
  background-size: 3.4rem 3.4rem;
  background-position: 1.5rem center;
  background-repeat: no-repeat;
`;

export default HotelDate;
