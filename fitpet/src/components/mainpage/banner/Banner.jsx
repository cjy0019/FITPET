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
      <SearchInput placeholder='어디로 떠날까요? 여행지 또는 상품을 검색해주세요 &#58;&#41;'></SearchInput>

      <MiddleBtn style={{ marginTop: '14.3rem' }}>
        다양한 숙소 둘러보기
      </MiddleBtn>
    </BannerWrappr>
  );
};

const BannerWrappr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 74.4rem;
  padding-bottom: 17.6rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('/img/main/mainsearch.png');
`;

const SearchInput = styled.input`
  width: 108rem;
  height: 9.4rem;
  padding: 2.3rem 0 2.3rem 10.5rem;
  border-radius: 15px;
  border: none;
  outline: none;
  margin-top: 3rem;
  font-size: 1.8rem;
  font-weight: 500;
  box-shadow: 5px 5px 6px 0 rgba(0, 0, 0, 0.16);

  background-image: url('/img/main/bannerSearch.svg');
  background-color: ${(props) => props.theme.white_color};
  background-size: 4.8rem 4.8rem;
  background-position: 2.3rem center;
  background-repeat: no-repeat;

  &::placeholder {
    color: ${(props) => props.theme.grey3_color};
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: -0.36px;
    text-align: left;
  }
`;

const SectionTitle = styled.h2`
  font-family: PretendardVariable;
  font-size: 3.8rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.18;
  margin-top: 15.7rem;
  letter-spacing: normal;
  color: ${(props) => props.theme.white_color};
`;

export default banner;
