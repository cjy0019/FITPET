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
} from '../hotel_common/filterCommon';

const RatingFilter = () => {
  const [isFold, setisFold] = useState(true);
  const foldingRef = useRef(null);

  useEffect(() => {
    if (isFold) {
      foldingRef.current.style =
        'visibility : visible; height: 10rem; opacity : 1';
    } else {
      foldingRef.current.style = 'visibility : hidden; height: 0rem; opacity:0';
    }
  }, [isFold]);

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
