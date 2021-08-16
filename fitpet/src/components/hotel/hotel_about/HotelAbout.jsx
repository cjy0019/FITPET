import React from 'react';
import styled from 'styled-components';
import theme from '../../../assets/theme';
import { Font, IconButton, SampleIcon } from '../../../common';
import ImgMoreBtn from '../../../common/buttons/small_size/ImgMoreBtn';
import HotelNameBlock from '../hotel_about/HotelNameBlock';
import HotelOneRoom from '../hotel_about/HotelOneRoom';
import HotelTwoRoom from '../hotel_about/HotelTwoRoom';
import OtherHotelSlider from '../hotel_about/OtherHotelSlider';
import HotelDate from '../hotel_common/HotelDate';

const HotelAbout = () => {
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
        <div className='aboutBox' id='roomChoose'>
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
      <RoomChoose>
        <div className='RoomDateBox'>
          <Font
            fontSize='2.4rem'
            fontWeight='bold'
            color='#2a2a2a'
            mt='1rem'
            mb='3.3rem'>
            객실선택
          </Font>
          <HotelDate mt='5.6rem' />
        </div>
        <div class='RoomBox'>
          <IconButton
            text='조식포함'
            backColor='#ffffff'
            height='40px'
            pr='1.2rem'
            pl='1.2rem'
            color='#2a2a2a'
            fontSize='1.4rem'
            borderRadius='7px'
            border='solid 1px #707070'
            mr='1rem'
          />
          <IconButton
            text='무료 예약 취소 (기간 한정)'
            backColor='#ffffff'
            height='40px'
            pr='1.2rem'
            pl='1.2rem'
            color='#2a2a2a'
            fontSize='1.4rem'
            borderRadius='7px'
            border='solid 1px #707070'
            mr='1rem'
          />
        </div>
        <Font fontSize='1.6rem' fontWeight='normal' color='#2a2a2a' mb='1.4rem'>
          아래 다양한 옵션 중 선택해보세요! 표시된 가격은 세금 및 서비스 요금을
          포함한 1박당 1개 객실 기준입니다. (예약 확정 전에는 요금이 청구되지
          않습니다)
        </Font>
      </RoomChoose>
      <HotelTwoRoom />
      <HotelOneRoom />
      <HotelTwoRoom />
      <HotelTwoRoom />
      <HotelOneRoom />
      {/* 스크롤 이동 [다른 추천 호텔] 지점 */}
      <div id='hotelDetail'></div>
      {/* 숙소 상세정보 */}

      <HotelDetail>
        <Font
          fontSize='2.4rem'
          fontWeight='bold'
          color='#2a2a2a'
          mt='4rem'
          mb='2rem'>
          숙소 상세정보
        </Font>
        <div className='guideBlock'>
          <div className='guideBox'>
            <div className='title'>
              <Font fontSize='2rem' fontWeight='normal' color='#2a2a2a'>
                반려동물 동반 안내
              </Font>
            </div>
            <div className='contents'>
              <Font fontSize='1.6rem' fontWeight='normal' color='#2a2a2a'>
                - 반려동물 동반 가능한 호텔로, 8kg미만 소형견만 입실 가능합니다.
                <br />
                - 반려동물 추가 요금은 별도로 없으며, 반려동물 전용 용품이 기본
                제공됩니다.(샴푸, 칫솔, 비누, 수건, 간식 등)
                <br />
                ※ 개인적으로 사용하는 용품은 개별적으로 지참하시길 바랍니다.
                <br />
                - 캐리어 사용하여 이동 가능하며, 공공장소 방치는 불가합니다.
                <br />- 레스토랑 및 바 이용 시 동반 불가합니다.
              </Font>
            </div>
          </div>
          <div className='guideBox'>
            <div className='title'>
              <Font fontSize='2rem' fontWeight='normal' color='#2a2a2a'>
                숙소 안내
              </Font>
            </div>
            <div className='contents'>
              <Font fontSize='1.6rem' fontWeight='normal' color='#2a2a2a'>
                [ 입·퇴실 안내 ]<br />
                - 체크인 15:00PM - 체크아웃 12:00PM
                <br />- 객실 내 유무선 인터넷 무료로 이용 가능
                {/* 스크롤 이동 [편의시설 및 서비스] 지점 */}
                <br id='hotelService' />
                - 호텔 내 레스토랑 이용 시 10% 할인
                <br />
                - 호텔 내 실내 수영장, 피트니스 센터 무료 입장 (피트니스의 경우
                만 16세 이상 입장 가능)
                <br />
                ※ 코로나로 인해 일시 영업 중단할 수 있습니다.
                <br />
              </Font>
            </div>
          </div>
        </div>
      </HotelDetail>
      {/* 편의시설 및 서비스 */}
      <HotelService>
        <div className='title'>
          <Font fontSize='2.4rem' fontWeight='bold' color='#2a2a2a' mt='4rem'>
            편의시설 및 서비스
          </Font>
        </div>
        {/* 편의시설 및 서비스 아이콘들 */}
        <div className='contents'>
          <div className='iconsBlock'>
            {/* 스크롤 이동 [다른 추천 호텔] 지점 */}
            <div className='iconBox' id='othertravelersHotel'>
              <SampleIcon
                width='5rem'
                height='5rem'
                backColor='#cbcbcb'
                borderRadius='50px'
              />
              <Font fontSize='1.6rem' fontWeight='normal' color='#2a2a2a'>
                와이파이
              </Font>
            </div>
            <div className='iconBox'>
              <SampleIcon
                width='5rem'
                height='5rem'
                backColor='#cbcbcb'
                borderRadius='50px'
              />
              <Font fontSize='1.6rem' fontWeight='normal' color='#2a2a2a'>
                무료주차
              </Font>
            </div>
            <div className='iconBox'>
              <SampleIcon
                width='5rem'
                height='5rem'
                backColor='#cbcbcb'
                borderRadius='50px'
              />
              <Font fontSize='1.6rem' fontWeight='normal' color='#2a2a2a'>
                피트니스 센터
              </Font>
            </div>
            <div className='iconBox'>
              <SampleIcon
                width='5rem'
                height='5rem'
                backColor='#cbcbcb'
                borderRadius='50px'
              />
              <Font fontSize='1.6rem' fontWeight='normal' color='#2a2a2a'>
                수영장
              </Font>
            </div>
            <div className='iconBox'>
              <SampleIcon
                width='5rem'
                height='5rem'
                backColor='#cbcbcb'
                borderRadius='50px'
              />
              <Font fontSize='1.6rem' fontWeight='normal' color='#2a2a2a'>
                운동장
              </Font>
            </div>
            <div className='iconBox'>
              <SampleIcon
                width='5rem'
                height='5rem'
                backColor='#cbcbcb'
                borderRadius='50px'
              />
              <Font fontSize='1.6rem' fontWeight='normal' color='#2a2a2a'>
                24시 리셉션
              </Font>
            </div>
            <div className='iconBox'>
              <SampleIcon
                width='5rem'
                height='5rem'
                backColor='#cbcbcb'
                borderRadius='50px'
              />
              <Font fontSize='1.6rem' fontWeight='normal' color='#2a2a2a'>
                수하물 보관
              </Font>
            </div>
          </div>
        </div>
      </HotelService>
      {/* 다른 여행객이 함께 본 숙소 */}
      <OthertravelersHotel>
        <Font
          fontSize='2.4rem'
          fontWeight='bold'
          color='#2a2a2a'
          mt='4rem'
          mb='1.4rem'>
          다른 여행객이 함께 본 숙소
        </Font>
        <OtherHotelSlider />
      </OthertravelersHotel>
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
  border-bottom: 1.5px solid #979797;
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
  border-bottom: 1.5px solid #979797;
  .aboutBox {
    display: flex;
    margin-bottom: 0.8rem;
    align-items: center;
    :last-child {
      margin-bottom: 4rem;
    }
  }
`;
const RoomChoose = styled.div`
  display: block;
  width: 128rem;
  margin: 0 auto;
  border-bottom: 1px solid #979797;
  padding-top: 5rem;
  .RoomDateBox {
    display: flex;
  }
  .RoomBox {
    display: flex;
    margin-bottom: 2.4rem;
  }
`;
const HotelDetail = styled.div`
  display: block;
  width: 128rem;
  margin: 0 auto;
  border-bottom: 1.5px solid #979797;
  .guideBlock {
    display: block;
  }
  .guideBox {
    display: flex;
    margin-bottom: 4.4rem;
    .title {
      width: 40rem;
      margin-right: auto;
    }
    .contents {
      width: 85rem;
      display: flex;
      margin-left: auto;
      line-height: 25px;
    }
  }
`;
const HotelService = styled.div`
  display: flex;
  width: 128rem;
  margin: 0 auto;
  border-bottom: 0.5px solid #979797;
  .title {
    width: 40rem;
    margin-right: auto;
  }
  .contents {
    width: 85rem;
    display: block;
    margin-right: auto;
    margin-top: 4rem;
    margin-bottom: 10.4rem;
    line-height: 20px;
    .iconsBlock {
      display: flex;
      div {
        margin: auto;
      }
    }
    .iconNames {
      display: flex;
      div {
        margin: 0 auto;
      }
    }
  }
`;
const OthertravelersHotel = styled.div`
  display: block;
  width: 128rem;
  margin: 0 auto 25.6rem;
`;

export default HotelAbout;
