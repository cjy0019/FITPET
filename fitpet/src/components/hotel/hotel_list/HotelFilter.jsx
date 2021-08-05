import React from 'react';
import styled from 'styled-components';
import DogFilter from './DogFilter';
import LevelFilter from './LevelFilter';
import RatingFilter from './RatingFilter';

const HotelFilter = () => {
  return (
    <FilterSection>
      <MapContainer>
        <MapButton>
          <img src='/img/hotel/hotel_list/mapicon.svg' alt='지도와 함께 보기' />
          <span>지도와 함께 보기</span>
        </MapButton>
      </MapContainer>

      {/* 등급 필터링 */}
      <LevelFilter />

      {/* 평점 필터링 */}
      <RatingFilter />

      {/* 반려동물 필터링 */}
      <DogFilter />
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16.9rem;
  height: 4rem;
  font-size: 1.6rem;
  font-weight: 500;
  white-space: nowrap;
  border: none;
  border-radius: 26px;
  outline: none;
  background-color: #fff;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

  span {
    transform: translateY(0.25rem);
  }

  color: ${(props) => props.theme.main_color};
`;

export default HotelFilter;
