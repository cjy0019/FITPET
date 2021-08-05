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

const DogFilter = () => {
  const [isFold, setisFold] = useState(true);
  const foldingRef = useRef(null);

  useEffect(() => {
    if (isFold) {
      foldingRef.current.style =
        'visibility : visible; height: 10rem; opacity:1;';
    } else {
      foldingRef.current.style = 'visibility : hidden; height: 0; opacity:0';
    }
  }, [isFold]);

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
          <FilterBtn noMargin>소형견</FilterBtn>
          <FilterBtn>중형견</FilterBtn>
          <FilterBtn>대형견</FilterBtn>
          <FilterBtn>고양이</FilterBtn>
        </LineWrapper>
      </Folder>
    </AllWrapper>
  );

  function handleClick() {
    setisFold(!isFold);
  }
};

export default DogFilter;
