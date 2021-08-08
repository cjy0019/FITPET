import React from 'react';
import styled from 'styled-components';
import DogFilter from './DogFilter';
import HotelTypeFilter from './HotelTypeFilter';
import LevelFilter from './LevelFilter';
import RatingFilter from './RatingFilter';
import ServiceFilter from './ServiceFilter';

const HotelFilter = () => {
  return (
    <FilterSection>
      <MapContainer>
        <MapButton>지도와 함께 보기</MapButton>
      </MapContainer>

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
  height: 9.6rem;
`;

const MapButton = styled.button`
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

  &::before {
    display: block;
    content: '';
    background: url('/img/icon/mapicon.svg') no-repeat;
    width: 3.4rem;
    height: 3.4rem;
  }
`;

export default HotelFilter;
