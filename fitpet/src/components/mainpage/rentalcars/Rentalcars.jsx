import React from 'react';
import styled from 'styled-components';
import { Font, IconButton, WishSmall } from '../../../common';

const Rentalcars = () => {
  return (
    <RentalcarsBlock>
      {/* 렌트카 부분 */}
      <RantalcarsBox>
        <Font color='#707070' fontSize='42px' fontWeight='bold'>
          렌트카
        </Font>
        {/* 렌트카 태그 모음 부분 */}
        <TagBlock>
          <IconButton
            text='신차'
            backColor='#cbcbcb'
            color='#fff'
            pt='11px'
            pr='19px'
            pl='19px'
            pb='10px'
            fontSize='16px'
            borderRadius='2.6rem'
            hoverColor='#707070'
            border='none'
            margin='0 5px 10px 5px'
          />
          <IconButton
            text='오픈카'
            backColor='#cbcbcb'
            color='#fff'
            pt='11px'
            pr='19px'
            pl='19px'
            pb='10px'
            fontSize='16px'
            borderRadius='2.6rem'
            hoverColor='#707070'
            border='none'
            margin='0 5px 10px 5px'
          />
          <IconButton
            text='전기차'
            backColor='#cbcbcb'
            color='#fff'
            pt='11px'
            pr='19px'
            pl='19px'
            pb='10px'
            fontSize='16px'
            borderRadius='2.6rem'
            hoverColor='#707070'
            border='none'
            margin='0 5px 10px 5px'
          />
        </TagBlock>
        {/* 렌트카 슬라이드 부분 */}
        <RentalcarsWrapper>
          <Rentalcar>
            <WishSmall margin='0 40px 0 0'></WishSmall>
            <Font color='#707070' fontSize='18px' margin='14px 0 38px 23px'>
              [경차] 레이
              <br />
              44,900~ 50,000
            </Font>
          </Rentalcar>
          <Rentalcar>
            <WishSmall margin='0 40px 0 0'></WishSmall>
            <Font color='#707070' fontSize='18px' margin='14px 0 38px 23px'>
              [경차] 레이
              <br />
              44,900~ 50,000
            </Font>
          </Rentalcar>
          <Rentalcar>
            <WishSmall margin='0 40px 0 0'></WishSmall>
            <Font color='#707070' fontSize='18px' margin='14px 0 38px 23px'>
              [경차] 레이
              <br />
              44,900~ 50,000
            </Font>
          </Rentalcar>
          <Rentalcar>
            <WishSmall></WishSmall>
            <Font color='#707070' fontSize='18px' margin='14px 0 38px 23px'>
              [경차] 레이
              <br />
              44,900~ 50,000
            </Font>
          </Rentalcar>
        </RentalcarsWrapper>
        <OtherRentalcars>
          <Font fontSize='14px' borderBottom='1px solid' padding='10px'>
            더 다양한 옵션 보러가기
          </Font>
        </OtherRentalcars>

        {/* 띠배너 부분 */}
      </RantalcarsBox>
      <BandBanner>
        <Font color='#fff' fontSize='42px'>
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
  width: 128rem;
  margin: 0 32rem;
`;
const RantalcarsBox = styled.div`
  margin: 12rem 0;
`;
const TagBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 7px auto 40px;
`;
const RentalcarsWrapper = styled.div`
  display: flex;
`;
const Rentalcar = styled.div`
  display: block;
`;
const OtherRentalcars = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const BandBanner = styled.div`
  margin-top: 12rem;
  width: 1280px;
  height: 171px;
  text-align: center;
  padding-top: 60px;
  background-color: #979797;
`;
