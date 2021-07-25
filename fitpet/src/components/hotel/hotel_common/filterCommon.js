import styled, { css } from 'styled-components';

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
