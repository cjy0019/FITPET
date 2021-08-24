import React from 'react';
import styled from 'styled-components';
import theme from '../../../assets/theme';
import { Font, SampleIcon } from '../../../common';
import ImgMoreBtn from '../../../common/buttons/small_size/ImgMoreBtn';
import HotelNameBlock from '../hotel_about/HotelNameBlock';
import HotelOneRoom from '../hotel_about/HotelOneRoom';
import HotelTwoRoom from '../hotel_about/HotelTwoRoom';
import OthertravelersHotels from './room_scroll/OthertravelersHotels';
import RoomChoose from './room_scroll/RoomChoose';
import RoomDetailInfo from './room_scroll/RoomDetailInfo';
import RoomService from './room_scroll/RoomService';

const HotelAbout = ({ showRoomDetail, roomDetailOpen, hideRoomDetail }) => {
  return (
    <HotelsAboutWrapper>
      {/* 숙소 이미지 3장 */}
      <HotelImages>
        <SampleIcon width='88rem' height='50rem' mr='1rem' />
        {/* 숙소 서브 사진들 */}
        <div className='subImage'>
          <SampleIcon width='39rem' height='24.5rem' mb='1rem' />
          <div className='imgBtn'>
            <SampleIcon width='39rem' height='24.5rem' />
            <ImgMoreBtn position='absolute' top='18rem' right='1rem' />
          </div>{' '}
        </div>
      </HotelImages>
      {/* 숙소 상세 내용 */}
      <Contents>
        {/* 상세내용 왼쪽 (숙소 이름, 편의시설..) */}
        <ContentsLeft>
          <HotelNameBlock />
          {/* 찜, 공유 */}
          <div className='icons'>
            <button className='icon'>
              <img src='/img/icon/likeicon2.png' alt='찜하기' />
            </button>
            <button className='icon'>
              <img src='/img/icon/share.png' alt='공유하기' />
            </button>
            {/* <SampleIcon>
              <img src='/img/icon/bluestaricon.svg' alt='평점' />
            </SampleIcon>
            <SampleIcon ml='1rem' mr='2.4rem'></SampleIcon> */}
          </div>
        </ContentsLeft>
        {/* 상세내용 오른쪽 (숙소 가격) */}
        <ContentsRight>
          <PriceBlock>
            <p className='amount'>446,490 ~</p>
            <span className='price'> 원</span>
          </PriceBlock>
          <Font
            fontSize='1.4rem'
            fontWeight='normal'
            color='#707070'
            mb='1.4rem'>
            1박 요금 최저가 (세금, 봉사료 포함)
          </Font>
          <HotelLocationBlock>
            <div className='locationText'>
              <SampleIcon />
              <Font
                fontSize='1.6rem'
                fontWeight='normal'
                color='#979797'
                ml='0.6rem'>
                서귀포시 노연로 80
              </Font>
            </div>
          </HotelLocationBlock>
        </ContentsRight>
      </Contents>
      {/* 서비스 및 편의시설 */}
      <ServiceBlock>
        <ServiceBox>
          <img src='/img/icon/smallPet.png' alt='소형견' />
          <Font
            fontSize='1.2rem'
            fontWeight='normal'
            color='#2a2a2a'
            mt='0.6rem'>
            소형견
          </Font>
        </ServiceBox>
        <ServiceBox>
          <img src='/img/icon/mediumPet.png' alt='중형견' />
          <Font
            fontSize='1.2rem'
            fontWeight='normal'
            color='#2a2a2a'
            mt='0.6rem'>
            중형견
          </Font>
        </ServiceBox>
        <ServiceBox>
          <img src='/img/icon/withPet.png' alt='반려동물 동반' />
          <Font
            fontSize='1.2rem'
            fontWeight='normal'
            color='#2a2a2a'
            mt='0.6rem'>
            반려동물 <br />
            동반
          </Font>
        </ServiceBox>
        <ServiceBox>
          <img src='/img/icon/stadium.png' alt='반려동물 운동장' />
          <Font
            fontSize='1.2rem'
            fontWeight='normal'
            color='#2a2a2a'
            mt='0.6rem'>
            반려동물
            <br />
            운동장
          </Font>
        </ServiceBox>
        <ServiceBox>
          <img src='/img/icon/petPool.png' alt='반려동물 수영장' />
          <Font
            fontSize='1.2rem'
            fontWeight='normal'
            color='#2a2a2a'
            mt='0.6rem'>
            반려동물
            <br />
            수영장
          </Font>
        </ServiceBox>
        <ServiceBox>
          <img src='/img/icon/wifi.png' alt='와이파이' />
          <Font
            fontSize='1.2rem'
            fontWeight='normal'
            color='#2a2a2a'
            mt='0.6rem'>
            와이파이
          </Font>
        </ServiceBox>
        <ServiceBox>
          <img src='/img/icon/fitness.png' alt='피트니스 센터' />
          <Font
            fontSize='1.2rem'
            fontWeight='normal'
            color='#2a2a2a'
            mt='0.6rem'>
            피트니스
            <br />
            센터
          </Font>
        </ServiceBox>
        <ServiceBox>
          <img src='/img/icon/pool.png' alt='수영장' />
          <Font
            fontSize='1.2rem'
            fontWeight='normal'
            color='#2a2a2a'
            mt='0.6rem'>
            수영장
          </Font>
        </ServiceBox>
        <ServiceBox>
          <img src='/img/icon/freeParking.png' alt='무료주차' />
          <Font
            fontSize='1.2rem'
            fontWeight='normal'
            color='#2a2a2a'
            mt='0.6rem'>
            무료주차
          </Font>
        </ServiceBox>
        <ServiceBox>
          <img src='/img/icon/reception.png' alt='24시 리셉션' />
          <Font
            fontSize='1.2rem'
            fontWeight='normal'
            color='#2a2a2a'
            mt='0.6rem'>
            24시
            <br />
            리셉션
          </Font>
        </ServiceBox>
      </ServiceBlock>
      {/* 숙소 정보 */}
      <About>
        <Font
          fontSize='2.4rem'
          fontWeight='bold'
          color='#2a2a2a'
          mt='4rem'
          mb='1.4rem'>
          숙소정보
        </Font>
        <div className='aboutBox'>
          <img src='/img/icon/location.png' alt='위치' />
          <Font
            fontSize='1.6rem'
            fontWeight='normal'
            color='#2a2a2a'
            ml='0.6rem'>
            서귀포시 노연로 80
          </Font>
        </div>

        <div className='aboutBox'>
          <img src='/img/icon/chekInOut.png' alt='체크인 체크아웃' />
          <Font
            fontSize='1.6rem'
            fontWeight='normal'
            color='#2a2a2a'
            ml='0.6rem'>
            체크인 15:00 PM - 체크아웃 12:00 PM
          </Font>
        </div>
        <div className='aboutBox'>
          <img src='/img/icon/guestRoom.png' alt='객실' />
          <Font
            fontSize='1.6rem'
            fontWeight='normal'
            color='#2a2a2a'
            ml='0.6rem'>
            11층 / 800객실
          </Font>
        </div>
        <div className='aboutBox'>
          <img src='/img/icon/phone.png' alt='전화' />
          <Font
            fontSize='1.6rem'
            fontWeight='normal'
            color='#2a2a2a'
            ml='0.6rem'>
            전화 82-64-908-8800
          </Font>
        </div>
        <div className='aboutBox'>
          <img src='/img/icon/fax.png' alt='팩스' />
          <Font
            fontSize='1.6rem'
            fontWeight='normal'
            color='#2a2a2a'
            ml='0.6rem'>
            팩스 82-64-908-8811
          </Font>
        </div>
      </About>
      {/* 객실 선택 */}
      <div id='roomChoose'>
        <RoomChoose />
        <HotelTwoRoom />
        <HotelOneRoom
          showRoomDetail={showRoomDetail}
          roomDetailOpen={roomDetailOpen}
          hideRoomDetail={hideRoomDetail}
        />
        <HotelTwoRoom />
        <HotelTwoRoom />
        <HotelOneRoom />
      </div>
      {/* 숙소 상세정보 */}
      <RoomDetailInfo />
      {/* 편의시설 및 서비스 */}
      <RoomService />
      {/* 다른 여행객이 함께 본 숙소 */}
      <OthertravelersHotels />
    </HotelsAboutWrapper>
  );
};

