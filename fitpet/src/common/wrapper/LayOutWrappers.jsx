// 헤더 아래에 있는 process 헤더 컨테이너 스타일

import styled from 'styled-components';

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10rem;
  position: fixed;
  padding-bottom: 2rem;
  top: 10rem;
  z-index: 30;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
`;

// 운전자 정보 입력 페이지 & 예약 정보 확인 페이지 전체 레이아웃
export const StyledArticle = styled.article`
  width: 128rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 46rem;
  padding-top: 6rem;
  padding-top: 220px;
`;
