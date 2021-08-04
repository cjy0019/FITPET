import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const MiddleBtn = (props) => {
  return props.to ? <StyledLink {...props} /> : <StyledButton {...props} />;
};

// 기본 : 다양한 숙소 둘러보기 버튼
const buttonStyle = css`
  border: none;
  border-radius: 26px;
  color: ${(props) => props.theme.white_color};
  outline: none;
  cursor: pointer;
  font-size: 2rem;
  font-weight: normal;
  height: 5.4rem;
  padding: 14px 41px 14px 42px;
  border-radius: 26px;
  background-color: ${(props) => props.theme.main_color};

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.navy &&
    css`
      background: #636363;
      &:hover {
        background: #636363;
      }
    `}

    &:disabled {
    background: #636363;
    color: #636363;
    cursor: not-allowed;
  }
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

export default MiddleBtn;
