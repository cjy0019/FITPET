import React from 'react';
import styled, { css } from 'styled-components';
import { RoundSquareBtn } from '../../../common';
import SearchDateBox from './search_box/SearchDateBox';
import SearchLocationBox from './search_box/SearchLocationBox';
import SearchPeopleBox from './search_box/SearchPeopleBox';

const HotelSearch = ({ isScroll }) => {
  return (
    <>
      {isScroll ? (
        <SearchContainer>
          <SearchBox placeholder='제주도' location />
          <SearchBox placeholder='8월 6일 (금) - 8월 7일(토) | 1박' date />
          <SearchBox placeholder='성인1 | 객실1 | 소형견1' person />
          {/* 어디로 떠날까요? */}
          <SearchLocationBox className='location' />
          {/* 8월 6일 (금) - 8월 7일(토) | 1박' */}
          <SearchDateBox />
          {/* 성인2 | 객실1 | 소형견2 */}
          <SearchPeopleBox />
          <RoundSquareBtn main_color>검색</RoundSquareBtn>
        </SearchContainer>
      ) : (
        <SearchContainer scroll>
          <SearchBox placeholder='제주도' location />
          <SearchBox placeholder='8월 6일 (금) - 8월 7일(토) | 1박' date />
          <SearchBox placeholder='성인1 | 객실1 | 소형견1' person />
          {/* 어디로 떠날까요? */}
          <SearchLocationBox className='location' />
          {/* 8월 6일 (금) - 8월 7일(토) | 1박' */}
          <SearchDateBox />
          {/* 성인2 | 객실1 | 소형견2 */}
          <SearchPeopleBox />
          <RoundSquareBtn main_color>검색</RoundSquareBtn>
        </SearchContainer>
      )}
    </>
  );
};

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 108rem;
  background-color: #fff;
  border-radius: 15px;
  padding: 2.6rem 2.8rem;
  margin: 0 auto;
  margin-top: 5.6rem;
  animation-timing-function: ease-in-out;

  ${(props) =>
    props.scroll &&
    css`
      margin-top: 0;
    `}
`;

const SearchBox = styled.input`
  border: none;
  width: 30rem;
  height: 4.8rem;
  padding: 0.7rem 0 0.7rem 5.6rem;
  font-size: 1.6rem;
  border-radius: 7px;
  color: ${(props) => props.theme.black1_color};
  outline: none;
  background-color: ${(props) => props.theme.grey5_color};
  background-size: 3.4rem 3.4rem;
  background-position: 1.5rem center;
  background-repeat: no-repeat;

  ${(props) =>
    props.location &&
    css`
      background-image: url('/img/icon/locationicon.svg');
    `}

  ${(props) =>
    props.date &&
    css`
      background-image: url('/img/icon/datepickericon.svg');
    `}
  ${(props) =>
    props.person &&
    css`
      background-image: url('/img/icon/pickpersonicon.svg');
    `}
`;

export default HotelSearch;
