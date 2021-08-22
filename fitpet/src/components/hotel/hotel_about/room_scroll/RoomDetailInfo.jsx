import React from 'react';
import styled from 'styled-components';
import { Font } from '../../../../common';

const RoomDetailInfo = () => {
  return (
    <RoomDetailInfoWrapper id='roomDetailInfo'>
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
              <br />
              - 호텔 내 레스토랑 이용 시 10% 할인
              <br />
              - 호텔 내 실내 수영장, 피트니스 센터 무료 입장 (피트니스의 경우 만
              16세 이상 입장 가능)
              <br />
              ※ 코로나로 인해 일시 영업 중단할 수 있습니다.
              <br />
            </Font>
          </div>
        </div>
      </div>
    </RoomDetailInfoWrapper>
  );
};

const RoomDetailInfoWrapper = styled.div`
  display: block;
  width: 128rem;
  margin: 0 auto;
  border-bottom: 1px solid #eeeeee;
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

export default RoomDetailInfo;
