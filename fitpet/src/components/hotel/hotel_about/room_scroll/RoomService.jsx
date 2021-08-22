import React from 'react';
import styled from 'styled-components';
import { Font } from '../../../../common';

const RoomService = () => {
  return (
    <RoomServiceWrapper id='roomService'>
      <div className='title'>
        <Font fontSize='2.4rem' fontWeight='bold' color='#2a2a2a' mt='4rem'>
          편의시설 및 서비스
        </Font>
      </div>
      {/* 편의시설 및 서비스 아이콘들 */}
      <div className='contents'>
        <div className='iconsBlock'>
          {/* 스크롤 이동 [다른 추천 호텔] 지점 */}
          <div className='iconBox'>
            <img src='/img/icon/wifi.png' alt='와이파이' />
            <Font fontSize='1.6rem' fontWeight='normal' color='#2a2a2a'>
              와이파이
            </Font>
          </div>

          <div className='iconBox'>
            <img src='/img/icon/fitness.png' alt='피트니스 센터' />
            <Font fontSize='1.6rem' fontWeight='normal' color='#2a2a2a'>
              피트니스 센터
            </Font>
          </div>
          <div className='iconBox'>
            <img src='/img/icon/pool.png' alt='수영장' />
            <Font fontSize='1.6rem' fontWeight='normal' color='#2a2a2a'>
              수영장
            </Font>
          </div>
          <div className='iconBox'>
            <img src='/img/icon/freeParking.png' alt='무료주차' />
            <Font fontSize='1.6rem' fontWeight='normal' color='#2a2a2a'>
              무료주차
            </Font>
          </div>
          <div className='iconBox'>
            <img src='/img/icon/reception.png' alt='24시 리셉션' />
            <Font fontSize='1.6rem' fontWeight='normal' color='#2a2a2a'>
              24시 리셉션
            </Font>
          </div>
          <div className='iconBox'>
            <img src='/img/icon/baggage.png' alt='수하물 보관' />
            <Font fontSize='1.6rem' fontWeight='normal' color='#2a2a2a'>
              수하물 보관
            </Font>
          </div>
          <div className='iconBox'>
            <img src='/img/icon/wash.png' alt='세탁' />
            <Font fontSize='1.6rem' fontWeight='normal' color='#2a2a2a'>
              세탁
            </Font>
          </div>
        </div>
      </div>
    </RoomServiceWrapper>
  );
};

const RoomServiceWrapper = styled.div`
  display: flex;
  width: 128rem;
  margin: 0 auto;
  border-bottom: 1px solid #eeeeee;
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
        text-align: center;
      }
    }
  }
`;
export default RoomService;
