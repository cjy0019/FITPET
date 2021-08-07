import React from 'react';
import {
  Circle,
  CircleText,
  SectionHeader,
  Track,
  TrackContainer,
} from '../../common';

const DriverInfoHeader = () => {
  return (
    <SectionHeader>
      <TrackContainer>
        <Track long />
        <Track short />

        <CircleText blue>
          <Circle className='circle' />
          <span>차량선택</span>
        </CircleText>

        <CircleText blue middle>
          <Circle className='circle' />
          <span>추가 옵션 선택</span>
        </CircleText>

        <CircleText mint middle>
          <Circle className='circle' />
          <span>운전자 정보 입력</span>
        </CircleText>

        <CircleText grey>
          <Circle className='circle' />
          <span>예약 완료</span>
        </CircleText>
      </TrackContainer>
    </SectionHeader>
  );
};

export default DriverInfoHeader;
