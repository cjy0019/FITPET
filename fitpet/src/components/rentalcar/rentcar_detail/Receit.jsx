import React from 'react';
import styled, { css } from 'styled-components';

const Receit = ({ rentcarDetail }) => {
  console.log(rentcarDetail);

  return (
    <Container>
      <Title>{rentcarDetail.rentcarDetail.carName}</Title>

      <SubTitle>인수 및 반납 시간</SubTitle>
      <Content border>8월 6일 (금) 10:00 - 8월 7일 (토) 10:00</Content>

      <SubTitle>결제 금액</SubTitle>

      <FlexC>
        <Content>대여료</Content>
        <Content>116,000원</Content>
      </FlexC>
      <FlexC>
        <Content>일반 자차 보험</Content>
        <Content>40,000원</Content>
      </FlexC>
      <FlexC>
        <Content>인수</Content>
        <Content>0원</Content>
      </FlexC>
      <FlexC>
        <Content>반납</Content>
        <Content>0원</Content>
      </FlexC>
      <FlexC>
        <Content>추가옵션</Content>
        <Content>15,000원</Content>
      </FlexC>

      <SubTitle>최종 결제 금액</SubTitle>
      <Price>
        156,000 <span>원</span>
      </Price>

      <PickUpButton>인수 및 반납지역을 선택해주세요</PickUpButton>
    </Container>
  );
};

const Container = styled.div`
  position: sticky;
  top: 13%;
  min-width: 39.8rem;
  height: 57.3rem;
  padding: 4.2rem 3.55rem 4.2rem 3.6rem;
  background-color: #f9f9f9;

  color: ${(props) => props.theme.grey1_color};
`;

const Title = styled.p`
  font-size: 2.4rem;
  font-weight: bold;
  font-stretch: normal;
  line-height: 1.21;
  text-align: left;
  padding-bottom: 1.3rem;
  border-bottom: solid 0.5px #979797;
  color: ${(props) => props.theme.black1_color};
`;

const SubTitle = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: -0.28px;
  margin-top: 2.8rem;
  text-align: left;
  color: ${(props) => props.theme.black1_color};
`;

const Content = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  font-stretch: normal;
  line-height: 1.17;
  letter-spacing: -0.36px;
  margin-top: 0.6rem;
  color: ${(props) => props.theme.black1_color};

  ${(props) =>
    props.border &&
    css`
      padding-bottom: 2.8rem;
      border-bottom: solid 1px #979797;
    `}
`;

const FlexC = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Price = styled.p`
  font-size: 2.8rem;
  font-weight: bold;
  font-style: normal;
  line-height: 0.86;
  letter-spacing: -0.56px;
  text-align: left;
  margin-top: 1.3rem;
  color: ${(props) => props.theme.main_color};

  span {
    font-size: 1.8rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: -0.36px;
  }
`;

const PickUpButton = styled.button`
  width: 32.6rem;
  height: 5.2rem;
  margin-top: 3.4rem;
  padding: 1.6rem 5rem 1.5rem;
  border-radius: 7px;
  background-color: #979797;
  font-size: 1.8rem;
  line-height: 1.17;
  letter-spacing: -0.36px;
  text-align: left;
  white-space: nowrap;
  border: none;
  outline: none;
  color: #ffffff;
  background-color: ${(props) => props.theme.main_color};
`;

export default Receit;
