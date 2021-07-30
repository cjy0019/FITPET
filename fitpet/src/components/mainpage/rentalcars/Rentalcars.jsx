import React from 'react';
import styled from 'styled-components';
import { Font, IconButton } from '../../../common';
import SliderRentalcar from '../slider/SliderRentalcar';

const Rentalcars = () => {
  return (
    <RentalcarsBlock>
      {/* 렌트카 부분 */}
      <RantalcarsBox>
        <TextBlock>
          <Font color='#2A2A2A' fontSize='4.2rem' fontWeight='bold'>
            렌트카
          </Font>
        </TextBlock>
        {/* 렌트카 태그 모음 부분 */}
        <TagBlock>
          {/* 태그 첫 번째 줄 */}
          <TagOne>
            <IconButton
              text='신차'
              backColor='#eeeeee'
              color='#707070'
              pt='1.1rem'
              pr='1.9rem'
              pl='1.9rem'
              pb='1rem'
              fontSize='1.6rem'
              borderRadius='2.6rem'
              textHover='#ffffff'
              hoverColor='#4765ff'
              border='none'
              margin='0 0.5rem 1rem 0.5rem'
            />
            <IconButton
              text='오픈카'
              backColor='#eeeeee'
              color='#707070'
              pt='1.1rem'
              pr='1.9rem'
              pl='1.9rem'
              pb='1rem'
              fontSize='1.6rem'
              borderRadius='2.6rem'
              textHover='#ffffff'
              hoverColor='#4765ff'
              border='none'
              margin='0 0.5rem 1rem 0.5rem'
            />
            <IconButton
              text='전기차'
              backColor='#eeeeee'
              color='#707070'
              pt='1.1rem'
              pr='1.9rem'
              pl='1.9rem'
              pb='1rem'
              fontSize='1.6rem'
              textHover='#ffffff'
              borderRadius='2.6rem'
              hoverColor='#4765ff'
              border='none'
              margin='0 0.5rem 1rem 0.5rem'
            />
            <IconButton
              text='수입'
              backColor='#eeeeeeㄷ'
              color='#707070'
              pt='1.1rem'
              pr='1.9rem'
              pl='1.9rem'
              pb='1rem'
              fontSize='1.6rem'
              borderRadius='2.6rem'
              textHover='#ffffff'
              hoverColor='#4765ff'
              border='none'
              margin='0 0.5rem 1rem 0.5rem'
            />
          </TagOne>
          {/* 태그 두 번째 줄 */}
          <TagTwo>
            <IconButton
              text='SUV'
              backColor='#eeeeee'
              color='#707070'
              pt='1.1rem'
              pr='1.9rem'
              pl='1.9rem'
              pb='1rem'
              fontSize='1.6rem'
              borderRadius='2.6rem'
              textHover='#ffffff'
              hoverColor='#4765ff'
              border='none'
              margin='0 0.5rem 1rem 0.5rem'
            />
            <IconButton
              text='경소형'
              backColor='#eeeeee'
              color='#707070'
              pt='1.1rem'
              pr='1.9rem'
              pl='1.9rem'
              pb='1rem'
              fontSize='1.6rem'
              borderRadius='2.6rem'
              textHover='#ffffff'
              hoverColor='#4765ff'
              border='none'
              margin='0 0.5rem 1rem 0.5rem'
            />
            <IconButton
              text='준중형'
              backColor='#eeeeee'
              color='#707070'
              pt='1.1rem'
              pr='1.9rem'
              pl='1.9rem'
              pb='1rem'
              fontSize='1.6rem'
              borderRadius='2.6rem'
              textHover='#ffffff'
              hoverColor='#4765ff'
              border='none'
              margin='0 0.5rem 1rem 0.5rem'
            />
            <IconButton
              text='중대형'
              backColor='#eeeeee'
              color='#707070'
              pt='1.1rem'
              pr='1.9rem'
              pl='1.9rem'
              pb='1rem'
              fontSize='1.6rem'
              borderRadius='2.6rem'
              textHover='#ffffff'
              hoverColor='#4765ff'
              border='none'
              margin='0 0.5rem 1rem 0.5rem'
            />
            <IconButton
              text='승합차'
              backColor='#eeeeee'
              color='#707070'
              pt='1.1rem'
              pr='1.9rem'
              pl='1.9rem'
              pb='1rem'
              fontSize='1.6rem'
              borderRadius='2.6rem'
              textHover='#ffffff'
              hoverColor='#4765ff'
              border='none'
              margin='0 0.5rem 1rem 0.5rem'
            />
          </TagTwo>
        </TagBlock>
        {/* 렌트카 슬라이드 + 띠배너 */}
        <RentalcarsMore>
          {/* 렌트카 슬라이드 부분 */}
          <RentalcarsWrapper>
            <SliderRentalcar />
          </RentalcarsWrapper>
          {/* 렌트카 페이지로 이동 */}
          <OtherRentalcars>
            <Font fontSize='1.4rem' borderBottom='1px solid' pb='5px'>
              더 다양한 옵션 보러가기
            </Font>
          </OtherRentalcars>
          {/* 띠배너 부분 */}
          <BandBanner img={'/img/linebanner.png'} />
        </RentalcarsMore>
      </RantalcarsBox>
    </RentalcarsBlock>
  );
};

export default Rentalcars;

const RentalcarsBlock = styled.div``;
const RantalcarsBox = styled.div`
  margin: 12rem 0;
`;
const TextBlock = styled.div`
  margin: 1.6rem auto 0;
  width: 128rem;
`;
const TagBlock = styled.div`
  display: block;
  margin: 0.7rem auto 4rem;
`;
const TagOne = styled.div`
  display: flex;
  justify-content: center;
`;
const TagTwo = styled.div`
  display: flex;
  justify-content: center;
`;
const RentalcarsMore = styled.div`
  display: block;
  margin: 0 auto;
  width: 128rem;
`;

const RentalcarsWrapper = styled.div`
  display: flex;
  justify-content: center;
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

  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
`;
