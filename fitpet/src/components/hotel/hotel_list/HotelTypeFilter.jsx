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

const HotelTypeFilter = () => {
  const foldingRef = useRef(null);
  const [isFold, setisFold] = useFoldingSection(foldingRef);

  return (
    <AllWrapper>
      <ButtonContainer>
        <FilterTitle>숙소유형</FilterTitle>
        {isFold ? (
          <UpButton handleClick={handleClick} />
        ) : (
          <DownButton handleClick={handleClick} />
        )}
      </ButtonContainer>
      <Folder ref={foldingRef}>
        <LineWrapper>
          <FilterBtn noMargin>호텔</FilterBtn>
          <FilterBtn>리조트</FilterBtn>
          <FilterBtn>펜션</FilterBtn>
          <FilterBtn>풀빌라</FilterBtn>
        </LineWrapper>
        <LineWrapper>
          <FilterBtn noMargin>캠핑</FilterBtn>
          <FilterBtn>글램핑</FilterBtn>
          <FilterBtn>기타</FilterBtn>
        </LineWrapper>
      </Folder>
    </AllWrapper>
  );

  function handleClick() {
    setisFold(!isFold);
  }
};

export default HotelTypeFilter;
