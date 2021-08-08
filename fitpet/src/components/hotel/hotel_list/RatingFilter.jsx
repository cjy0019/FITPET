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

const RatingFilter = () => {
  const foldingRef = useRef(null);
  const [isFold, setisFold] = useFoldingSection(foldingRef);

  return (
    <AllWrapper>
      <ButtonContainer>
        <FilterTitle>평점</FilterTitle>
        {isFold ? (
          <UpButton handleClick={handleClick} />
        ) : (
          <DownButton handleClick={handleClick} />
        )}
      </ButtonContainer>

      <Folder ref={foldingRef}>
        <LineWrapper>
          <FilterBtn noMargin>최고(4.5+)</FilterBtn>
          <FilterBtn>우수(4.0+)</FilterBtn>
          <FilterBtn>만족(3.5+)</FilterBtn>
        </LineWrapper>
        <LineWrapper>
          <FilterBtn noMargin>양호(3.5+)</FilterBtn>
        </LineWrapper>
      </Folder>
    </AllWrapper>
  );

  function handleClick() {
    setisFold(!isFold);
  }
};

export default RatingFilter;
