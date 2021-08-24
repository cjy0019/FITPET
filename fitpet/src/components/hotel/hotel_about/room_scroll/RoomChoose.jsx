import React from 'react';
import styled from 'styled-components';
import { Font, IconButton } from '../../../../common';
import HotelDate from '../../hotel_common/HotelDate';

const RoomChoose = () => {
  return (
    <RoomChooseWrapper>
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
      <div className='RoomBox'>
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
    </RoomChooseWrapper>
  );
};

const RoomChooseWrapper = styled.div`
  display: block;
  width: 128rem;
  margin: 0 auto;
  border-bottom: 1px solid #eeeeee;
  padding-top: 5rem;
  .RoomDateBox {
    display: flex;
  }
  .RoomBox {
    display: flex;
    margin-bottom: 2.4rem;
  }
`;
export default RoomChoose;
