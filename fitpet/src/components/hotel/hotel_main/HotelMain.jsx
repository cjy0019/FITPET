import React from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Font, MiddleBtn } from '../../../common';
import ImageBox from '../../../common/contents/common/ImageBox';
import MainNav from '../../mainpage/banner/MainNav';
import Modal from '../../modal/Modal';
import HotelTypeSearch from '../hotel_common/HotelTypeSearch';
import HotelListBlock from './HotelListBlock';

const HotelMain = ({ hitsList, isLoading }) => {
  const IMG_API = 'http://www.ongyeol.com:61010/public';
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
      <HotelMainWrapper>
        {/* 숙소 검색창 */}
        <HotelSearchBlock>
          <div className='HotelSearchBox'>
            <div className='navBox'>
              <MainNav />
            </div>
            <div>
              <div className='searchBox'>
                <Font
                  fontSize='3.8rem'
                  fontWeight='bold'
                  mb='3.4rem'
                  color='#fff'>
                  어떤 숙소에서 쉬어볼까요?
                </Font>
                {/* 검색 입력 창 */}
                <HotelTypeSearch />
              </div>
              <div className='MoreHotelBtn'>
                <NavLink
                  to='/accomodations/hotels?page=1'
                  style={{ marginTop: '14.3rem' }}>
                  <MiddleBtn>다양한 숙소 둘러보기</MiddleBtn>
                </NavLink>
              </div>
            </div>
          </div>
        </HotelSearchBlock>
        {/* 핏펫에서 지금 뜨는 혜택 */}
        <FitPetEventBlock>
          <div>
            <Font
              fontSize='3.8rem'
              fontWeight='bold'
              mt='12rem'
              mb='3.4rem'
              color='#2A2A2A'>
              핏펫에서 지금 뜨는 혜택!
            </Font>
            {/* 핏펫에서 지금 뜨는 혜택! 이미지 블럭 */}
            <EventBlock>
              <div className='line'>
                <ImageBox
                  height='40rem'
                  img={'/img/hotel/hotel_main/fitpet_event/1.png'}
                />
                <ImageBox
                  height='52rem'
                  img={'/img/hotel/hotel_main/fitpet_event/2.png'}
                />
              </div>
              <div className='line'>
                <ImageBox
                  height='52rem'
                  img={'/img/hotel/hotel_main/fitpet_event/3.png'}
                />
                <ImageBox
                  height='40rem'
                  img={'/img/hotel/hotel_main/fitpet_event/4.png'}
                />
              </div>
              <div className='line'>
                <ImageBox
                  height='40rem'
                  img={'/img/hotel/hotel_main/fitpet_event/5.png'}
                />
                <ImageBox
                  height='52rem'
                  img={'/img/hotel/hotel_main/fitpet_event/6.png'}
                />
              </div>
            </EventBlock>
          </div>
        </FitPetEventBlock>
        {/* 반려동물과 함게 펫캉스 즐기자! */}
        <HotelListBlock />
        {/* 띠배너 부분 */}
        <BandBanner img={'/img/hotel/hotel_main/banner.png'} />
        {/* 지금 이 숙소가 인기있어요 */}
        <PopularHotels>
          <TextBlock>
            <Font
              color='#2A2A2A'
              fontSize='4.2rem'
              fontWeight='bold'
              mb='2.6rem'>
              지금 이 숙소가 인기있어요
            </Font>
          </TextBlock>
          <div className='popularHotelsBox'>
            {hitsList.map((hotel, i) => {
              return (
                <PopularHotel key={i}>
                  <div className='imgBox'>
                    <img
                      src={IMG_API + hotel.lodgingImg}
                      alt={hotel.lodgingImg}
                    />
                    <LikeBtn />
                  </div>
                  <Font
                    color='#2A2A2A'
                    fontSize='1.8rem'
                    margin='1.4rem 0 3.8rem 2.3rem'>
                    <span className='smallFont'>
                      {hotel.lodgingTypeKr}| {hotel.lodgingClass}
                    </span>
                    <span>
                      <br />
                      {hotel.lodgignName}
                      <br />
                      {hotel.lodgingMinMoney.toLocaleString()}
                    </span>
                    <span className='smallPrice'>
                      ~ {hotel.lodgingMaxMoney.toLocaleString()}
                    </span>
                  </Font>
                </PopularHotel>
              );
            })}
          </div>
        </PopularHotels>
      </HotelMainWrapper>
    </>
  );
};

const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 25rem;
    height: 25rem;
  }
`;

const HotelMainWrapper = styled.div`
  max-width: 100%;
  margin-top: 8rem;
`;
const HotelSearchBlock = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/img/hotel/hotel_main/mainImg.png');
  .HotelSearchBox {
    align-items: center;
  }
  .navBox {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 16.5rem;
  }
  .searchBox {
    width: 108rem;
  }
  .MoreHotelBtn {
    display: flex;
    justify-content: center;
    margin-bottom: 17.6rem;
  }
`;
const FitPetEventBlock = styled.div`
  width: 128rem;
  display: flex;
  margin: 0 auto;
  margin-bottom: 12rem;
`;
const EventBlock = styled.div`
  display: flex;
  .line {
    display: block;
  }
`;
const BandBanner = styled.div`
  margin: 0 auto;
  width: 128rem;
  margin-top: 23.8rem;
  margin-bottom: 12rem;
  height: 17rem;
  text-align: center;
  justify-content: center;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
`;
const PopularHotels = styled.div`
  margin: 0 auto;
  width: 128rem;
  display: block;
  margin-bottom: 12rem;
  .popularHotelsBox {
    display: flex;
    flex-wrap: wrap;
    li {
      :not(:nth-child(4n)) {
        margin-right: 4rem;
      }
    }
  }
`;
const TextBlock = styled.div`
  margin: 0 auto;
`;
const PopularHotel = styled.li`
  position: relative;
  .smallFont {
    font-size: 1.4rem;
    font-weight: 600;
  }
  .imgBox {
    img {
      width: 29rem;
      height: 29rem;
      border-radius: 25px;
    }
    cursor: pointer;
  }
  span {
    font-weight: bold;
  }
  p {
    line-height: 25px;
  }
  .smallPrice {
    margin-left: 1rem;
    font-size: 1.8rem;
    font-weight: normal;
  }
`;
export const LikeBtn = styled.div`
  position: absolute;
  top: 1.4rem;
  right: 2.4rem;
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  background: url('/img/icon/likeicon.png') no-repeat;
`;
export default HotelMain;
