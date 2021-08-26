import React, { useEffect } from 'react';
import styled from 'styled-components';
import { A11yHidden } from '../../../common/accessibility/Hidden';
import HotelInfo from './HotelInfo';
import HotelListHeader from './HotelListHeader';
import GoUpBtn from '../../../common/buttons/small_size/GoUpBtn';
import HotelBanner from './HotelBanner';
import HotelFilter from './HotelFilter';
import HeaderContainer from '../../../containers/HeaderContainer';
import Footer from '../../../components/common/Footer';
import Modal from '../../modal/Modal';
import { Link } from 'react-router-dom';

const HotelList = ({ hotels, isLoading }) => {
  useEffect(() => {
    if (isLoading) {
      document.body.style.cssText = `
      position:fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;
    `;
    }

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(window.scrollY, parseInt(scrollY || '0', 10) * -1);
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <Modal>
          <Center>
            <img src='/img/loading.gif' alt='loading spinner' />
          </Center>
        </Modal>
      )}

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
                <React.Fragment key={i}>
                  <HotelInfo key={hotel.id} hotel={hotel} />
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
const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 25rem;
    height: 25rem;
  }
`;

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
