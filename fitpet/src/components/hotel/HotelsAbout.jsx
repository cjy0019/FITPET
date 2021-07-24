import React from 'react';
import styled from 'styled-components';
import { Font, IconButton, SampleIcon } from '../../common';
import HotelNameBlock from './HotelNameBlock';
import HotelOneRoom from './HotelOneRoom';
import HotelTwoRoom from './HotelTwoRoom';
import OtherHotelSlider from './OtherHotelSlider';

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
          <SampleIcon width='12.5rem' height='12.5rem' />
          <Font fontSize='2rem' fontWeight='normal' color='#707070' mt='0.7rem'>
            소형견
          </Font>
        </ServiceBox>
        <ServiceBox>
          <SampleIcon width='12.5rem' height='12.5rem' />
          <Font fontSize='2rem' fontWeight='normal' color='#707070' mt='0.7rem'>
            운동장
          </Font>
        </ServiceBox>
        <ServiceBox>
          <SampleIcon width='12.5rem' height='12.5rem' />
          <Font fontSize='2rem' fontWeight='normal' color='#707070' mt='0.7rem'>
            무료주차
          </Font>
        </ServiceBox>
        <ServiceBox>
          <SampleIcon width='12.5rem' height='12.5rem' />
          <Font fontSize='2rem' fontWeight='normal' color='#707070' mt='0.7rem'>
            피트니스
          </Font>
        </ServiceBox>
        <ServiceBox>
          <SampleIcon width='12.5rem' height='12.5rem' />
          <Font fontSize='2rem' fontWeight='normal' color='#707070' mt='0.7rem'>
            비즈니스센터
          </Font>
        </ServiceBox>
        <ServiceBox>
          <SampleIcon width='12.5rem' height='12.5rem' />
          <Font fontSize='2rem' fontWeight='normal' color='#707070' mt='0.7rem'>
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
        <div className='aboutBox'>
          <SampleIcon />
          <Font
            fontSize='1.6rem'
            fontWeight='normal'
            color='#979797'
            ml='0.6rem'>
            서귀포시 노연로 80
          </Font>
        </div>

        <div className='aboutBox'>
          <SampleIcon />
          <Font
            fontSize='1.6rem'
            fontWeight='normal'
            color='#979797'
            ml='0.6rem'>
            체크인 15:00 PM - 체크아웃 12:00 PM
          </Font>
        </div>
        <div className='aboutBox'>
          <SampleIcon />
          <Font
            fontSize='1.6rem'
            fontWeight='normal'
            color='#979797'
            ml='0.6rem'>
            11층 / 800객실
          </Font>
        </div>
        <div className='aboutBox'>
          <SampleIcon />
          <Font
            fontSize='1.6rem'
            fontWeight='normal'
            color='#979797'
            ml='0.6rem'>
            전화 82-64-908-8800
          </Font>
        </div>
        <div className='aboutBox'>
          <SampleIcon />
          <Font
            fontSize='1.6rem'
            fontWeight='normal'
            color='#979797'
            ml='0.6rem'>
            팩스 82-64-908-8811
          </Font>
        </div>
      </About>
      {/* 객실 선택 */}
      <RoomChoose>
        <Font
          fontSize='2.4rem'
          fontWeight='bold'
          color='#707070'
          mt='6rem'
          mb='3.3rem'>
          객실 선택
        </Font>
        <div class='RoomBox'>
          <IconButton
            text='조식포함'
            backColor='#ffffff'
            height='40px'
            pr='1.2rem'
            pl='1.2rem'
            color='#707070'
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
            color='#707070'
            fontSize='1.4rem'
            borderRadius='7px'
            border='solid 1px #707070'
            mr='1rem'
          />
        </div>
        <Font fontSize='1.6rem' fontWeight='normal' color='#707070' mb='1.4rem'>
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
      {/* 숙소 상세정보 */}
      <HotelDetail>
        <Font
          fontSize='2.4rem'
          fontWeight='bold'
          color='#707070'
          mt='4rem'
          mb='2rem'>
          숙소 상세정보
        </Font>
        <div className='guideBlock'>
          <div className='guideBox'>
            <div className='title'>
              <Font fontSize='2rem' fontWeight='normal' color='#979797'>
                반려동물 동반 안내
              </Font>
            </div>
            <div className='contents'>
              <Font fontSize='1.6rem' fontWeight='normal' color='#979797'>
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
              <Font fontSize='2rem' fontWeight='normal' color='#979797'>
                숙소 안내
              </Font>
            </div>
            <div className='contents'>
              <Font fontSize='1.6rem' fontWeight='normal' color='#979797'>
                [ 입·퇴실 안내 ]<br />
                - 체크인 15:00PM - 체크아웃 12:00PM
                <br />
                - 객실 내 유무선 인터넷 무료로 이용 가능
                <br />
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
          <Font fontSize='2.4rem' fontWeight='bold' color='#707070' mt='4rem'>
            편의시설 및 서비스
          </Font>
        </div>
        {/* 편의시설 및 서비스 아이콘들 */}
        <div className='contents'>
          <div className='icons'>
            <SampleIcon
              width='5rem'
              height='5rem'
              backColor='#cbcbcb'
              borderRadius='50px'
            />
            <SampleIcon
              width='5rem'
              height='5rem'
              backColor='#cbcbcb'
              borderRadius='50px'
            />
            <SampleIcon
              width='5rem'
              height='5rem'
              backColor='#cbcbcb'
              borderRadius='50px'
            />
            <SampleIcon
              width='5rem'
              height='5rem'
              backColor='#cbcbcb'
              borderRadius='50px'
            />
            <SampleIcon
              width='5rem'
              height='5rem'
              backColor='#cbcbcb'
              borderRadius='50px'
            />
            <SampleIcon
              width='5rem'
              height='5rem'
              backColor='#cbcbcb'
              borderRadius='50px'
            />
            <SampleIcon
              width='5rem'
              height='5rem'
              backColor='#cbcbcb'
              borderRadius='50px'
            />
          </div>
          <div className='iconNames'>
            <div>
              <Font fontSize='1.6rem' fontWeight='normal' color='#979797'>
                와이파이
              </Font>
            </div>{' '}
            <div>
              <Font fontSize='1.6rem' fontWeight='normal' color='#979797'>
                무료주차
              </Font>
            </div>{' '}
            <div>
              <Font fontSize='1.6rem' fontWeight='normal' color='#979797'>
                피트니스 센터
              </Font>
            </div>{' '}
            <div>
              <Font fontSize='1.6rem' fontWeight='normal' color='#979797'>
                수영장
              </Font>
            </div>{' '}
            <div>
              <Font fontSize='1.6rem' fontWeight='normal' color='#979797'>
                운동장
              </Font>
            </div>{' '}
            <div>
              <Font fontSize='1.6rem' fontWeight='normal' color='#979797'>
                24시 리셉션
              </Font>
            </div>{' '}
            <div>
              <Font fontSize='1.6rem' fontWeight='normal' color='#979797'>
                수하물보관
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
          color='#707070'
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
  border-bottom: 1.5px solid #979797;
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
    margin-left: auto;
    margin-top: 4rem;
    margin-bottom: 10.4rem;
    line-height: 20px;
    .icons {
      display: flex;
      margin-bottom: 1rem;
      div {
        margin: 0 auto;
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

export default HotelsAbout;
