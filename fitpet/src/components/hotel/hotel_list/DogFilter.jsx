import React, { useRef } from 'react';
import useFoldingSection from '../../../hooks/useFoldingSection';
import {
  AllWrapper,
  ButtonContainer,
  DownButton,
  FilterBtn,
  FilterTitle,
  Folder,
  LineWrapper,
  UpButton,
} from '../hotel_common/filterCommon';

const DogFilter = () => {
  const foldingRef = useRef(null);
  const [isFold, setisFold] = useFoldingSection(foldingRef);

  return (
    <AllWrapper>
      <ButtonContainer>
        <FilterTitle>반려동물 크기 및 종</FilterTitle>
        {isFold ? (
          <UpButton handleClick={handleClick} />
        ) : (
          <DownButton handleClick={handleClick} />
        )}
      </ButtonContainer>
      <Folder ref={foldingRef}>
        <LineWrapper>
          <FilterBtn noMargin>소형견</FilterBtn>
          <FilterBtn>중형견</FilterBtn>
          <FilterBtn>대형견</FilterBtn>
          <FilterBtn>고양이</FilterBtn>
        </LineWrapper>
        <LineWrapper>
          <FilterBtn noMargin>1성급 이하</FilterBtn>
        </LineWrapper>
      </Folder>
    </AllWrapper>
  );

  function handleClick() {
    setisFold(!isFold);
  }
};

export default DogFilter;
