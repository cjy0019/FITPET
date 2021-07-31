import React, { useEffect, useRef, useState } from 'react';
import {
  AllWrapper,
  ButtonContainer,
  DownButton,
  FilterBtn,
  FilterTitle,
  Folder,
  LineWrapper,
  UpButton,
} from '../hotel/hotel_common/filterCommon';

const CarSizeFilter = () => {
  const [isFold, setisFold] = useState(true);
  const foldingRef = useRef(null);

  useEffect(() => {
    if (isFold) {
      foldingRef.current.style =
        'visibility : visible; height: 10rem; opacity:1; ';
    } else {
      foldingRef.current.style = 'visibility : hidden; height: 0rem; opacity:0';
    }
  }, [isFold]);

  return (
    <AllWrapper>
      <ButtonContainer>
        <FilterTitle>차종</FilterTitle>
        {isFold ? (
          <UpButton handleClick={handleClick} />
        ) : (
          <DownButton handleClick={handleClick} />
        )}
      </ButtonContainer>

      <Folder ref={foldingRef}>
        <LineWrapper>
          <FilterBtn noMargin>경소형</FilterBtn>
          <FilterBtn>준중형</FilterBtn>
          <FilterBtn>중대형</FilterBtn>
          <FilterBtn>승합차</FilterBtn>
        </LineWrapper>
        <LineWrapper>
          <FilterBtn noMargin>오픈카</FilterBtn>
          <FilterBtn>전기차</FilterBtn>
          <FilterBtn>수입</FilterBtn>
          <FilterBtn>신차</FilterBtn>
        </LineWrapper>
      </Folder>
    </AllWrapper>
  );

  function handleClick() {
    setisFold(!isFold);
  }
};

export default CarSizeFilter;
