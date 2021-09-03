import React from 'react';
import styled from 'styled-components';
import CarOptions from './CarOptions';
import Insurance from './Insurance';
import MoreOptions from './MoreOptions';
import PickupInfo from './PickupInfo';
import Receit from './Receit';
import RentCarTitle from './RentCarTitle';
import Rules from './Rules';

const RentCarDetail = () => {
  return (
    <StyledArticle>
      <section style={{ width: '100%' }}>
        {/* 차량 사진 & 종 part */}
        <RentCarTitle />
        <Line />

        {/* 차량 옵션 */}
        <CarOptions />
        <Line />

        {/* 픽업 및 반납 정보 */}
        <PickupInfo />
        <Line />

        {/* 보험 선택 */}
        <Insurance />

        {/* 추가 옵션 선택 */}
        <MoreOptions />

        {/* 이용 규칙 */}
        <Rules />
      </section>

      <Receit />
    </StyledArticle>
  );
};

// 전체 article container
const StyledArticle = styled.article`
  width: 128rem;
  display: flex;
  justify-content: space-between;
  gap: 3.2rem;
  margin: 0 auto 46rem;
  padding-top: 6rem;
  background-color: aliceblue;
`;

const Line = styled.div`
  border-bottom: solid 1.5px #979797;
  margin-top: 5rem;
  width: 100%;
`;

export default RentCarDetail;
