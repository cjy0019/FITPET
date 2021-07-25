import React from 'react';
import styled from 'styled-components';
import { IconButton } from '../../../common';
import { FilterBtn, FilterTitle } from '../hotel_common/filterCommon';
import { IoIosArrowUp } from 'react-icons/io';

const RatingFilter = () => {
  return (
    <AllWrapper>
      <ButtonContainer>
        <FilterTitle>평점</FilterTitle>
        <IconButton
          Icon={IoIosArrowUp}
          width='2.8rem'
          height='2.8rem'
          border='none'
          borderRadius='0'
          backColor='#cbcbcb'
          color='black'
        />
      </ButtonContainer>

      <LineWrapper>
        <FilterBtn noMargin>최고(4.5+)</FilterBtn>
        <FilterBtn>우수(4.0+)</FilterBtn>
        <FilterBtn>만족(3.5+)</FilterBtn>
      </LineWrapper>
      <LineWrapper>
        <FilterBtn noMargin>양호(3.5+)</FilterBtn>
      </LineWrapper>
    </AllWrapper>
  );
};

// 필터링 버튼 컨테이너
const AllWrapper = styled.div`
  margin-bottom: 4rem;
  margin-top: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LineWrapper = styled.div`
  margin-top: 1.2rem;
`;

export default RatingFilter;
