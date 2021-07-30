import React from 'react';
import styled from 'styled-components';
import { BasicBox } from '../../../common';

const HotelLiskBlock = () => {
  return (
    <HotelListWrapper>
      <div className='hotelListBox'>
        dd
        <div className='locationBox'>
          <BasicBox width='44rem' height='57.2rem'></BasicBox>
        </div>
      </div>
    </HotelListWrapper>
  );
};

const HotelListWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.grey3_color};
  //position: absolute;

  height: 55.6rem;
  .hotelListBox {
    width: 128rem;
    height: 57.2rem;
    //  position: absolute;
    // top: 10rem;
    background-color: #3f709b;
    .locationBox {
      position: absolute;
      left: 0;
      top: 10rem;
    }
  }
`;
export default HotelLiskBlock;
