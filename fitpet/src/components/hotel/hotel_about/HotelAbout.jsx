import React, { useEffect } from 'react';
import styled from 'styled-components';
import theme from '../../../assets/theme';
import { Font, SampleIcon } from '../../../common';
import ImgMoreBtn from '../../../common/buttons/small_size/ImgMoreBtn';
import Modal from '../../modal/Modal';
import HotelNameBlock from '../hotel_about/HotelNameBlock';
import HotelOneRoom from '../hotel_about/HotelOneRoom';
import HotelTwoRoom from '../hotel_about/HotelTwoRoom';
import HotelService from './HotelService';
import OthertravelersHotels from './room_scroll/OthertravelersHotels';
import RoomChoose from './room_scroll/RoomChoose';
import RoomDetailInfo from './room_scroll/RoomDetailInfo';
import RoomService from './room_scroll/RoomService';

const HotelAbout = ({
  showRoomDetail,
  roomDetailOpen,
  hideRoomDetail,
  options,
  isLoading,
}) => {
  // 210905 by.dy
  // 숙소 상세보기 이미지 추가
  const IMG_API = 'http://211.219.114.239:61010/public';
  const IMG2_URL = IMG_API + options.lodgingImg2;
  const IMG3_URL = IMG_API + options.lodgingImg3;
  const IMG4_URL = IMG_API + options.lodgingImg4;

  useEffect(() => {
    if (isLoading) {
      document.body.style.cssText = `
      position:fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;
    `;
    }

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(window.scrollY, parseInt(scrollY || '0', 10) * -1);
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <Modal>
          <Center>
            <img src='/img/loading.gif' alt='loading spinner' />
          </Center>
        </Modal>
      )}
      <HotelsAboutWrapper>
        {/* 숙소 이미지 3장 */}
        <HotelImages>
          <div style={{ marginRight: '1rem' }}>
            <img
              style={{ width: '88rem', height: '50rem' }}
              src={IMG2_URL}
              alt={IMG2_URL}
            />
          </div>
          {/* 숙소 서브 사진들 */}
          <div className='subImage'>
            <img
              style={{
                width: '39rem',
                height: '24.5rem',
                marginBottom: '1rem',
              }}
              src={IMG3_URL}
              alt={IMG4_URL}
            />
            <div className='imgBtn'>
              <img
                style={{ width: '39rem', height: '24.5rem' }}
                src={IMG4_URL}
                alt={IMG4_URL}
              />
              {/* <ImgMoreBtn position='absolute' top='18rem' right='1rem' /> */}
            </div>{' '}
          </div>
        </HotelImages>
        {/* 숙소 상세 내용 */}
        <Contents>
          {/* 상세내용 왼쪽 (숙소 이름, 편의시설..) */}
          <ContentsLeft>
            <HotelNameBlock options={options} />
            {/* 찜, 공유 */}
            <div className='icons'>
              <button className='icon'>
                <img src='/img/icon/likeicon2.png' alt='찜하기' />
              </button>
              <button className='icon'>
                <img src='/img/icon/share.png' alt='공유하기' />
              </button>
            </div>
          </ContentsLeft>
          {/* 상세내용 오른쪽 (숙소 가격) */}
          <ContentsRight>
            <PriceBlock>
              <p className='amount'>
                {/* {options.lodgingMinMoney.toLocaleString()}~ */}
                {options.lodgingMinMoney} ~
              </p>
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
                  {options.lodgingLocation}
                </Font>
              </div>
            </HotelLocationBlock>
          </ContentsRight>
        </Contents>
        {/* 서비스 및 편의시설 */}
        <HotelService options={options} />
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
              {options.lodgingLocation}
            </Font>
          </div>

          <div className='aboutBox'>
            <img src='/img/icon/chekInOut.png' alt='체크인 체크아웃' />
            <Font
              fontSize='1.6rem'
              fontWeight='normal'
              color='#2a2a2a'
              ml='0.6rem'>
              체크인 {options.lodgingCheckIn} - 체크아웃{' '}
              {options.lodgingCheckOut}
            </Font>
          </div>
          <div className='aboutBox'>
            <img src='/img/icon/guestRoom.png' alt='객실' />
            <Font
              fontSize='1.6rem'
              fontWeight='normal'
              color='#2a2a2a'
              ml='0.6rem'>
              {options.lodgingFloor}층 / {options.lodgingRoomNum}객실
            </Font>
          </div>
          <div className='aboutBox'>
            <img src='/img/icon/phone.png' alt='전화' />
            <Font
              fontSize='1.6rem'
              fontWeight='normal'
              color='#2a2a2a'
              ml='0.6rem'>
              전화 {options.loadingNumber}
            </Font>
          </div>
          <div className='aboutBox'>
            <img src='/img/icon/fax.png' alt='팩스' />
            <Font
              fontSize='1.6rem'
              fontWeight='normal'
              color='#2a2a2a'
              ml='0.6rem'>
              팩스 {options.lodgingFaxNumber}
            </Font>
          </div>
        </About>

        <div className='scroll'>
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
        </div>
      </HotelsAboutWrapper>
    </>
  );
};
export const ImgBox = styled.div`
  position: relative;
  min-width: 22rem;
  height: 22rem;
  border-radius: 18px;
  background-image: url(${(props) => props.IMG_URL});
  background-size: cover;
  background-repeat: no-repeat;
`;
const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 17rem;
    height: 17rem;
  }
`;

const HotelsAboutWrapper = styled.div`
  max-width: 100%;
  // margin-top: 12rem;
  //padding-top: 12rem;
  position: relative;
  box-sizing: inherit;
  top: 12rem;
`;
const HotelImages = styled.div`
  // background-color: aliceblue;
  margin: 2.6rem auto 4rem;
  width: 128rem;
  display: flex;
  .subImage {
    display: block;
    .image1 {
      width: '39rem';
      height: '24.5rem';
      margin-bottom: '1rem';
      background-image: url(${(props) => props.IMG_URL});
      background-size: cover;
      background-repeat: no-repeat;
    }
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
