import React from 'react';
import styled from 'styled-components';
import SmallLine from '../../../common/utility/SmallLine';
import DogFilter from './DogFilter';
import LevelFilter from './LevelFilter';
import RatingFilter from './RatingFilter';

const HotelFilter = () => {
  return (
    <FilterSection>
      <MapContainer>
        <MapButton>지도와 함께 보기</MapButton>
      </MapContainer>

      {/* 등급 필터링 */}
      <LevelFilter />
      <SmallLine />

      {/* 평점 필터링 */}
      <RatingFilter />
      <SmallLine />

      {/* 반려동물 필터링 */}
      <DogFilter />
      <SmallLine />
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
  font-weight: 500;
  white-space: nowrap;
  border: none;
  border-radius: 26px;
  outline: none;
  background-color: #979797;
  color: #ffffff;
`;

export default HotelFilter;
