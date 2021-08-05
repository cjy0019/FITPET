import React from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import styled, { css } from 'styled-components';
import { IconButton } from '../../../common';

// 필터링 버튼 컨테이너
export const AllWrapper = styled.div`
  margin-bottom: 4rem;
  margin-top: 1rem;
  border-bottom: solid 1px #eee;
  padding-bottom: 4rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LineWrapper = styled.div`
  margin-top: 1.2rem;
`;

export const Folder = styled.div`
  transition: ease 0.2s;
  height: 9rem;
`;

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
        backColor='#fff'
        border='none'
        borderRadius='0'
        color='black'
        handleClick={props.handleClick}
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
        backColor='#fff'
        borderRadius='0'
        color='black'
        handleClick={props.handleClick}
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

export const SmallHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.2rem;

  h2 {
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 1.5;
    color: #707070;
  }
`;

// HotelInfo.jsx
export const Info = styled.div`
  padding: 4rem 0;
  display: flex;
  border-bottom: solid 1px #eee;
`;

export const ImgBox = styled.div`
  position: relative;
  min-width: 22rem;
  height: 22rem;
  border-radius: 18px;
  background-color: #979797;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LikeBtn = styled.div`
  position: absolute;
  top: 1.4rem;
  right: 1.4rem;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  cursor: pointer;
  background-image: url('/img/hotel/hotel_list/likeicon.png');
`;

export const TextDetailWrapper = styled.div`
  width: 100%;

  /* clearfix */
  &:after {
    display: block;
    content: '';
    clear: both;
  }
`;

// HotelTextInfo.jsx

export const InfoContainer = styled.div`
  color: #979797;
  margin-left: 2.6rem;
  transform: translateY(5%);
`;

export const HotelName = styled.div`
  display: column;
`;

export const Star = styled.div`
  display: inline-block;
  display: flex;
  text-align: center;
  align-items: center;
`;

export const City = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
`;

export const Rect = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  background-color: #979797;
  margin-right: 0.4rem;
  display: inline-block;
`;

export const CityStar = styled.div`
  display: flex;

  ${(props) =>
    props.rent &&
    css`
      margin-top: 1rem;
    `}
`;
