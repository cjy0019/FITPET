import React from 'react';
import styled from 'styled-components';
import {
  BasicBox,
  FillBox,
  Font,
  IconButton,
  MiddleBtn,
  WishSmall,
} from '../../../common';
import HotelTypeSearch from '../hotel_common/HotelTypeSearch';

const HotelMain = () => {
  return (
    <HotelMainWraper>
      {/* 숙소 검색창 */}
      <HotelSearchBlock>
        <div>
          <div className='searchBox'>
            <Font fontSize='3.8rem' fontWeight='bold' mb='3.4rem' color='#fff'>
              어떤 숙소에서 쉬어볼까요?
            </Font>
            {/* 검색 입력 창 */}
            <HotelTypeSearch />
          </div>
          <div className='MoreHotelBtn'>
            <MiddleBtn style={{ marginTop: '4.4rem' }}>
              다양한 숙소 둘러보기
            </MiddleBtn>
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
              <BasicBox
                width='40rem'
                height='40rem'
                margin='0 4rem 6rem 0'
                borderRadius='30px'
                text='올 여름은 애견 수영장에서'></BasicBox>
              <BasicBox
                width='40rem'
                height='52rem'
                margin='0 4rem 0 0'
                borderRadius='30px'></BasicBox>
            </div>
            <div className='line'>
              <BasicBox
                width='40rem'
                height='52rem'
                margin='0 4rem 6rem 0'
                borderRadius='30px'></BasicBox>
              <BasicBox
                width='40rem'
                height='40rem'
                margin='0 4rem 0 0'
                borderRadius='30px'></BasicBox>
            </div>
            <div className='line'>
              <BasicBox
                width='40rem'
                height='40rem'
                margin='0 4rem 6rem 0'
                borderRadius='30px'></BasicBox>
              <BasicBox
                width='40rem'
                height='52rem'
                margin='0 4rem 0 0'
                borderRadius='30px'></BasicBox>
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
                <IconButton
                  text='제주도'
                  backColor='#eeeeee'
                  color='#979797'
                  pt='1.1rem'
                  pr='1.9rem'
                  pl='1.9rem'
                  pb='1rem'
                  fontSize='1.6rem'
                  borderRadius='2.6rem'
                  textHover='#ffffff'
                  hoverColor='#2A2A2A'
                  border='none'
                  mb='1rem'
                />
                <IconButton
                  text='속초'
                  backColor='#eeeeee'
                  color='#979797'
                  pt='1.1rem'
                  pr='1.9rem'
                  pl='1.9rem'
                  pb='1rem'
                  fontSize='1.6rem'
                  borderRadius='2.6rem'
                  textHover='#ffffff'
                  hoverColor='#2A2A2A'
                  border='none'
                  mb='1rem'
                />
                <IconButton
                  text='전주'
                  backColor='#eeeeee'
                  color='#979797'
                  pt='1.1rem'
                  pr='1.9rem'
                  pl='1.9rem'
                  pb='1rem'
                  fontSize='1.6rem'
                  borderRadius='2.6rem'
                  textHover='#ffffff'
                  hoverColor='#2A2A2A'
                  border='none'
                  mb='1rem'
                />
                <IconButton
                  text='부산'
                  backColor='#eeeeee'
                  color='#979797'
                  pt='1.1rem'
                  pr='1.9rem'
                  pl='1.9rem'
                  pb='1rem'
                  fontSize='1.6rem'
                  borderRadius='2.6rem'
                  textHover='#ffffff'
                  hoverColor='#2A2A2A'
                  border='none'
                  mb='1rem'
                />
              </div>
            </HotelLocationWrapper>
          </div>
          <div className='hotelSlider'>
            <FillBox />
            <FillBox margin='0 3rem 0 3rem' />
            <FillBox />
          </div>
        </div>
      </HotelListBlock>

      {/* 띠배너 부분 */}
      <BandBanner img={'/img/linebanner.png'} />
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
    </HotelMainWraper>
  );
};

const HotelMainWraper = styled.div`
  max-width: 100%;
  margin-top: 8rem;
`;
const HotelSearchBlock = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  height: 74.4rem;
  background-color: ${(props) => props.theme.grey3_color};
  .searchBox {
    width: 108rem;
  }
  .MoreHotelBtn {
    display: flex;
    justify-content: center;
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
    .hotelSlider {
      margin-top: 15rem;
      margin-left: 37rem;
      position: absolute;
      display: flex;
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
  background-color: ${(props) => props.theme.grey2_color};
  line-height: 1.3; // 줄 간격
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
