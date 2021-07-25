import React from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import styled, { css } from 'styled-components';
import { IconButton } from '../../../common';

// 필터링 버튼
export const FilterBtn = styled.button`
  font-size: 1.4rem;
  padding: 1.1rem;
  color: #707070;
  height: 4rem;
  border-radius: 0.7rem;
  border: solid 1px #707070;
  background-color: #ffffff;
  white-space: nowrap;
  margin-left: 1rem;

  ${(props) =>
    props.noMargin &&
    css`
      margin-left: 0;
    `}
`;

// 필터링 제목
export const FilterTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.2;
  color: #707070;
`;

// '>' 위쪽 화살표 버튼
export const UpButton = (props) => {
  return (
    <>
      <IconButton
        Icon={IoIosArrowUp}
        width='2.8rem'
        height='2.8rem'
        border='none'
        borderRadius='0'
        backColor='#cbcbcb'
        color='black'
        _onClick={props._onClick}
      />
    </>
  );
};

// '>' 아래쪽 화살표 버튼
export const DownButton = (props) => {
  return (
    <>
      <IconButton
        Icon={IoIosArrowDown}
        width='2.8rem'
        height='2.8rem'
        border='none'
        borderRadius='0'
        backColor='#cbcbcb'
        color='black'
        _onClick={props._onClick}
      />
    </>
  );
};

// '>' 오른쪽 화살표 버튼
export const RightButton = () => {
  return (
    <>
      <IconButton
        width='2.8rem'
        height='2.8rem'
        borderRadius='0'
        border='none'
        color='black'
        Icon={GrNext}
      />
    </>
  );
};

// '<' 왼쪽 화살표 버튼
export const LeftButton = () => {
  return (
    <>
      <IconButton
        width='2.8rem'
        height='2.8rem'
        borderRadius='0'
        border='none'
        color='black'
        Icon={GrPrevious}
      />
    </>
  );
};
