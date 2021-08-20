import React from 'react';
import styled from 'styled-components';
import { A11yHidden } from '../../../common/accessibility/Hidden';
import HotelInfo from './HotelInfo';
import HotelListHeader from './HotelListHeader';
import GoUpBtn from '../../../common/buttons/small_size/GoUpBtn';
import HotelBanner from './HotelBanner';
import HotelFilter from './HotelFilter';
import HeaderContainer from '../../../containers/HeaderContainer';
import Footer from '../../../components/common/Footer';

const HotelList = ({ hotels }) => {
  return (
    <>
      <Container>
        <HeaderContainer />
        <HotelBanner />
        <HotelMain>
          <A11yHidden>숙소 목록</A11yHidden>

          {/* 필터링 기능 부분 */}
          <HotelFilter />

          {/* 예약 가능한 숙소 부분 */}
          <PossibleHotel>
            <HotelListHeader />
            {hotels.map((hotel, i) => {
              return (
                <div key={i}>
                  <HotelInfo key={hotel.id} hotel={hotel} />
                </div>
              );
            })}
          </PossibleHotel>
          <GoUpBtn />
        </HotelMain>
      </Container>
      <Footer />
    </>
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
