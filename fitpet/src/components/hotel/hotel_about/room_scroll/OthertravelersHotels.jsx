import React from 'react';
import styled from 'styled-components';
import { Font } from '../../../../common';
import OtherHotelSlider from './OtherHotelSlider';
const OthertravelersHotels = () => {
  return (
    <OthertravelersHotelsWrapper id='othertravelersHotels'>
      <Font
        fontSize='2.4rem'
        fontWeight='bold'
        color='#2a2a2a'
        mt='4rem'
        mb='1.4rem'>
        다른 여행객이 함께 본 숙소
      </Font>
      <OtherHotelSlider />
    </OthertravelersHotelsWrapper>
  );
};

const OthertravelersHotelsWrapper = styled.div`
  display: block;
  width: 128rem;
  margin: 0 auto 25.6rem;
`;
export default OthertravelersHotels;
