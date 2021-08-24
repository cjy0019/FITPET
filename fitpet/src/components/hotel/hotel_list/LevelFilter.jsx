import React, { useRef } from 'react';
import useFoldingSection from '../../../hooks/useFoldingSection';
import {
  DownButton,
  FilterBtn,
  FilterTitle,
  UpButton,
  ButtonContainer,
  Folder,
  LineWrapper,
  AllWrapper,
} from '../hotel_common/filterCommon';

const LevelFilter = () => {
  const foldingRef = useRef(null);
  const [isFold, setisFold] = useFoldingSection(foldingRef, 10);

  return (
    <AllWrapper>
      <ButtonContainer>
        <FilterTitle>등급</FilterTitle>
        {isFold ? (
          <UpButton handleClick={handleClick} />
        ) : (
          <DownButton handleClick={handleClick} />
        )}
      </ButtonContainer>

      <Folder ref={foldingRef}>
        <LineWrapper>
          <FilterBtn noMargin>5성급</FilterBtn>
          <FilterBtn>4성급</FilterBtn>
          <FilterBtn>3성급</FilterBtn>
          <FilterBtn>2성급</FilterBtn>
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

export default LevelFilter;
