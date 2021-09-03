import React from 'react';
import styled from 'styled-components';
import { A11yHidden } from '../../../common/accessibility/Hidden';
import GoUpBtn from '../../../common/buttons/small_size/GoUpBtn';
import HeaderContainer from '../../../containers/HeaderContainer';
import Modal from '../../modal/Modal';
import CarInfo from './CarInfo';
import RentCarFilter from './RentCarFilter';
import RentCarHeader from './RentCarHeader';

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
                  <CarInfo car={car} />
                </React.Fragment>
              );
            })}
          </PossibleCars>
          <GoUpBtn />
        </RentMain>
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
    width: 15rem;
    height: 15rem;
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
