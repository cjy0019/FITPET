import React, { useEffect, useState } from 'react';
import IconButton from './IconButton';
import { BsArrowUp } from 'react-icons/bs';
import styled from 'styled-components';

const GoUpBtn = () => {
  const [btnRender, setBtnRender] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', btnAppear);

    return () => {
      window.removeEventListener('scroll', btnAppear);
    };
  });

  return (
    btnRender && (
      <IconWrapper>
        <IconButton
          Icon={BsArrowUp}
          width='6rem'
          height='6rem'
          border='solid 1px #979797'
          color='#979797'
          fontSize='4rem'
          backColor='#ffffff'
          hoverColor='#979797'
          textHover='#ffffff'
          position='fixed'
          top='90vh'
          right='5vw'
          _onClick={handleClick}
        />
      </IconWrapper>
    )
  );

  function btnAppear() {
    const top =
      window.pageYOffset ||
      window.scrollY ||
      document.documentElement.scrollTop || // 익스9 이하 버전 지원
      document.body.scrollTop; // 오페라 크롬 사파리 지원

    top >= 500 ? setBtnRender(true) : setBtnRender(false);
  }

  // 클릭시 최상단으로 이동
  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
};

const IconWrapper = styled.div`
  position: relative;
  margin-top: 1.5rem;
`;

export default GoUpBtn;
