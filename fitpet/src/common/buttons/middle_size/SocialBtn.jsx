import React from 'react';
import styled from 'styled-components';
const SocialBtn = () => {
  const iconKakao = '/img/ico-kakao.png';
  return (
    <SocialBtnWrapper>
      <button>
        <IconImg src={iconKakao} alt='카카오톡' />
      </button>
      <button>
        <IconImg src={iconKakao} alt='카카오톡' />
      </button>
      <button>
        <IconImg src={iconKakao} alt='카카오톡' />
      </button>
      <button>
        <IconImg src={iconKakao} alt='카카오톡' />
      </button>
    </SocialBtnWrapper>
  );
};

const SocialBtnWrapper = styled.div`
  display: flex;
  button {
    cursor: pointer;
    all: unset;
    :not(:last-child) {
      margin: 0 3.5rem 0 0;
    }
  }
`;

const IconImg = styled.img`
  width: 5rem;
  height: 5rem;
`;

export default SocialBtn;
