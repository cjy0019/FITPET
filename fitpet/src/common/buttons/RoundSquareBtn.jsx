import React from 'react';
import styled, { css } from 'styled-components';

const RoundSquareBtn = (props) => {
  const { text, children } = props;
  return <StyledButton {...props}>{text ? text : children}</StyledButton>;
};

// 기본 : 장바구니 버튼
const buttonStyle = css`
  height: 4.8rem;
  min-width: 7.4rem;
  padding: 1.6rem 2.8rem 1.3rem;
  border-radius: 7px;
  font-size: 1.6rem;
  font-weight: normal;
  border: none;
  background-color: ${(props) => props.theme.grey4_color};
  color: ${(props) => props.theme.main_color};

  // 상세보기 버튼
  ${(props) =>
    props.main_color &&
    css`
      background-color: ${(props) => props.theme.main_color};
      color: ${(props) => props.theme.white_color};
    `}

  // 검색, 재검색, 상세보기 버튼
  ${(props) =>
    props.search_btn &&
    css`
      padding: 1.6rem;
      background-color: ${(props) => props.theme.main_color};
      color: ${(props) => props.theme.white_color};
    `}
  // 모두사용, 인증하기 버튼
  ${(props) =>
    props.grey_color &&
    css`
      background-color: ${(props) => props.theme.grey3_color};
      color: ${(props) => props.theme.white_color};
    `}
  //  Fit한 코스 계획하기 버튼
  ${(props) =>
    props.course_btn &&
    css`
      height: 6rem;
      padding: 1.8rem 3.5rem;
      border-radius: 15px;
      background-color: ${(props) => props.theme.main_color};
      color: ${(props) => props.theme.white_color};
      font-size: 2rem;
      line-height: 1.2;
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

export default RoundSquareBtn;
