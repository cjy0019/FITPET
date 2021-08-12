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
  padding: 1.4rem 4.1rem 1.4rem 4.2rem;
  border-radius: 26px;
  background-color: ${(props) => props.theme.main_color};

  // 코스 보러가기, 나만의 맞춤코스 짜기, 다른 사람들의 코스 구경하기 버튼
  ${(props) =>
    props.goto_course &&
    css`
      height: 5.2rem;
      margin: 0 0.05rem 0 0;
      padding: 1rem 4.5rem 1rem 6.2rem;
      border-radius: 2.7rem;
      background-color: ${(props) => props.theme.main_color};
      color: ${(props) => props.theme.white_color};
      font-size: 2rem;
      font-weight: normal;
      font-size: 2.1rem;
      font-weight: bold;
      text-align: left;
    `}

  // fit한 코스짜기, 확인 및 결제 버튼
  ${(props) =>
    props.fit_course &&
    css`
      height: 5.2rem;
      margin: 3.4rem 0.05rem 0 0;
      padding: 1.6rem 11.5rem 1.5rem 11.5rem;
      border-radius: 7px;
      background-color: ${(props) => props.theme.main_color};
      color: ${(props) => props.theme.white_color};
      font-size: 1.8rem;
      font-weight: normal;
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

export default MiddleBtn;
