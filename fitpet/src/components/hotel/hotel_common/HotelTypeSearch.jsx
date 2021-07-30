import React from 'react';
import styled, { css } from 'styled-components';
import { Font, MiddleSizeButton } from '../../../common';

const HotelTypeSearch = ({ isScroll }) => {
  return (
    <>
      <SearchContainer>
        <div className='typeBox'>
          <Font
            fontSize='1.8rem'
            fontWeight='normal'
            color='#707070'
            mr='3.5rem'
            mb='0.6rem'>
            호텔/리조트
          </Font>
          <Font
            fontSize='1.8rem'
            fontWeight='normal'
            color='#707070'
            mr='3.5rem'
            mb='0.6rem'>
            펜션/캠핑/글램핑
          </Font>
        </div>
        <div className='inputBox'>
          <SearchLocationBox
            className='location'
            placeholder='어디로 떠날까요?'
          />
          <SearchDateBox placeholder='8월 6일 (금) - 8월 7일(토) | 1박' />
          <SearchBox placeholder='성인1 | 객실1 | 소형견1' />
          <MiddleSizeButton
            fontSize='1.6rem'
            width='7.4rem'
            text='검색'
            border='none'
            borderRadius='7px'
            pt='1.5rem'
            pb='1.4rem'
            ml='1rem'
          />
        </div>
      </SearchContainer>
    </>
  );
};

const SearchContainer = styled.div`
  display: block;
  justify-content: space-evenly;
  width: 108rem;
  background-color: #fff;
  border-radius: 15px;
  padding: 2.6rem 2.8rem;
  margin: 0 auto;
  margin-top: 5.6rem;
  animation-timing-function: ease-in-out;
  .typeBox {
    display: flex;
    border-bottom: 1px solid ${(props) => props.theme.grey3_color};
    margin-bottom: 2.3rem;
  }
  .inputBox {
    display: flex;
  }
`;

const SearchLocationBox = styled.input`
  border: none;
  width: 30rem;
  height: 4.8rem;
  padding: 0.7rem 0 0.7rem 5.6rem;
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

const SearchDateBox = styled.input`
  border: none;
  width: 34.4rem;
  height: 4.8rem;
  padding: 0.7rem 0 0.7rem 5.6rem;
  font-size: 1.6rem;
  margin: 0 1rem 0 1rem;
  border-radius: 7px;
  color: #707070;
  outline: none;
  background-color: #cbcbcb;
  background-image: url('/img/logo-social.png');
  background-size: 3.4rem 3.4rem;
  background-position: 1.5rem center;
  background-repeat: no-repeat;
`;

const SearchBox = styled.input`
  border: none;
  width: 27.6rem;
  height: 4.8rem;
  padding: 0.7rem 0 0.7rem 5.6rem;
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

export default HotelTypeSearch;
