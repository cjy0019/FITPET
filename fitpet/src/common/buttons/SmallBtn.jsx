import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const SmallBtn = (props) => {
  return props.to ? <StyledLink {...props} /> : <StyledButton {...props} />;
};

// 기본 : 제주도 버튼
const buttonStyle = css`
  border: none;
  border-radius: 26px;
  color: ${(props) => props.theme.grey1_color};
  outline: none;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: normal;
  padding: 1.1rem 1.9rem 1rem 1.9rem;
  border-radius: 2.6rem;
  background-color: ${(props) => props.theme.grey4_color};
  :focus {
    background-color: ${(props) => props.theme.main_color};
    color: ${(props) => props.theme.white_color};
  }

  // GoUpBtn
  ${(props) =>
    props.goup_btn &&
    css`
      width: 6rem;
      height: 6rem;
      border: solid 1px ${(props) => props.theme.grey2_color};
      font-size: 4rem;
      background-color: ${(props) => props.theme.white_color};
      color: ${(props) => props.theme.grey2_color};

      position: fixed;
      top: 90vh;
      right: 5vw;
      &:hover {
        background-color: ${(props) => props.theme.grey2_color};
        color: ${(props) => props.theme.white_color};
      }
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

export default SmallBtn;
