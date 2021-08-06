import React from 'react';
import styled, { css } from 'styled-components';

const BasicBox = (props) => {
  return <StyledBox {...props} />;

  // <StyledBox {...props} onClick={handleClick}>
  //   <TextBox {...props}>{text ? text : children}</TextBox>
  // </StyledBox>
};

// 기본 : 다양한 숙소 둘러보기 버튼
const BoxStyle = css`
  position: relative;
  color: ${(props) => props.theme.white_color};
  font-size: 2.4rem;
  font-weight: normal;
  margin: 0;
  padding: 0;
  width: 28px;
  height: 28px;
  background-color: ${(props) => props.theme.grey2_color};
  border: none;
  border-radius: 26px;

  // [숙소 메인] 핏펫에서 지금 뜨는 혜택! 정사각형 박스
  ${(props) =>
    props.hotel_box1 &&
    css`
      width: 40rem;
      height: 40rem;
      border-radius: 30px;
      margin: 0 4rem 6rem 0;
      color: ${(props) => props.theme.black1_color};
      font-size: 1.8rem;
      font-weight: normal;
    `}
  // [숙소 메인] 핏펫에서 지금 뜨는 혜택! 직사각형 박스
  ${(props) =>
    props.hotel_box2 &&
    css`
      width: 40rem;
      height: 52rem;
      border-radius: 30px;
      margin: 0 4rem 6rem 0;
      color: ${(props) => props.theme.black1_color};
      font-size: 1.8rem;
      font-weight: normal;
    `}
  // [렌트카 메인] 검증된 렌트카 파트너사 박스
  ${(props) =>
    props.rentalcar_box1 &&
    css`
      width: 40rem;
      height: 25.1rem;
      border-radius: 15px;
      margin: 0 4rem 0 0;
      color: ${(props) => props.theme.black1_color};
      font-size: 1.8rem;
      font-weight: normal;
    `}

  // [렌트카 메인] 드라이브 추천 여행지 박스
  ${(props) =>
    props.rentalcar_box2 &&
    css`
      width: 29rem;
      height: 29rem;
      border-radius: 15px;
      margin: 0 4rem 0 0;
      color: ${(props) => props.theme.black1_color};
      font-size: 1.8rem;
      font-weight: normal;
    `}
`;

// const TextBox = styled.div`
//   width: 33.9rem;
//   height: 7.7rem;
//   position: relative;
//   top: 70%;
//   margin: 0 0 4.2rem 3.1rem;
//   padding-bottom: 42px;
// `;

const StyledBox = styled.div`
  ${BoxStyle}
`;

export default BasicBox;
