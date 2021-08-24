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
          {/* 어디로 떠날까요? */}
          <SearchLocationBox className='location' />
          {/* 8월 6일 (금) - 8월 7일(토) | 1박' */}
          <SearchDateBox />
          {/* 성인2 | 객실1 | 소형견2 */}
          <SearchPeopleBox />
          <RoundSquareBtn search_btn>검색</RoundSquareBtn>
        </SearchContainer>
      ) : (
        <SearchContainer scroll>
          {/* 어디로 떠날까요? */}
          <SearchLocationBox className='location' />
          {/* 8월 6일 (금) - 8월 7일(토) | 1박' */}
          <SearchDateBox />
          {/* 성인2 | 객실1 | 소형견2 */}
          <SearchPeopleBox />
          <RoundSquareBtn search_btn>검색</RoundSquareBtn>
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

export default HotelSearch;
