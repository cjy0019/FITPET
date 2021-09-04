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
import { Link } from 'react-router-dom';
import { Skeleton } from 'antd';

const HotelList = ({ hotels, isLoading }) => {
  const list = Array.from({ length: 9 }, (x) => x);
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

            {/* 210903 by.jy 
            로딩 스피너 제거 & 스켈레톤 UI 적용 */}
            {isLoading &&
              list.map((v, i) => {
                return (
                  <div
                    key={i}
                    style={{
                      marginTop: '3rem',
                      paddingBottom: '4rem',
                      borderBottom: 'solid 1px #eee',
                    }}>
                    <Skeleton active={true} avatar paragraph={{ rows: 4 }} />
                  </div>
                );
              })}

            {hotels.map((hotel, i) => {
              return (
                <React.Fragment key={i}>
                  <HotelInfo
                    isLoading={isLoading}
                    key={hotel.id}
                    hotel={hotel}
                  />
                </React.Fragment>
              );
            })}
            <Pagenations>
              <Link to='/'>
                <img
                  src='/img/hotel/hotel_list/pageleft.svg'
                  alt=''
                  style={{ transform: 'translateY(-36%)' }}
                />
              </Link>
              <Link to='/accomodations/hotels?page=1'>1</Link>
              <Link to='/accomodations/hotels?page=2'>2</Link>
              <Link to='/accomodations/hotels?page=3'>3</Link>
              <Link to='/accomodations/hotels?page=4'>4</Link>
              <Link to='/accomodations/hotels?page=5'>5</Link>
              <Link to='/'>
                <img
                  src='/img/hotel/hotel_list/pageright.svg'
                  alt=''
                  style={{ transform: 'translateY(-35%)' }}
                />
              </Link>
            </Pagenations>
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

const Pagenations = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  gap: 3.7rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${(props) => props.theme.black1_color};

  a:visited {
    color: ${(props) => props.theme.black1_color};
  }
`;

export default HotelList;
