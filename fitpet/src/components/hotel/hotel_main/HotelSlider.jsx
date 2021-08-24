import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { SliderLeftButton, SliderRightButton } from '../../../common';
import PillBox from './PillBox';
const HotelSlider = ({ hotels }) => {
  const TOTAL_SLIDES = 1;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  // 6개 슬라이드 효과 주기
  useEffect(() => {
    let slideValue = currentSlide * 100;
    if (currentSlide > 0) {
      slideValue += 3;
      nextBtnRef.current.style = 'visibility:hidden';
      prevBtnRef.current.style = 'visibility:visible';
    } else {
      nextBtnRef.current.style = 'visibility:visible';
      prevBtnRef.current.style = 'visibility:hidden';
    }
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${slideValue}%)`;
  }, [currentSlide]);
  return (
    <SliderWrapper>
      <Content>
        <PillWrapper ref={slideRef}>
          {hotels.map((hotel, i) => {
            return (
              <div className='PillBox' key={i}>
                <PillBox key={hotel.id} hotel={hotel} margin='0 3rem 0 0' />
              </div>
            );
          })}
        </PillWrapper>
      </Content>
      <ControlsBtn>
        <PrevBtn ref={prevBtnRef}>
          <SliderLeftButton handleClick={prevSlide}></SliderLeftButton>
        </PrevBtn>
        <NextBtn ref={nextBtnRef}>
          <SliderRightButton handleClick={nextSlide}></SliderRightButton>
        </NextBtn>
      </ControlsBtn>
    </SliderWrapper>
  );
  // Next 버튼 클릭 시
  function nextSlide() {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면
      return; // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }
  // Prev 버튼 클릭 시
  function prevSlide() {
    if (currentSlide === 0) {
      return; // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }
};

const SliderWrapper = styled.div`
  margin-top: 15rem;
  margin-left: 37rem;
  position: absolute;
  width: 91.5rem;
`;
const PillWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  .PillBox {
    margin-right: 3rem;
  }
`;
const Content = styled.div`
  width: 100%;
  height: 50rem;
  overflow: hidden;
  position: relative;
`;
const ControlsBtn = styled.div`
  position: relative;
  width: 91.5rem;
  margin: auto 0;
`;
const PrevBtn = styled.span`
  left: -2rem;
  position: absolute;
  bottom: 24rem;
`;
const NextBtn = styled.span`
  right: -2rem;
  position: absolute;
  bottom: 24rem;
`;

export default HotelSlider;
