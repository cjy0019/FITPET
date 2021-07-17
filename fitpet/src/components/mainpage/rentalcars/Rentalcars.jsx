import React from 'react';
import styled from 'styled-components';
import { Font, IconButton, WishSmall } from '../../../common';

const Rentalcars = () => {
  return (
    <RentalcarsBlock>
      {/* 렌트카 부분 */}
      <RantalcarsBox>
        <Font color='#707070' fontSize='4.2rem' fontWeight='bold'>
          렌트카
        </Font>
        {/* 렌트카 태그 모음 부분 */}
        <TagBlock>
          <IconButton
            text='신차'
            backColor='#cbcbcb'
            color='#fff'
            pt='1.1rem'
            pr='1.9rem'
            pl='1.9rem'
            pb='1rem'
            fontSize='1.6rem'
            borderRadius='2.6rem'
            hoverColor='#707070'
            border='none'
            margin='0 0.5rem 1rem 0.5rem'
          />
          <IconButton
            text='오픈카'
            backColor='#cbcbcb'
            color='#fff'
            pt='1.1rem'
            pr='1.9rem'
            pl='1.9rem'
            pb='1rem'
            fontSize='1.6rem'
            borderRadius='2.6rem'
            hoverColor='#707070'
            border='none'
            margin='0 0.5rem 1rem 0.5rem'
          />
          <IconButton
            text='전기차'
            backColor='#cbcbcb'
            color='#fff'
            pt='1.1rem'
            pr='1.9rem'
            pl='1.9rem'
            pb='1rem'
            fontSize='1.6rem'
            borderRadius='2.6rem'
            hoverColor='#707070'
            border='none'
            margin='0 0.5rem 1rem 0.5rem'
          />
        </TagBlock>
        {/* 렌트카 슬라이드 부분 */}
        <RentalcarsWrapper>
          <Rentalcar>
            <WishSmall margin='0 4rem 0 0'></WishSmall>
            <Font
              color='#707070'
              fontSize='1.8rem'
              margin='1.4rem 0 3.8rem 2.3rem'>
              [경차] 레이
              <br />
              <span>44,900</span>~ 50,000
            </Font>
          </Rentalcar>
          <Rentalcar>
            <WishSmall margin='0 4rem 0 0'></WishSmall>
            <Font
              color='#707070'
              fontSize='1.8rem'
              margin='1.4rem 0 3.8rem 2.3rem'>
              [경차] 레이
              <br />
              <span>44,900</span>~ 50,000
            </Font>
          </Rentalcar>
          <Rentalcar>
            <WishSmall margin='0 4rem 0 0'></WishSmall>
            <Font
              color='#707070'
              fontSize='1.8rem'
              margin='1.4rem 0 3.8rem 2.3rem'>
              [경차] 레이
              <br />
              <span>44,900</span>~ 50,000
            </Font>
          </Rentalcar>
          <Rentalcar>
            <WishSmall></WishSmall>
            <Font
              color='#707070'
              fontSize='1.8rem'
              margin='1.4rem 0 3.8rem 2.3rem'>
              [경차] 레이
              <br />
              <span>44,900</span>~ 50,000
            </Font>
          </Rentalcar>
        </RentalcarsWrapper>
        <OtherRentalcars>
          <Font fontSize='1.4rem' borderBottom='1px solid'>
            더 다양한 옵션 보러가기
          </Font>
        </OtherRentalcars>

        {/* 띠배너 부분 */}
      </RantalcarsBox>
      <BandBanner>
        <Font color='#fff' fontSize='4.2rem'>
          띠배너
        </Font>
      </BandBanner>
    </RentalcarsBlock>
  );
};

export default Rentalcars;

const RentalcarsBlock = styled.div`
  display: flow-root;
  height: 115.1rem;
  margin: 0 32rem;
`;
const RantalcarsBox = styled.div`
  margin: 12rem 0;
`;
const TagBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.7rem auto 4rem;
`;
const RentalcarsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Rentalcar = styled.div`
  //display: block;
  span {
    font-weight: bold;
  }
`;
const OtherRentalcars = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const BandBanner = styled.div`
  margin-top: 12rem;
  height: 17.1rem;
  text-align: center;
  justify-content: center;
  padding-top: 6rem;
  background-color: #979797;
`;
