import React from 'react';
import styled from 'styled-components';
import { Font, RoundSquareBtn } from '../../../common';
import SearchDateBox from './search_box/SearchDateBox';
import SearchLocationBox from './search_box/SearchLocationBox';
import SearchPeopleBox from './search_box/SearchPeopleBox';

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
          {/* 어디로 떠날까요? */}
          <SearchLocationBox className='location' />
          {/* 8월 6일 (금) - 8월 7일(토) | 1박' */}
          <SearchDateBox />
          {/* 성인2 | 객실1 | 소형견2 */}
          <SearchPeopleBox />
          <RoundSquareBtn main_color>검색</RoundSquareBtn>
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

export default HotelTypeSearch;
