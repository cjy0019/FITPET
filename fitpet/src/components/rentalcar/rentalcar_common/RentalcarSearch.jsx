import React from 'react';
import styled from 'styled-components';
import { Font, RoundSquareBtn, SampleIcon } from '../../../common';
import SearchCarBox from './search_box/SearchCarBox';
import SearchDateBox from './search_box/SearchDateBox';
import SearchLocationBox from './search_box/SearchLocationBox';

const RentalcarSearch = ({ isScroll }) => {
  return (
    <>
      <SearchContainer>
        <div className='checkBox'>
          <SampleIcon width='2.4rem' height='2.4rem' borderRadius='3px' />
          <Font
            fontSize='1.4rem'
            fontWeight='normal'
            color='#707070'
            ml='0.6rem'
            margin='auto 0'>
            다른 장소에서 반납
          </Font>
        </div>
        <div className='inputBox'>
          {/* 어디서 픽업하세요? */}
          <SearchLocationBox className='location' />
          {/* 어디서 반납하세요?*/}
          <SearchLocationBox className='location' />
          {/* 8월 6일 (금) - 8월 7일(토) | 1박' */}
          <SearchDateBox />
          {/* 차종 */}
          <SearchCarBox />
          <RoundSquareBtn search_btn>검색</RoundSquareBtn>
        </div>
        <div className='ageCheckBox'>
          <Font
            fontSize='1.4rem'
            fontWeight='normal'
            color='#707070'
            mr='0.4rem'
            margin='auto 0'>
            운전자 연령
          </Font>
          <SampleIcon width='2.4rem' height='2.4rem' borderRadius='3px' />
          <Font
            fontSize='1.4rem'
            fontWeight='normal'
            color='#707070'
            ml='0.6rem'
            mr='0.4rem'
            margin='auto 0'>
            : 25~ 65세
          </Font>
          <SampleIcon width='2.4rem' height='2.4rem' borderRadius='3px' />
        </div>
      </SearchContainer>
    </>
  );
};

const SearchContainer = styled.div`
  display: block;
  justify-content: space-evenly;
  width: 108rem;
  background-color: #fff;
  border-radius: 15px;
  padding: 2.6rem 2.8rem;
  margin: 0 auto;
  margin-top: 5.6rem;
  animation-timing-function: ease-in-out;
  .checkBox {
    text-align: center;
    display: flex;
    margin-bottom: 1.4rem;
  }
  .inputBox {
    display: flex;
  }
  .ageCheckBox {
    display: flex;
    margin-top: 1.4rem;
    text-align: center;
  }
`;

// const SearchLocationBox = styled.input`
//   border: none;
//   width: 43.2rem;
//   height: 4.8rem;
//   padding: 0.7rem 0 0.7rem 5.6rem;
//   font-size: 1.6rem;
//   border-radius: 7px;
//   color: #707070;
//   outline: none;
//   background-color: #cbcbcb;
//   //background-image: url('/img/logo-social.png');
//   background-size: 3.4rem 3.4rem;
//   background-position: 1.5rem center;
//   background-repeat: no-repeat;
// `;

// const SearchDateBox = styled.input`
//   border: none;
//   width: 34.4rem;
//   height: 4.8rem;
//   padding: 0.7rem 0 0.7rem 5.6rem;
//   font-size: 1.6rem;
//   margin: 0 1rem 0 1rem;
//   border-radius: 7px;
//   color: #707070;
//   outline: none;
//   background-color: #cbcbcb;
//   //background-image: url('/img/logo-social.png');
//   background-size: 3.4rem 3.4rem;
//   background-position: 1.5rem center;
//   background-repeat: no-repeat;
// `;

// const SearchBox = styled.input`
//   border: none;
//   width: 14.3rem;
//   height: 4.8rem;
//   padding: 0.7rem 0 0.7rem 5.6rem;
//   font-size: 1.6rem;
//   border-radius: 7px;
//   color: #707070;
//   outline: none;
//   background-color: #cbcbcb;
//   //background-image: url('/img/logo-social.png');
//   background-size: 3.4rem 3.4rem;
//   background-position: 1.5rem center;
//   background-repeat: no-repeat;
// `;

export default RentalcarSearch;
