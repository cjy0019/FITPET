import React, { useEffect, useState } from 'react';
import IconButton from './IconButton';
import { BsArrowUp } from 'react-icons/bs';
import styled from 'styled-components';

const GoUpBtn = () => {
  const [btnRender, setBtnRender] = useState(false);

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
          width='4.8rem'
          height='4.8rem'
          color='#979797'
          fontSize='4rem'
          backColor='#ffffff'
          position='absolute'
          right='11.6rem'
          _onClick={handleClick}
        />
      </IconWrapper>
    )
  );

  //
  function btnAppear() {
    if (window.pageYOffset > 3160) {
      setBtnRender(true);
    } else {
      setBtnRender(false);
    }
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
