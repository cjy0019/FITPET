import React, { useState } from 'react';
import styled from 'styled-components';
import { RoundSquareBtn } from '../../../common';
import SearchDateBox from './search_box/SearchDateBox';
import SearchLocationBox from './search_box/SearchLocationBox';
import SearchPeopleBox from './search_box/SearchPeopleBox';

const HotelTypeSearch = () => {
  // 210919 by.dy
  // 숙소 유형 상태 추가
  const [handleState, setHandleState] = useState(1);
  const handleClick = (index) => {
    setHandleState(index);
  };
  return (
    <>
      <SearchContainer>
        <div className='typeBox'>
          <HotelTypeBtn
            index='1'
            onClick={() => handleClick(1)}
            className={handleState === 1 ? 'active' : ''}>
            호텔/리조트
          </HotelTypeBtn>
          <HotelTypeBtn
            index='2'
            onClick={() => handleClick(2)}
            className={handleState === 2 ? 'active' : ''}>
            펜션/풀빌라
          </HotelTypeBtn>
          <HotelTypeBtn
            index='3'
            onClick={() => handleClick(3)}
            className={handleState === 3 ? 'active' : ''}>
            캠핑/글램핑
          </HotelTypeBtn>
        </div>
        <div className='inputBox'>
          {/* 어디로 떠날까요? */}
          <SearchLocationBox />
          {/* 8월 6일 (금) - 8월 7일(토) | 1박' */}
          <SearchDateBox />
          {/* 성인2 | 객실1 | 소형견2 */}
          <SearchPeopleBox />
          <RoundSquareBtn search_btn>검색</RoundSquareBtn>
        </div>
      </SearchContainer>
    </>
  );
};

const SearchContainer = styled.div`
  display: block;
  justify-content: space-evenly;
  width: 108rem;
  background-color: ${(props) => props.theme.white_color};
  border-radius: 15px;
  padding: 2.6rem 2.8rem;
  margin: 0 auto;
  margin-top: 5.6rem;
  animation-timing-function: ease-in-out;
  .typeBox {
    display: flex;
    border-bottom: 1px solid ${(props) => props.theme.main_color};
    margin-bottom: 2.3rem;
    .active {
      border-bottom: 1px solid ${(props) => props.theme.main_color};
      color: ${(props) => props.theme.main_color};
    }
  }
  .inputBox {
    display: flex;
  }
`;
const HotelTypeBtn = styled.button`
  font-size: 1.8rem;
  font-weight: normal;
  color: ${(props) => props.theme.black1_color};
  margin-right: 3.5rem;
  border: 1px solid ${(props) => props.theme.white_color};
  background-color: ${(props) => props.theme.white_color};
  padding-bottom: 1rem;
`;

export default HotelTypeSearch;
