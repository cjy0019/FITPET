import React from 'react';
import styled from 'styled-components';
import { A11yHidden } from '../../../common/accessibility/Hidden';
import GoUpBtn from '../../../common/buttons/small_size/GoUpBtn';
import HeaderContainer from '../../../containers/HeaderContainer';
import Modal from '../../modal/Modal';
import CarInfo from './CarInfo';
import RentCarFilter from './RentCarFilter';
import RentCarHeader from './RentCarHeader';
import Footer from '../../../components/common/Footer';

const RentCarList = ({ rentcars, isLoading }) => {
  return (
    <>
      {isLoading && (
        <Modal>
          <Center>
            <img src='/img/loading.gif' alt='loading spinner' />
          </Center>
        </Modal>
      )}
      <HeaderContainer />
      <Container>
        <RentMain>
          <A11yHidden>렌트카 목록</A11yHidden>

          {/* 렌트카 필터링 */}
          <RentCarFilter />

          {/* 예약 가능한 차량  */}
          <PossibleCars>
            <RentCarHeader />
            {rentcars.map((car) => {
              return (
                <React.Fragment key={car._id}>
                  <CarInfo
                    carType={car.carType}
                    carName={car.carName}
                    minPrice={car.minPrice}
                    picture={car.picture}
                    romStar={car.romStar}
                    maximumPeople={car.maximumPeople}
                    rentLocation={car.rentLocation}
                    fuelType={car.options.fuelType}
                    RearCamera={car.options.RearCamera}
                    deliveryCheck={car.options.deliveryCheck}
                  />
                </React.Fragment>
              );
            })}
          </PossibleCars>
          <GoUpBtn />
        </RentMain>
        <Footer />
      </Container>
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
    width: 17rem;
    height: 17rem;
  }
`;

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
