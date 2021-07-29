import React from 'react';
import styled from 'styled-components';
import { IconButton } from '../../../common';
import { IoIosArrowUp } from 'react-icons/io';
import { FilterBtn, FilterTitle } from '../hotel_common/filterCommon';

const DogFilter = () => {
  return (
    <AllWrapper>
      <ButtonContainer>
        <FilterTitle>반려동물 크기 및 종</FilterTitle>
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
        <FilterBtn noMargin>소형견</FilterBtn>
        <FilterBtn>중형견</FilterBtn>
        <FilterBtn>대형견</FilterBtn>
        <FilterBtn>고양이</FilterBtn>
      </LineWrapper>
      <LineWrapper>
        <FilterBtn noMargin>1성급 이하</FilterBtn>
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

export default DogFilter;
