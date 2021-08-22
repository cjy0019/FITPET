import React from 'react';
import styled from 'styled-components';
import { Font } from '../../../common';

const SliderLocation = () => {
  return (
    <SliderLocationWrapper>
      <div className='textBlock'>
        <Font fontSize='4.2rem' fontWeight='bold' mb='2.6rem' color='#2a2a2a'>
          어디로 갈지 모르겠다면?
        </Font>
      </div>
    </SliderLocationWrapper>
  );
};

const SliderLocationWrapper = styled.article`
  background-color: #eeeeee;
  width: 100%;
  height: 73rem;
  margin-bottom: 12rem;
  .textBlock {
    display: flex;
    margin: 0 auto;
    align-items: center;
    padding: 8rem 0 6rem 0;
    width: 128rem;
  }
`;
export default SliderLocation;
