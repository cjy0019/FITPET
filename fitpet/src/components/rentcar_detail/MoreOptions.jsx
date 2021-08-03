import React from 'react';
import styled from 'styled-components';
import CheckingOption from './CheckingOption';
import { StyledP, StyledTitle } from './rentcarCommonStyle';

const MoreOptions = () => {
  return (
    <OptionSection>
      <StyledTitle>추가 옵션 선택</StyledTitle>
      <StyledP fs='1.6rem' mt='1.4rem' mb='2rem'>
        추가 옵션 이용 가능 여부가 항상 보장되는 것은 아니며, 가격이 변동 될 시
        현장 결제를 하실 수도 있습니다.
      </StyledP>

      <LabelWrapper>
        <CheckingOption detail1 id='baby'>
          영아용 카시트
        </CheckingOption>
        <CheckingOption detail2 id='child'>
          아동용 카시트
        </CheckingOption>
        <CheckingOption id='kinder'>유아용 카시트</CheckingOption>
      </LabelWrapper>
    </OptionSection>
  );
};

const OptionSection = styled.section`
  margin-top: 4rem;
  height: 30rem;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

export default MoreOptions;
