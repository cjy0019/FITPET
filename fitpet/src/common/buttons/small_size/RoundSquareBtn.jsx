import React from 'react';
import styled, { css } from 'styled-components';

const RoundSquareBtn = (props) => {
  return <StyledButton {...props}></StyledButton>;
};

// 기본 : 장바구니 버튼
const buttonStyle = css`
  height: 4.8rem;
  padding: 1.6rem 2.8rem 1.3rem;
  border-radius: 7px;
  font-size: 1.6rem;
  font-weight: normal;
  border: none;
  background-color: ${(props) => props.theme.grey4_color};
  color: ${(props) => props.theme.main_color};

  // 검색, 재검색, 상세보기 버튼
  ${(props) =>
    props.main_color &&
    css`
      background-color: ${(props) => props.theme.main_color};
      color: ${(props) => props.theme.white_color};
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

export default RoundSquareBtn;
