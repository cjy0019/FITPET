import React from 'react';
import styled from 'styled-components';
import BrandFilter from './BrandFilter';
import CarSizeFilter from './CarSizeFilter';
import FuelFilter from './FuelFilter';

const RentCarFilter = () => {
  return (
    <FilterSection>
      <label htmlFor='delivery'>
        <input type='checkbox' id='delivery' />
        <h2>차량 딜리버리</h2>
      </label>

      {/* 차종 필터 */}
      <CarSizeFilter />

      {/* 연료 필터 */}
      <FuelFilter />

      {/* 브랜드 */}
      <BrandFilter />
    </FilterSection>
  );
};

const FilterSection = styled.div`
  min-width: 28rem;

  label {
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.2;
    letter-spacing: -0.4;
    margin-bottom: 2.4rem;
    cursor: pointer;
    color: ${({ theme }) => theme.grey1_color};

    h2 {
      margin-left: 0.4rem;
    }
  }
`;

export default RentCarFilter;
