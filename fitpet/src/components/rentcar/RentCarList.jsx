import React from 'react';
import styled from 'styled-components';
import { A11yHidden } from '../../common/accessibility/Hidden';
import RentCarFilter from '../../components/rentcar/RentCarFilter';

const RentCarList = () => {
  return (
    <Container>
      <RentMain>
        <h1>
          <A11yHidden>렌트카 목록</A11yHidden>
        </h1>

        {/* 렌트카 필터링 */}
        <RentCarFilter />
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
  background-color: aliceblue;
`;

export default RentCarList;
