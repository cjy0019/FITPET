import React, { useEffect, useRef, useState } from 'react';
import {
  DownButton,
  FilterBtn,
  FilterTitle,
  UpButton,
  AllWrapper,
  ButtonContainer,
  Folder,
  LineWrapper,
} from '../hotel_common/filterCommon';

const LevelFilter = () => {
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
