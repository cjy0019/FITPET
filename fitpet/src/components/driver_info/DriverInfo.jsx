import React from 'react';
import styled, { css } from 'styled-components';
import { Line } from '../reservation/Reservation';

const DriverInfo = () => {
  return (
    <div>
      <StyledArticle>
        {/* 운전자 정보 입력 왼쪽 part */}
        <section style={{ width: '100%' }}>
          <FlexContainer space='space-between'>
            <FlexContainer>
              <StyledH1>운전자 정보 입력</StyledH1>
              <AddDriverLabel htmlFor='info'>
                <Circle></Circle>
                운전자 추가등록이 필요하신가요?
                <input type='checkbox' id='info' />
              </AddDriverLabel>
            </FlexContainer>

            <AddDriverLabel htmlFor='driverDiff' color>
              <Rect></Rect>
              운전자가 달라요
              <input type='checkbox' id='driverDiff' />
            </AddDriverLabel>
          </FlexContainer>

          <Line />

          {/* 예약자 정보 */}
        </section>

        {/* 오른쪽 파트 */}
      </StyledArticle>
    </div>
  );
};

const StyledArticle = styled.article`
  width: 128rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 46rem;
  padding-top: 6rem;
`;

const StyledH1 = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 1.21;
  letter-spacing: normal;
  color: #707070;
`;

const AddDriverLabel = styled.label`
  display: flex;
  margin-left: 1.6rem;
  font-size: 1.4rem;
  cursor: pointer;
  align-items: center;
  color: ${({ theme }) => theme.grey3_color};

  ${(props) =>
    props.color &&
    css`
      color: ${({ theme }) => theme.grey1_color};
    `}

  input {
    display: none;
  }
`;

const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 0.6rem;
  background-color: ${({ theme }) => theme.grey3_color};
`;

const Rect = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 0.6rem;
  background-color: ${({ theme }) => theme.grey3_color};
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.space};
`;

export default DriverInfo;
