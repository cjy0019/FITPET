import React from 'react';
import styled from 'styled-components';
import Font from '../../fonts/Font';
import SampleIcon from '../../icons/SampleIcon';

const HoverText = () => {
  return (
    <HoverTextWrapper>
      <SampleIcon width='12.5rem' height='12.5rem' />
      <HoverIcon />
      {/* 호버시 물풍선 텍스트 설명 */}
      <p class='arrow_box'>
        호텔 앞에 애견 운동장이 있어 <br />
        마음껏 뛰어 놀 수 있어요!
      </p>
      <Font fontSize='2rem' fontWeight='normal' color='#707070' mt='0.7rem'>
        운동장
      </Font>
    </HoverTextWrapper>
  );
};

const HoverTextWrapper = styled.div`
  position: relative;
  display: inline-block;
  .arrow_box {
    display: none;
    position: absolute;
    width: 160px;
    padding: 8px;
    top: -55px;
    left: 10px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 2px;
    border-radius: 8px;
    background-color: #cbcbcb;
    color: #707070;
    font-size: 12px;
    ::after {
      position: absolute;
      top: 100%;
      left: 50%;
      width: 0;
      height: 0;
      margin-left: -1rem;
      border: solid transparent;
      border-top-color: #cdcdcd;
      border-width: 5px;
      pointer-events: none;
      content: ' ';
    }
  }
`;

const HoverIcon = styled.button`
  top: 0.8rem;
  right: 0.8rem;
  position: absolute;
  width: 2rem;
  height: 2rem;
  background-color: #fff;
  border-radius: 50%;
  border: none;
  :hover + p.arrow_box {
    display: block;
  }
`;

export default HoverText;
