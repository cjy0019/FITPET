import React from 'react';
import styled from 'styled-components';
import { A11yHidden } from '../../common/accessibility/Hidden';
import GoUpBtn from '../../common/buttons/small_size/GoUpBtn';
import RentCarFilter from '../../components/rentcar/RentCarFilter';
import CarInfo from './CarInfo';
import RentCarHeader from './RentCarHeader';

const RentCarList = () => {
  const cars = [
    { id: 1, name: '제주' },
    { id: 2, name: '이름' },
    { id: 3, name: '이름' },
    { id: 4, name: '이름' },
    { id: 5, name: '이름' },
    { id: 6, name: '이름' },
  ];

  return (
    <Container>
      <RentMain>
        <h1>
          <A11yHidden>렌트카 목록</A11yHidden>
        </h1>

        {/* 렌트카 필터링 */}
        <RentCarFilter />

        {/* 예약 가능한 차량  */}
        <PossibleCars>
          <RentCarHeader />

          {cars.map((car, i) => {
            return (
              <div key={i}>
                <CarInfo key={car.id} />
              </div>
            );
          })}
        </PossibleCars>
        <GoUpBtn />
      </RentMain>
    </Container>
  );
};

const Container = styled.div``;

const RentMain = styled.main`
  margin: 0 auto;
  display: flex;
  width: 123rem;
  margin-top: 6rem;
  margin-bottom: 30rem;
`;

const PossibleCars = styled.section`
  width: 100%;
  margin-left: 5.05rem;
`;

export default RentCarList;
