import React from 'react';
import styled from 'styled-components';
import { MiddleSizeButton } from '../../../common';
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

      <MiddleSizeButton
        text='다양한 숙소 둘러보기'
        fontSize='1.9rem'
        width='24.6rem'
        borderRadius='2.6rem'
        pt='1.4rem'
        pb='1.4rem'
        pr='4.2rem'
        pl='4.2rem'
        mt='6.2rem'
        backColor='#636363'
        height='5.2rem'
        color='#ffffff'></MiddleSizeButton>
    </BannerWrappr>
  );
};

const BannerWrappr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.6rem;
  width: 100%;
  height: 60rem;
  background-color: #979797;
`;

const SearchInput = styled.input`
  width: 108rem;
  padding: 2.3rem 0 2.3rem 10.5rem;
  border-radius: 1.5rem;
  border: none;
  outline: none;
  margin-top: 3rem;
  font-size: 1.8rem;

  background-color: darkkhaki;
  background-image: url('/img/logo-social.png');
  background-size: 4.8rem 4.8rem;
  background-position: 2.3rem center;
  background-repeat: no-repeat;

  &::placeholder {
    color: #707070;
    font-weight: 500;
    font-size: 1.8rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3.8rem;
  font-weight: bold;
  line-height: 1.18;
  margin: 20.3rem 0 0 0;
  color: #ffffff;
`;

export default banner;
