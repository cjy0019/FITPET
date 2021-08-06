import React from 'react';
import styled from 'styled-components';
import {
  Font,
  ImgMoreBtn,
  OpenBtn,
  RoundSquareBtn,
  SampleIcon,
} from '../../../common';

const HotelTwoRoom = () => {
  return (
    <HotelTwoRoomWrapper>
      <div className='roomNameBox'>
        <Font fontSize='2rem' color='#707070' fontWeight='bold' mr='2.4rem'>
          스탠다드 트윈룸
        </Font>
        <Font fontSize='1.6rem' color='#707070' fontWeight='normal'>
          객실크기: 25m
        </Font>
      </div>
      <div className='bedroomsBlock'>
        <div className='imgBtn'>
          <SampleIcon width='39rem' height='24.5rem' borderRadius='2.5rem' />
          <ImgMoreBtn position='absolute' top='18rem' right='1rem' />
        </div>
        <div className='bedroomsBox'>
          {/* 싱글침대 2개, 트윈침대 1개 등등 */}
          <div className='bedroom'>
            <div className='bedroomInfo'>
              <Font fontSize='2rem' color='#707070' fontWeight='bold' mb='2rem'>
                싱글침대 2개
              </Font>
              <div className='aboutBox'>
                <SampleIcon />
                <Font
                  fontSize='1.6rem'
                  fontWeight='normal'
                  color='#979797'
                  ml='0.6rem'>
                  조식 포함
                </Font>
              </div>
              <div className='aboutBox'>
                <SampleIcon />
                <Font
                  fontSize='1.6rem'
                  fontWeight='normal'
                  color='#979797'
                  ml='0.6rem'>
                  무료 예약 취소 (기간 한정)
                </Font>
              </div>
              <div className='aboutBox'>
                <SampleIcon />
                <Font
                  fontSize='1.6rem'
                  fontWeight='normal'
                  color='#979797'
                  ml='0.6rem'>
                  최대 2인 | 소형견 1마리
                </Font>
              </div>
              <div className='aboutBox'>
                <SampleIcon />
                <Font
                  fontSize='1.6rem'
                  fontWeight='normal'
                  color='#979797'
                  ml='0.6rem'>
                  체크인 15:00 - 체크아웃 11:00
                </Font>
              </div>
              <div className='roomInfomation'>
                <Font
                  fontSize='1.4rem'
                  color='#707070'
                  fontWeight='normal'
                  mr='0.6rem'>
                  객실 이용 안내
                </Font>
                <OpenBtn />
              </div>
            </div>
            <div className='bedroomPrice'>
              <Font
                fontSize='1.6rem'
                color='#707070'
                fontWeight='normal'
                mb='0.6rem'>
                1박당
              </Font>
              <div className='price'>
                <Font
                  fontSize='2.4rem'
                  color='#707070'
                  fontWeight='bold'
                  mr='0.8rem'>
                  579,689
                </Font>
                <span className='one'> 원</span>
              </div>
              <div className='buttons'>
                <RoundSquareBtn>장바구니</RoundSquareBtn>
                <RoundSquareBtn main_color style={{ marginLeft: '1.4rem' }}>
                  예약하기
                </RoundSquareBtn>
              </div>
            </div>
          </div>
          <div className='bedroom'>
            <div className='bedroomInfo'>
              <Font fontSize='2rem' color='#707070' fontWeight='bold' mb='2rem'>
                싱글침대 2개
              </Font>
              <div className='aboutBox'>
                <SampleIcon />
                <Font
                  fontSize='1.6rem'
                  fontWeight='normal'
                  color='#979797'
                  ml='0.6rem'>
                  조식 포함
                </Font>
              </div>
              <div className='aboutBox'>
                <SampleIcon />
                <Font
                  fontSize='1.6rem'
                  fontWeight='normal'
                  color='#979797'
                  ml='0.6rem'>
                  무료 예약 취소 (기간 한정)
                </Font>
              </div>
              <div className='aboutBox'>
                <SampleIcon />
                <Font
                  fontSize='1.6rem'
                  fontWeight='normal'
                  color='#979797'
                  ml='0.6rem'>
                  최대 2인 | 소형견 1마리
                </Font>
              </div>
              <div className='aboutBox'>
                <SampleIcon />
                <Font
                  fontSize='1.6rem'
                  fontWeight='normal'
                  color='#979797'
                  ml='0.6rem'>
                  체크인 15:00 - 체크아웃 11:00
                </Font>
              </div>
              <div className='roomInfomation'>
                <Font
                  fontSize='1.4rem'
                  color='#707070'
                  fontWeight='normal'
                  mr='0.6rem'>
                  객실 이용 안내
                </Font>
                <OpenBtn />
              </div>
            </div>
            <div className='bedroomPrice'>
              <Font
                fontSize='1.6rem'
                color='#707070'
                fontWeight='normal'
                mb='0.6rem'>
                1박당
              </Font>
              <div className='price'>
                <Font
                  fontSize='2.4rem'
                  color='#707070'
                  fontWeight='bold'
                  mr='0.8rem'>
                  579,689
                </Font>
                <span className='one'> 원</span>
              </div>
              <div className='buttons'>
                <RoundSquareBtn>장바구니</RoundSquareBtn>
                <RoundSquareBtn main_color style={{ marginLeft: '1.4rem' }}>
                  예약하기
                </RoundSquareBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HotelTwoRoomWrapper>
  );
};
const HotelTwoRoomWrapper = styled.div`
  display: block;
  width: 128rem;
  margin: 0 auto;
  border-bottom: 0.5px solid #979797;
  .roomNameBox {
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 4rem;
    margin-bottom: 2rem;
  }
  .bedroomsBlock {
    display: flex;
    .imgBtn {
      position: relative;
    }
    .bedroomsBox {
      display: block;
      margin: 1.8rem 0 0 2rem;
      .bedroom {
        padding-bottom: 4.1rem;
        display: flex;
        width: 87rem;
        :first-child {
          border-bottom: 0.5px solid #979797;
          margin-bottom: 4rem;
        }
        .bedroomInfo {
          margin-left: 2rem;
          margin-right: auto;

          .aboutBox {
            display: flex;
            margin-bottom: 1rem;
            align-items: center;
            :last-child {
              margin-bottom: 1.2rem;
            }
          }
          .roomInfomation {
            display: flex;
            align-items: center;
          }
        }
        .bedroomPrice {
          display: block;
          text-align: right;
          margin-top: 5rem;
          margin-left: auto;

          .price {
            display: flex;
            align-items: center;
            margin-bottom: 1.4rem;
            justify-content: flex-end;

            span {
              font-size: 1.8rem;
              color: #707070;
              font-weight: 500;
            }
          }
          .buttons {
            display: flex;
          }
        }
      }
    }
  }
`;
export default HotelTwoRoom;
