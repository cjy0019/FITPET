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

const BrandFilter = () => {
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
        <FilterTitle>브랜드</FilterTitle>
        {isFold ? (
          <UpButton handleClick={handleClick} />
        ) : (
          <DownButton handleClick={handleClick} />
        )}
      </ButtonContainer>

      <Folder ref={foldingRef}>
        <LineWrapper>
          <FilterBtn noMargin>현대</FilterBtn>
          <FilterBtn>기아</FilterBtn>
          <FilterBtn>르노삼성</FilterBtn>
          <FilterBtn>쌍용</FilterBtn>
        </LineWrapper>
        <LineWrapper>
          <FilterBtn noMargin>쉐보레</FilterBtn>
          <FilterBtn>수입</FilterBtn>
        </LineWrapper>
      </Folder>
    </AllWrapper>
  );

  function handleClick() {
    setisFold(!isFold);
  }
};

export default BrandFilter;
