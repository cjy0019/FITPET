import React from 'react';
import styled from 'styled-components';
import DogFilter from './DogFilter';
import HotelTypeFilter from './HotelTypeFilter';
import LevelFilter from './LevelFilter';
import RatingFilter from './RatingFilter';
import ServiceFilter from './ServiceFilter';
import BudgetFilter from './BudgetFilter';

const HotelFilter = () => {
  return (
    <FilterSection>
      <MapContainer>
        <MapButton>
          <img src='/img/hotel/hotel_list/mapicon.svg' alt='지도와 함께 보기' />
          <span>지도와 함께 보기</span>
        </MapButton>
      </MapContainer>

      <BudgetFilter />

      {/* 등급 필터링 */}
      <LevelFilter />

      {/* 평점 필터링 */}
      <RatingFilter />

      {/* 반려동물 필터링 */}
      <DogFilter />

      {/* 서비스 필터링 */}
      <ServiceFilter />

      {/* 숙소 유형 필터링 */}
      <HotelTypeFilter />
    </FilterSection>
  );
};

const FilterSection = styled.div`
  min-width: 28rem;
`;

const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cbcbcb;
  margin-bottom: 4rem;
  height: 9.6rem;
`;

const MapButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16.9rem;
  height: 4rem;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  white-space: nowrap;
  border: none;
  border-radius: 26px;
  outline: none;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  color: ${(props) => props.theme.main_color};
`;

export default HotelFilter;
