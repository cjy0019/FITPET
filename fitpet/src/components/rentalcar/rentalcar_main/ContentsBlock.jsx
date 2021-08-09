import React from 'react';
import styled from 'styled-components';

const ContentsBlock = () => {
  return (
    <>
      <RentalcarBox style={{ background: '#fce5ff' }}>
        <p className='title'>검증된 렌트카 파트너사</p>
        <p className='content'>
          선호하는 브랜드의 다양한 차종을 <br /> 핏펫의 검증된 파트너사에서
          이용해보세요
        </p>
        <ContentLeftImg />
      </RentalcarBox>
      <RentalcarBox style={{ background: '#ffc08a' }}>
        <p className='title'>안전 자차 보험</p>
        <p className='content'>
          핏펫의 모든 렌트카는 안전 자차 보험 <br />
          포함 상품으로, 갑작스러운 상황이 <br />
          발생해도 안심할 수 있어요!
        </p>
        <ContentCenterImg img={'/img/rentalcar/rentalcar_main/box/2.png'} />
      </RentalcarBox>
      <RentalcarBox style={{ background: '#afd7ff' }}>
        <p className='title'>무료 취소</p>
        <p className='content'>
          차량 인수 72시간 전엔 무료취소가
          <br />
          가능하니 부담없이 예약해보세요 :
        </p>
        <ContentRightImg img={'/img/rentalcar/rentalcar_main/box/3.png'} />
      </RentalcarBox>
    </>
  );
};

const RentalcarBox = styled.div`
  position: relative;
  width: 40rem;
  height: 25.1rem;
  border-radius: 15px;
  // margin: 0 4rem 0 0;
  padding: 4.6rem 0 0 3rem;
  color: ${(props) => props.theme.black1_color};
  font-size: 1.8rem;
  font-weight: normal;
  .title {
    font-size: 2.8rem;
    margin-bottom: 1.6rem;
  }
  .content {
    font-size: 1.4rem;
    letter-spacing: -0.28px;
    line-height: 1.43;
  }
  &:nth-child(2) {
    margin: 0 4rem;
  }
`;
const ContentLeftImg = styled.div`
  background-repeat: no-repeat;
  background-image: url('/img/rentalcar/rentalcar_main/box/1.png');
  background-size: cover;
  position: absolute;
  right: 2rem;
  bottom: -3rem;
  width: 13.4rem;
  height: 16.6rem;
`;
const ContentCenterImg = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/img/rentalcar/rentalcar_main/box/2.png');
  position: absolute;
  right: 0rem;
  bottom: -3rem;
  width: 23.4rem;
  height: 23.4rem;
`;
const ContentRightImg = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/img/rentalcar/rentalcar_main/box/3.png');
  position: absolute;
  right: -1rem;
  bottom: -5rem;
  width: 18.6rem;
  height: 29.3rem;
`;
export default ContentsBlock;
