import React from 'react';
import styled from 'styled-components';
import Font from '../../../common/fonts/Font';
import MainNav from './MainNav';

const banner = () => {
  return (
    <BannerWrappr>
      <MainNav />

      <Font color='#ffffff'>반려동물과 함께하는 맞춤 힐링여행</Font>
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

export default banner;
