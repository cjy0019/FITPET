import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  DownButton,
  FilterBtn,
  FilterTitle,
  UpButton,
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

const Folder = styled.div`
  transition: ease 0.2s;
  height: 9rem;
`;

export default LevelFilter;
