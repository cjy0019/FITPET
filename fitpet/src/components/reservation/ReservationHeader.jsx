import React from 'react';
import {
  Circle,
  CircleText,
  SectionHeader,
  Track,
  TrackContainer,
} from '../../common';

const ReservationHeader = () => {
  return (
    <SectionHeader>
      <TrackContainer>
        <Track />
        <Track second />

        <CircleText blue>
          <Circle className='circle' />
          <span>숙소선택</span>
        </CircleText>

        <CircleText mint>
          <Circle className='circle' />
          <span>예약자 정보 입력 및 결제</span>
        </CircleText>

        <CircleText grey>
          <Circle className='circle' />
          <span>예약완료</span>
        </CircleText>
      </TrackContainer>
    </SectionHeader>
  );
};

export default ReservationHeader;
