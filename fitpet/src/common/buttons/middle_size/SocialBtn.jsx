import React from 'react';
import styled from 'styled-components';
const SocialBtn = () => {
  const iconKakao = '/img/ico-kakao.png';
  return (
    <SocialBtnWrapper>
      <button>
        <IconNaverImg src={iconKakao} alt='네이버' />
      </button>
      <button>
        <IconKaKaoImg src={iconKakao} alt='카카오톡' />
      </button>
    </SocialBtnWrapper>
  );
};

const SocialBtnWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  button {
    cursor: pointer;
    all: unset;
  }
`;

const IconNaverImg = styled.img.attrs({
  src: '/img/auth/naver.png',
  alt: 'naver_icon',
})`
  width: 5rem;
  height: 5rem;
  margin-right: 4rem;
`;

const IconKaKaoImg = styled.img.attrs({
  src: '/img/auth/kakao.png',
  alt: 'kakao_icon',
})`
  width: 5rem;
  height: 5rem;
`;
export default SocialBtn;
