import React from 'react';
import styled, { css } from 'styled-components';
import { FlexC, StyledP, StyledTitle } from './rentcarCommonStyle';

const PickupInfo = () => {
  return (
    <PickUpWrapper>
      <StyledTitle>인수 및 반납 정보</StyledTitle>
      <StyledP fs='1.6rem' mt='1.4rem'>
        딜리버리 가능 차량으로, 원하는 곳에서 차를 받을 수 있습니다. 차를 인수할
        위치를 지정해주세요.
      </StyledP>
      <StyledP fs='1.6rem'>
        &#8251; 예약 후 업체에서 정확한 인수위치 파악을 위해 전화가 오니
        참고바랍니다.
      </StyledP>

      <FlexC mt='2rem'>
        <StyledSelect name='pickup' mr>
          <option>인수지역을 선택해주세요</option>
          <option value='강남점'>강남점</option>
          <option value='건대입구점'>건대입구점</option>
        </StyledSelect>
        <StyledSelect name='return'>
          <option>반납지역을 선택해주세요</option>
          <option value='강남점'>강남점</option>
          <option value='건대입구점'>건대입구점</option>
        </StyledSelect>
      </FlexC>
    </PickUpWrapper>
  );
};

const PickUpWrapper = styled.section`
  margin-top: 6rem;
`;

const StyledSelect = styled.select`
  font-size: 1.6rem;
  width: 41rem;
  height: 4.8rem;
  outline: none;
  cursor: pointer;

  ${(props) =>
    props.mr &&
    css`
      margin-right: 3rem;
    `}
`;

export default PickupInfo;
