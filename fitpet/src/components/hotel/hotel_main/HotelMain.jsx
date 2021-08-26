import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Font, MiddleBtn, WishSmall, SmallBtn } from '../../../common';
import ImageBox from '../../../common/contents/common/ImageBox';
import MainNav from '../../mainpage/banner/MainNav';
import HotelTypeSearch from '../hotel_common/HotelTypeSearch';
import HotelSlider from './HotelSlider';

const HotelMain = () => {
  return (
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
                to='/accomodations?page=1'
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
                img={'/img/hotel/hotel_main/fitpet_event/4.png'}
              />
            </div>
            <div className='line'>
              <ImageBox
                height='52rem'
                img={'/img/hotel/hotel_main/fitpet_event/2.png'}></ImageBox>
              <ImageBox
                height='40rem'
                img={'/img/hotel/hotel_main/fitpet_event/5.png'}></ImageBox>
            </div>
            <div className='line'>
              <ImageBox
                height='40rem'
                img={'/img/hotel/hotel_main/fitpet_event/3.png'}
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
      <HotelListBlock>
        <div className='hotelListBox'>
          <div className='locationBox'>
            <HotelLocationWrapper>
              <Font
                fontSize='3rem'
                fontWeight='normal'
                color='#ffffff'
                mb='5rem'>
                반려동물과 함께 <br />
                펫캉스 즐기자!
              </Font>
              <div className='tagBox'>
                <div>
                  <SmallBtn style={{ marginBottom: '1rem' }}>제주도</SmallBtn>
                </div>
                <div>
                  <SmallBtn style={{ marginBottom: '1rem' }}>속초</SmallBtn>
                </div>
                <div>
                  <SmallBtn style={{ marginBottom: '1rem' }}>전주</SmallBtn>
                </div>
                <div>
                  <SmallBtn style={{ marginBottom: '1rem' }}>부산</SmallBtn>
                </div>
              </div>
            </HotelLocationWrapper>
          </div>
          {/* 호텔 슬라이드 부분 */}
          <HotelSlider />
        </div>
      </HotelListBlock>

      {/* 띠배너 부분 */}
      <BandBanner img={'/img/hotel/hotel_main/banner.png'} />
      {/* 지금 이 숙소가 인기있어요 */}
      <PopularHotels>
        <TextBlock>
          <Font color='#2A2A2A' fontSize='4.2rem' fontWeight='bold' mb='2.6rem'>
            지금 이 숙소가 인기있어요
          </Font>
        </TextBlock>
        <div className='popularHotelsBox'>
          <PopularHotel>
            <WishSmall margin='0 4rem 0 0'></WishSmall>
            <Font
              color='#2A2A2A'
              fontSize='1.8rem'
              margin='1.4rem 0 3.8rem 2.3rem'>
              <span className='smallFont'>호텔 | 5성급</span>
              <span>
                <br />
                롯데호텔 제주
                <br />
                44,900
              </span>
              <span className='smallPrice'>~ 50,000</span>
            </Font>
          </PopularHotel>
          <PopularHotel>
            <WishSmall margin='0 4rem 0 0'></WishSmall>
            <Font
              color='#2A2A2A'
              fontSize='1.8rem'
              margin='1.4rem 0 3.8rem 2.3rem'>
              <span className='smallFont'>호텔 | 5성급</span>
              <span>
                <br />
                롯데호텔 제주
                <br />
                44,900
              </span>
              <span className='smallPrice'>~ 50,000</span>
            </Font>
          </PopularHotel>
          <PopularHotel>
            <WishSmall margin='0 4rem 0 0'></WishSmall>
            <Font
              color='#2A2A2A'
              fontSize='1.8rem'
              margin='1.4rem 0 3.8rem 2.3rem'>
              <span className='smallFont'>호텔 | 5성급</span>
              <span>
                <br />
                롯데호텔 제주
                <br />
                44,900
              </span>
              <span className='smallPrice'>~ 50,000</span>
            </Font>
          </PopularHotel>
          <PopularHotel>
            <WishSmall margin='0 4rem 0 0'></WishSmall>
            <Font
              color='#2A2A2A'
              fontSize='1.8rem'
              margin='1.4rem 0 3.8rem 2.3rem'>
              <span className='smallFont'>호텔 | 5성급</span>
              <span>
                <br />
                롯데호텔 제주
                <br />
                44,900
              </span>
              <span className='smallPrice'>~ 50,000</span>
            </Font>
          </PopularHotel>
        </div>
        <div className='popularHotelsBox'>
          <PopularHotel>
            <WishSmall margin='0 4rem 0 0'></WishSmall>
            <Font
              color='#2A2A2A'
              fontSize='1.8rem'
              margin='1.4rem 0 3.8rem 2.3rem'>
              <span className='smallFont'>호텔 | 5성급</span>
              <span>
                <br />
                롯데호텔 제주
                <br />
                44,900
              </span>
              <span className='smallPrice'>~ 50,000</span>
            </Font>
          </PopularHotel>
          <PopularHotel>
            <WishSmall margin='0 4rem 0 0'></WishSmall>
            <Font
              color='#2A2A2A'
              fontSize='1.8rem'
              margin='1.4rem 0 3.8rem 2.3rem'>
              <span className='smallFont'>호텔 | 5성급</span>
              <span>
                <br />
                롯데호텔 제주
                <br />
                44,900
              </span>
              <span className='smallPrice'>~ 50,000</span>
            </Font>
          </PopularHotel>
          <PopularHotel>
            <WishSmall margin='0 4rem 0 0'></WishSmall>
            <Font
              color='#2A2A2A'
              fontSize='1.8rem'
              margin='1.4rem 0 3.8rem 2.3rem'>
              <span className='smallFont'>호텔 | 5성급</span>
              <span>
                <br />
                롯데호텔 제주
                <br />
                44,900
              </span>
              <span className='smallPrice'>~ 50,000</span>
            </Font>
          </PopularHotel>
          <PopularHotel>
            <WishSmall margin='0 4rem 0 0'></WishSmall>
            <Font
              color='#2A2A2A'
              fontSize='1.8rem'
              margin='1.4rem 0 3.8rem 2.3rem'>
              <span className='smallFont'>호텔 | 5성급</span>
              <span>
                <br />
                롯데호텔 제주
                <br />
                44,900
              </span>
              <span className='smallPrice'>~ 50,000</span>
            </Font>
          </PopularHotel>
        </div>
      </PopularHotels>
    </HotelMainWrapper>
  );
};

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
const HotelListBlock = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.grey3_color};
  height: 55.6rem;
  .hotelListBox {
    display: flex;
    width: 128rem;
    height: 55.6rem;
    .locationBox {
      margin-top: 10rem;
      position: absolute;
    }
  }
`;
const HotelLocationWrapper = styled.div`
  width: 44rem;
  height: 57.2rem;
  color: ${(props) => props.theme.white_color};
  padding: 5rem 0 0 5rem;
  position: absolute;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/img/hotel/hotel_main/locationBox.png');
  line-height: 1.3; // 줄 간격
  .tagBox {
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
export default HotelMain;
