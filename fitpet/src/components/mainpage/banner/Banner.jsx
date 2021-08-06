import React from 'react';
import styled from 'styled-components';
import { MiddleBtn } from '../../../common';
import MainNav from './MainNav';

const banner = () => {
  return (
    <BannerWrappr>
      {/* 네비게이션 */}
      <MainNav />

      {/* title */}
      <SectionTitle>반려동물과 함께하는 맞춤 힐링여행</SectionTitle>

      {/* 검색창 */}
      <SearchInput placeholder='어디로 떠날까요? 여행지 또는 상품을 검색해주세요:)'></SearchInput>

      <MiddleBtn style={{ marginTop: '4.4rem' }}>
        다양한 숙소 둘러보기
      </MiddleBtn>
    </BannerWrappr>
  );
};

const BannerWrappr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10.6rem;
  height: 60rem;

  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/img/main/bannerImg.png');
`;

const SearchInput = styled.input`
  width: 108rem;
  padding: 2.3rem 0 2.3rem 10.5rem;
  border-radius: 1.5rem;
  border: none;
  outline: none;
  margin-top: 3rem;
  font-size: 1.8rem;

  background-image: url('/img/main/bannerSearch.svg');
  background-color: ${(props) => props.theme.white_color};
  background-size: 4.8rem 4.8rem;
  background-position: 2.3rem center;
  background-repeat: no-repeat;

  &::placeholder {
    color: ${(props) => props.theme.grey1_color};
    font-weight: 500;
    font-size: 1.8rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3.8rem;
  font-weight: bold;
  line-height: 1.18;
  margin: 12.3rem 0 0 0;
  color: ${(props) => props.theme.white_color};
`;

export default banner;
