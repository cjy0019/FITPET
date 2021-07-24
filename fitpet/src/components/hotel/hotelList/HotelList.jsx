import React from 'react';
import styled from 'styled-components';
import { A11yHidden } from '../../../common/accessibility/Hidden';
import SmallLine from '../../../common/utility/SmallLine';
import HotelInfo from './HotelInfo';
import HotelListHeader from './HotelListHeader';
import GoUpBtn from '../../../common/buttons/small-size/GoUpBtn';
import HotelBanner from './HotelBanner';

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
    <div>
      <HotelBanner />
      <HotelMain>
        <h1>
          <A11yHidden>숙소 목록</A11yHidden>
        </h1>

        <section>필터링 부분</section>

        {/* 예약 가능한 숙소 부분 */}
        <PossibleHotel>
          <HotelListHeader />
          {hotels.map((hotel) => {
            return (
              <>
                <HotelInfo key={hotel.id} />
                <SmallLine key={hotel.id} />
              </>
            );
          })}
        </PossibleHotel>
        <GoUpBtn />
      </HotelMain>
    </div>
  );
};

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
