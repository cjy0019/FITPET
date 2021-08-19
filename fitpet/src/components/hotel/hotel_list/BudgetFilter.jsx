import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  DownButton,
  FilterTitle,
  UpButton,
  ButtonContainer,
  Folder,
  AllWrapper,
} from '../hotel_common/filterCommon';

const BudgetFilter = () => {
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
        <FilterTitle>예산</FilterTitle>
        {isFold ? (
          <UpButton handleClick={handleClick} />
        ) : (
          <DownButton handleClick={handleClick} />
        )}
      </ButtonContainer>

      <Folder ref={foldingRef}>
        <StyledRange type='range' min='1' max='100' steps='1' />
      </Folder>
    </AllWrapper>
  );

  function handleClick() {
    setisFold(!isFold);
  }
};

const StyledRange = styled.input`
  width: 100%;
  height: 0.4rem;
  margin-top: 2.2rem;
  -webkit-appearance: none;
  background-color: #4765ff;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #ffffff;
    cursor: pointer;
    height: 2.4rem;
    width: 2.4rem;
    border-radius: 50%;
    box-shadow: 1px 1px 1px #c2c2c2, 0px 0px 1px #0d0d0d;
  }
`;

export default BudgetFilter;
