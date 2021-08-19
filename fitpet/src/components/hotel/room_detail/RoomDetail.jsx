import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Font, OpenBtn, RoundSquareBtn, SampleIcon } from '../../../common';
import styled from 'styled-components';

const RoomDetail = ({ hideRoomDetail, showRoomDetail }) => {
  // 객실 상세 모달 창 열기
  return (
    <RoomDetailWrapper>
      <RoomDetailBlock>
        <CloseBtn onClick={hideRoomDetail}>
          <CloseOutlined />
        </CloseBtn>
        <div className='bedroom'>
          {/* 객실 정보 */}
          <div className='bedroomInfo'>
            <Font fontSize='2.2rem' color='#707070' fontWeight='bold' mb='2rem'>
              스탠다드 트윈룸
            </Font>
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
          </div>
          {/* 객실 이미지 슬라이드 */}
          <div className='bedroomImages'>
            <SampleIcon width='42.9rem' height='24.5rem' />
          </div>
        </div>
        {/* 객실 설명 및 주의사항 */}
        <div className='roomDetails'>
          <Font fontSize='2rem' color='#707070' fontWeight='bold' mb='2rem'>
            객실 설명 및 주의사항
          </Font>
          <Font fontSize='1.6rem' fontWeight='normal' color='#979797'>
            면적 25.0m²의 객실로 탁트인 오션뷰를 제공합니다. 조식 미포함
            상품이며, 기간 내에 무료 예약 취소가 가능합니다. 예약 완료 후 몇 분
            내에 바로 확정이 됩니다.
            <br />
            반려동물 추가비용이나 인원 추가비용이 있는 경우는 현장결제 하셔야
            합니다. 최대 2인, 8kg 미만 소형견 1마리까지 입실 가능합니다.
          </Font>
        </div>
        {/* 객실 내 편의시설 */}
        <div className='roomDetails'>
          <Font fontSize='2rem' color='#707070' fontWeight='bold' mb='2rem'>
            객실 내 편의시설
          </Font>
          <div className='detailBox'>
            <Font fontSize='1.6rem' fontWeight='normal' color='#979797'>
              [ 기본시설 ]<br />
              TV ㅣ 에어컨 ㅣ 냉장고 ㅣ 미니바 ㅣ 커피포트 욕조 ㅣ 비데 ㅣ
              욕실용품 ㅣ 드라이기
            </Font>
            <Font fontSize='1.6rem' fontWeight='normal' color='#979797'>
              [ 기본시설 ]<br />
              TV ㅣ 에어컨 ㅣ 냉장고 ㅣ 미니바 ㅣ 커피포트 욕조 ㅣ 비데 ㅣ
              욕실용품 ㅣ 드라이기
            </Font>
          </div>
        </div>
        {/* 환불정책 */}
        <div className='roomDetails'>
          <Font fontSize='2rem' color='#707070' fontWeight='bold' mb='2rem'>
            환불정책
          </Font>
          <Font fontSize='1.6rem' fontWeight='normal' color='#979797'>
            - 2021. 08. 05 23:00시 전까지 무료 예약 취소가 가능합니다.
            <br />
            - 2021. 08. 06 23:00시 이후 예약 취소시 첫 1박에 대한 숙박 요금,
            세금 및 취소 수수료가 부과됩니다.
            <br />
            - 예약하신 객실 수에 따라 취소 수수료가 부과됩니다.
            <br />
            - 체크인을 하지 않거나 체크인 시간 이후 예약 취소/변경시 숙소 측
            재량에 따라 예약 가격의 최대 100%에 해당하는 취소 수수료가 부과될 수
            있습니다.
            <br />
          </Font>
        </div>
      </RoomDetailBlock>
      {/* 객실 예약 금액 + 장바구니, 바로예약 버튼 */}
      <ReservationBlock>
        <div className='priceBox'>
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
        <div className='buttons'>
          <RoundSquareBtn text='장바구니' />
          <RoundSquareBtn
            text='바로예약'
            backColor='#979797'
            color='#fff'
            fontSize='1.6rem'
            ml='1.4rem'
          />
        </div>
      </ReservationBlock>
    </RoomDetailWrapper>
  );
};

const RoomDetailWrapper = styled.div`
  background-color: #fff;
  width: 800px;
  // height: 100%;
  height: 1080px;
  //margin: 0 0 0 1120px;
  margin-left: auto;
  border: 1px solid red;
`;
const RoomDetailBlock = styled.div`
  padding: 4rem;
  .bedroom {
    padding-bottom: 4rem;
    display: flex;
    :first-child {
      border-bottom: 0.5px solid #979797;
      margin-bottom: 4rem;
    }
    .bedroomInfo {
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
    .bedroomImages {
      text-align: right;
      margin-left: auto;
    }
  }
  .roomDetails {
    :not(:last-child) {
      margin-bottom: 4rem;
    }
    p {
      line-height: 25px;
    }
    .detailBox {
      display: flex;
      p {
        margin-right: 6rem;
      }
    }
  }
`;

const CloseBtn = styled.div`
  cursor: pointer;
  font-size: 2rem;
  width: 3.4rem;
  height: 3.4rem;
  color: #707070;
  margin-bottom: 4rem;
`;

const ReservationBlock = styled.div`
  display: flex;
  width: 80rem;
  height: 13.3rem;
  //margin: 42px 0 0;
  padding: 38px 40px 36px;
  opacity: 0.5;
  box-shadow: 0 -3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  .priceBox {
    display: block;
    .price {
      display: flex;
      align-items: center;
      margin-bottom: 0.6rem;
    }
    .roomInfomation {
      display: flex;
      align-items: center;
    }
  }
  .buttons {
    align-items: center;
    margin-left: auto;
    display: flex;
  }
`;

export default RoomDetail;
