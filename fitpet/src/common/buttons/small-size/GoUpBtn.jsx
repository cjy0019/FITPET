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
          hoverColor='#ff8a8a'
          position='fixed'
          top='85rem'
          right='7%'
          _onClick={handleClick}
        />
      </IconWrapper>
    )
  );

  //
  function btnAppear() {
    if (window.pageYOffset > 500) {
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
