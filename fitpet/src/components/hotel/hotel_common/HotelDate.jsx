import React from 'react';
import styled from 'styled-components';
import { RoundSquareBtn } from '../../../common';
import SearchDateBox from './search_box/SearchDateBox';
import SearchPeopleBox from './search_box/SearchPeopleBox';

const HotelDate = () => {
  return (
    <DateContainer>
      {/* 8월 6일 (금) - 8월 7일(토) | 1박' */}
      <SearchDateBox />
      {/* 성인2 | 객실1 | 소형견2 */}
      <SearchPeopleBox />
      <RoundSquareBtn main_color>재검색</RoundSquareBtn>
    </DateContainer>
  );
};

const DateContainer = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 15px;
  margin-left: auto;
  align-items: center;
`;

export default HotelDate;