const HotelsAboutWrapper = styled.div`
  max-width: 100%;
  margin-top: 12rem;
`;
const HotelImages = styled.div`
  // background-color: aliceblue;
  margin: 2.6rem auto 4rem;
  width: 128rem;
  display: flex;
  .subImage {
    display: block;
  }
  .imgBtn {
    position: relative;
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
  border-right: 0.5px solid ${theme.grey4_color};
  .icons {
    display: flex;
    margin-right: 1.4rem;
    margin-left: auto;
    .icon {
      width: 3.4rem;
      height: 3.4rem;
      margin-right: 1rem;
    }
  }
`;
const ContentsRight = styled.div`
  display: block;
  margin-left: 2.4rem;
`;
const PriceBlock = styled.div`
  display: flex;
  text-align: center;
  margin-bottom: 0.6rem;
  .amount {
    font-size: 3.2rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.75;
    letter-spacing: -0.64px;
    text-align: left;
    color: ${theme.black1_color};
  }
  .price {
    font-size: 2.4rem;
    font-weight: 500;
    color: ${theme.black1_color};
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
  border-bottom: 1px solid #979797;
`;
const ServiceBox = styled.div`
  line-height: 1.16;
  height: 16.4rem;
  display: block;
  padding: 4rem 0 4rem 0;
  text-align: center;
  margin-right: 1.6rem;
`;
const About = styled.div`
  width: 128rem;
  margin: 0 auto;
  border-bottom: 1px solid #979797;
  .aboutBox {
    display: flex;
    margin-bottom: 0.8rem;
    align-items: center;
    :last-child {
      margin-bottom: 4rem;
    }
  }
`;

export default HotelAbout;
