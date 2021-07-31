import React from 'react';
import styled, { css } from 'styled-components';
import SmallLine from '../../common/utility/SmallLine';
import { SmallHeader } from '../hotel/hotel_common/filterCommon';

const RentCarHeader = () => {
  return (
    <>
      <SmallHeader>
        <h2>예약 가능한 차량 32개</h2>
        <FlexUl>
          <StyledLi>
            <FilteringBtn>추천순</FilteringBtn>
          </StyledLi>

          <StyledLi>
            <FilteringBtn>가격높은순</FilteringBtn>
          </StyledLi>

          <StyledLi>
            <FilteringBtn>가격낮은순</FilteringBtn>
          </StyledLi>
        </FlexUl>
      </SmallHeader>
      <SmallLine />
    </>
  );
};

const FlexUl = styled.ul`
  display: flex;
`;

const StyledLi = styled.li`
  margin-right: 2rem;

  ${(props) =>
    props.noMargin &&
    css`
      margin: 0;
    `}
`;
const FilteringBtn = styled.button`
  border: none;
  background: transparent;
  font-size: 1.4rem;
  line-height: 1.71;
  letter-spacing: -0.28px;
  color: #707070;
`;
export default RentCarHeader;
