import React from 'react';
import styled from 'styled-components';
import { Font, SampleIcon } from '../../common';
import HotelNameBlock from './HotelNameBlock';

const HotelsAbout = () => {
  return (
    <HotelsAboutWrapper>
      {/* 숙소 이미지 3장 */}
      <HotelImages>
        <SampleIcon width='88rem' height='50rem' mr='1rem' />
        {/* 숙소 서브 사진들 */}
        <div className='subImage'>
          <SampleIcon width='39rem' height='24.5rem' mb='1rem' />
          <SampleIcon width='39rem' height='24.5rem' />
        </div>
      </HotelImages>
      {/* 숙소 상세 내용 */}
      <Contents>
        {/* 상세내용 왼쪽 (숙소 이름, 편의시설..) */}
        <ContentsLeft>
          <HotelNameBlock />
          {/* 찜, 공유 */}
          <div className='icons'>
            <SampleIcon></SampleIcon>
            <SampleIcon ml='1rem' mr='2.4rem'></SampleIcon>
          </div>
        </ContentsLeft>
        {/* 상세내용 오른쪽 (숙소 가격) */}
        <ContentsRight>
          <PriceBlock>
            <Font
              fontSize='3.2rem'
              color='#707070'
              fontWeight='bold'
              mb='0.6rem'>
              446,490 ~
            </Font>
            <span className='price'> 원</span>
          </PriceBlock>
          <Font fontSize='1.4rem' color='#707070' mb='1.4rem'>
            1박 요금 최저가 (세금, 봉사료 포함)
          </Font>
          <HotelLocationBlock>
            <div className='locationText'>
              <SampleIcon />
              <Font fontSize='1.6rem' color='#979797' ml='0.6rem'>
                서귀포시 노연로 80
              </Font>
            </div>
          </HotelLocationBlock>
        </ContentsRight>
      </Contents>
      {/* 서비스 및 편의시설 */}
      <ServiceBlock>
        <ServiceBox>
          <SampleIcon width='12.5rem' height='12.5rem' />
          <Font fontSize='2rem' color='#707070' mt='0.7rem'>
            소형견
          </Font>
        </ServiceBox>
        <ServiceBox>
          <SampleIcon width='12.5rem' height='12.5rem' />
          <Font fontSize='2rem' color='#707070' mt='0.7rem'>
            운동장
          </Font>
        </ServiceBox>
        <ServiceBox>
          <SampleIcon width='12.5rem' height='12.5rem' />
          <Font fontSize='2rem' color='#707070' mt='0.7rem'>
            무료주차
          </Font>
        </ServiceBox>
        <ServiceBox>
          <SampleIcon width='12.5rem' height='12.5rem' />
          <Font fontSize='2rem' color='#707070' mt='0.7rem'>
            피트니스
          </Font>
        </ServiceBox>
        <ServiceBox>
          <SampleIcon width='12.5rem' height='12.5rem' />
          <Font fontSize='2rem' color='#707070' mt='0.7rem'>
            비즈니스센터
          </Font>
        </ServiceBox>
        <ServiceBox>
          <SampleIcon width='12.5rem' height='12.5rem' />
          <Font fontSize='2rem' color='#707070' mt='0.7rem'>
            해변근처
          </Font>
        </ServiceBox>
      </ServiceBlock>
      {/* 숙소 정보 */}
      <About>
        <Font
          fontSize='2.4rem'
          fontWeight='bold'
          color='#707070'
          mt='4rem'
          mb='1.4rem'>
          숙소 정보
        </Font>
        <div className='Aboutbox'>
          <SampleIcon />
          <Font fontSize='1.6rem' color='#979797' ml='0.6rem'>
            서귀포시 노연로 80
          </Font>
        </div>

        <div className='Aboutbox'>
          <SampleIcon />
          <Font fontSize='1.6rem' color='#979797' ml='0.6rem'>
            체크린 15:00 PM - 체크아웃 12:00 PM
          </Font>
        </div>
        <div className='Aboutbox'>
          <SampleIcon />
          <Font fontSize='1.6rem' color='#979797' ml='0.6rem'>
            11층 / 800객실
          </Font>
        </div>
        <div className='Aboutbox'>
          <SampleIcon />
          <Font fontSize='1.6rem' color='#979797' ml='0.6rem'>
            전화 82-64-908-8800
          </Font>
        </div>
        <div className='Aboutbox'>
          <SampleIcon />
          <Font fontSize='1.6rem' color='#979797' ml='0.6rem'>
            팩스 82-64-908-8811
          </Font>
        </div>
      </About>
      {/* 객실 선택 */}
    </HotelsAboutWrapper>
  );
};

const HotelsAboutWrapper = styled.div`
  max-width: 100%;
  margin: 12rem 0;
`;
const HotelImages = styled.div`
  background-color: aliceblue;
  margin: 2.6rem auto 4rem;
  width: 128rem;
  //height: 55rem;
  display: flex;
  .subImage {
    display: block;
  }
`;
const Contents = styled.div`
  display: flex;
  margin: 0 auto;
  width: 128rem;
`;
const ContentsLeft = styled.div`
  display: flex;
  width: 89rem;
  border-right: 0.5px solid #979797;
  .icons {
    display: flex;
    margin-left: auto;
  }
`;
const ContentsRight = styled.div`
  display: block;
  margin-left: 2.4rem;
`;
const PriceBlock = styled.div`
  display: flex;
  text-align: center;
  .price {
    font-size: 2.4rem;
    font-weight: 500;
    color: #707070;

    margin: 3px 0 0 8px;
  }
`;
const HotelLocationBlock = styled.div`
  background-color: #ebebeb;
  width: 36.6rem;
  height: 9.6rem;
  display: inline-block;
  .locationText {
    display: flex;
    margin-top: 3.4rem;
    align-items: center;
    justify-content: center;
  }
`;
const ServiceBlock = styled.div`
  display: flex;
  width: 128rem;
  margin: 0 auto;

  border-bottom: 1.5px solid #979797;
`;
const ServiceBox = styled.div`
  display: block;
  margin: 5rem 2.8rem 5rem 0;
  text-align: center;
`;

const About = styled.div`
  width: 128rem;
  margin: 0 auto;
  border-bottom: 1.5px solid #979797;
  .Aboutbox {
    display: flex;
    margin-bottom: 0.8rem;
    align-items: center;
    :last-child {
      margin-bottom: 4rem;
    }
  }
`;

export default HotelsAbout;
