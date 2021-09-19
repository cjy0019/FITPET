import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { SliderLeftButton, SliderRightButton } from '../../../common';
import PillBox from './PillBox';
import PillBoxSkeleton from './PillBoxSkeleton';

const HotelSlider = () => {
  const TOTAL_SLIDES = 1;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const regions = useSelector((state) => state.hotelMain.regions);

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

  // 210905 by.dy
  // 로딩 스피너 제거 & 스켈레톤 UI 적용
  return (
    <SliderWrapper>
      <Content>
        <PillWrapper ref={slideRef}>
          {/* regions 데이터가 없을 때 (로딩 중) */}
          {regions.length === 0 ? (
            <>
              <div className='PillBox'>
                {<PillBoxSkeleton margin='0 3rem 0 0' />}
              </div>
              <div className='PillBox'>
                {<PillBoxSkeleton margin='0 3rem 0 0' />}
              </div>
              <div className='PillBox'>
                {<PillBoxSkeleton margin='0 3rem 0 0' />}
              </div>
            </>
          ) : (
            ''
          )}
          {regions.map((region, i) => {
            return (
              <div className='PillBox' key={i}>
                {/* 로딩 스피너 제거 & 스켈레톤 UI 적용 */}
                <PillBox key={region.id} region={region} margin='0 3rem 0 0' />
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
