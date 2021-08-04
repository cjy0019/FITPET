import React from 'react';
import styled from 'styled-components';
import { StyledTitle } from './rentcarCommonStyle';

const Rules = () => {
  return (
    <RulesSection>
      <StyledTitle>이용규칙</StyledTitle>
      <SubTitle mt='1.4rem'>
        운전자 연령 및 운전 가능 최소 연령 조건 규정
      </SubTitle>
      <Content>
        - 만 25세 미만 및 만 70세 이상 운전자 또는 운전 경험 1년 미만의 운전자는
        차량 대여가 불가합니다.
      </Content>
      <Content>
        - 차량 픽업시 운전자가 차량 대여 조건에 부합하지 않는 경우, 예약이
        취소되며 환불은 불가합니다.
      </Content>
      <SubTitle mt='4rem'>운전 시 주의사항</SubTitle>
      <Content>
        - 계약서에 기재된 운전자 이외 운전 불가합니다. (계약자 외 운전시
        보험처리불가)
      </Content>
      <Content>- 연료 대금은 임차인 부담입니다.</Content>
      <Content>
        - 차량 임차중에 발생한 제반 교통법규 위반 사항은 임차인 책임입니다.
      </Content>
      <Content>
        - 대여차량은 종합보험(대인,대물,자손)가입 되어 있습니다.
      </Content>
      <Content>
        - 임차중 자차 미가입 사고발생시 수리비 전액과 휴차 보상료(1일 대여요금의
        50%)는 임차인이 부담합니다. (자차 효력은 최초 사고 발생 1건에만
        효력,단독사고는 제외)
      </Content>

      <SubTitle mt='7rem'>취소 및 환불 규정</SubTitle>
      <Content>- 인수 전 72시간 이전 취소 : 전액 환불</Content>
      <Content>- 인수 전 72시간 이내 취소 : 결제 요금 70% 환불</Content>
      <Content>- 인수 이후 취소 : 환불 불가</Content>
      <Content>
        - 인수 전 72시간 이내 취소 수수료 = 대여료, 보험료, 딜리버리 요금을 합친
        총 결제 금액의 30%
      </Content>
    </RulesSection>
  );
};

const RulesSection = styled.section`
  margin-top: 4rem;
  padding-bottom: 4rem;
  border-bottom: solid 0.5px #979797;
`;

const SubTitle = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.56;
  letter-spacing: -0.36px;
  color: ${(props) => props.theme.grey1_color};

  margin-top: ${(props) => props.mt};
`;

const Content = styled.p`
  font-size: 1.6rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.75;
  letter-spacing: -0.32px;
  text-align: left;
  color: ${(props) => props.theme.grey1_color};
`;

export default Rules;
