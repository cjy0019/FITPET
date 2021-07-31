import React from 'react';
import styled from 'styled-components';
import { A11yHidden } from '../../../common/accessibility/Hidden';
import HotelInfo from './HotelInfo';
import HotelListHeader from './HotelListHeader';
import GoUpBtn from '../../../common/buttons/small_size/GoUpBtn';
import HotelBanner from './HotelBanner';
import HotelFilter from './HotelFilter';
import Header from '../../common/header/Header';

const HotelList = () => {
  const hotels = [
    { id: 1, name: '제주' },
    { id: 2, name: '이름' },
    { id: 3, name: '이름' },
    { id: 4, name: '이름' },
    { id: 5, name: '이름' },
    { id: 6, name: '이름' },
  ];

  return (
    <Container>
      <Header />
      <HotelBanner />
      <HotelMain>
        <h1>
          <A11yHidden>숙소 목록</A11yHidden>
        </h1>

        {/* 필터링 기능 부분 */}
        <HotelFilter />

        {/* 예약 가능한 숙소 부분 */}
        <PossibleHotel>
          <HotelListHeader />
          {hotels.map((hotel, i) => {
            return (
              <div key={i}>
                <HotelInfo key={hotel.id} />
              </div>
            );
          })}
        </PossibleHotel>
        <GoUpBtn />
      </HotelMain>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 33rem;
`;

const HotelMain = styled.main`
  margin: 0 auto;
  display: flex;
  width: 123rem;
  margin-top: 6rem;
  margin-bottom: 30rem;
`;

const PossibleHotel = styled.section`
  width: 100%;
  margin-left: 5.05rem;
`;

export default HotelList;
