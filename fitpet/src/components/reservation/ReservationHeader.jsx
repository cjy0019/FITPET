import React from 'react';
import styled, { css } from 'styled-components';

const ReservationHeader = () => {
  return (
    <ReserHeader>
      <TrackContainer>
        <Track />
        <Track second />

        <CircleText blue>
          <Circle className='circle' />
          <span>숙소선택</span>
        </CircleText>

        <CircleText mint>
          <Circle className='circle' />
          <span>예약자 정보 입력 및 결제</span>
        </CircleText>

        <CircleText grey>
          <Circle className='circle' />
          <span>예약완료</span>
        </CircleText>
      </TrackContainer>
    </ReserHeader>
  );
};

const ReserHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10rem;
  position: fixed;
  padding-bottom: 2rem;
  top: 10rem;
  z-index: 30;
  background-color: aliceblue;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
`;

const TrackContainer = styled.div`
  width: 63.6rem;
  position: relative;
  display: flex;
  margin: 0 auto;
`;

const Track = styled.div`
  width: 31.8rem;
  border-bottom: solid 1px ${(props) => props.theme.main_color};

  ${(props) =>
    props.second &&
    css`
      border-bottom: solid 1px ${(props) => props.theme.grey2_color};
    `}
`;

const CircleText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: -0.9rem;

  span {
    white-space: nowrap;
    font-size: 1.6rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    margin-top: 0.6rem;
    letter-spacing: -0.32px;
    text-align: left;
    color: #2a2a2a;
  }

  ${(props) =>
    props.blue &&
    css`
      left: -3rem;
    `}

  ${(props) =>
    props.mint &&
    css`
      left: 24rem;
    `}


  ${(props) =>
    props.grey &&
    css`
      right: -3rem;
    `}

  .circle {
    ${(props) =>
      props.blue &&
      css`
        background-color: ${props.theme.main_color};
      `}

    ${(props) =>
      props.mint &&
      css`
        /* left: 50%; */
        background-color: ${props.theme.sub_color};
      `}


  ${(props) =>
      props.grey &&
      css`
        /* right: 0; */
        background-color: ${props.theme.grey2_color};
      `}
  }
`;

const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

export default ReservationHeader;
