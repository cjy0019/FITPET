import React from 'react';
import styled from 'styled-components';
import { Font, MiddleSizeButton } from '../../../common';

const HotelScroll = () => {
  return (
    <div>
      <DateContainer>
        <div className='menu'>
          <Font fontSize='1.6rem' fontWeight='500' mr='5rem'>
            객실선택
          </Font>
          <Font fontSize='1.6rem' fontWeight='500' mr='5rem'>
            숙소상세정보
          </Font>
          <Font fontSize='1.6rem' fontWeight='500' mr='5rem'>
            편의시설 및 서비스
          </Font>
          <Font fontSize='1.6rem' fontWeight='500' mr='5rem'>
            후기
          </Font>
          <Font fontSize='1.6rem' fontWeight='500'>
            다른 추천 호텔
          </Font>
        </div>
      </DateContainer>
    </div>
  );
};

const DateContainer = styled.div`
  display: grid;
  grid-template-columns: 1.17fr repeat(6, 1fr);

  //display: flex;
  // justify-content: space-evenly;
  background-color: #fff;
  width: 100%;
  height: 8rem;
  //grid-template-columns: 1.17fr repeat(2, 1fr);
  padding: 3.1rem 0 3rem 32rem;
  background-color: #ffffff;
  z-index: 999;
  flex-direction: column;

  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.16);
  .menu {
    width: 500px;

    margin: 0;
    display: flex;
    //    margin-right: auto;
  }
`;

export default HotelScroll;
