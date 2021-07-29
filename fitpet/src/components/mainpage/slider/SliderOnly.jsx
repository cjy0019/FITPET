import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Only, SliderLeftButton, SliderRightButton } from '../../../common';

const SliderOnly = () => {
  const TOTAL_SLIDES = 1;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  // 5개 슬라이드 효과 주기 translateX(-68.7%)
  useEffect(() => {
    let slideValue = currentSlide * 6 * 10;
    if (currentSlide > 0) {
      slideValue += 8.7;
      nextBtnRef.current.style = 'visibility:hidden;';
      prevBtnRef.current.style = 'visibility:visible;';
    } else {
      nextBtnRef.current.style = 'visibility:visible;';
      prevBtnRef.current.style = 'visibility:hidden;';
    }
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${slideValue}%)`;
  }, [currentSlide]);

  return (
    <ContentBox>
      <Block>
        <Content>
          <OnlyWrapper ref={slideRef}>
            {/* <SliderLeftButton onClick={PrevSlide} /> */}
            <OnlySlide>
              <Only margin='0 4rem 0 0'></Only>
            </OnlySlide>
            <OnlySlide>
              <Only margin='0 4rem 0 0'></Only>
            </OnlySlide>
            <OnlySlide>
              <Only margin='0 4rem 0 0'></Only>
            </OnlySlide>
            <OnlySlide>
              <Only margin='0 4rem 0 0'></Only>
            </OnlySlide>
            <OnlySlide>
              <Only margin='0 4rem 0 0'></Only>
            </OnlySlide>
          </OnlyWrapper>
        </Content>
        <ControlsBtn>
          <PrevBtn ref={prevBtnRef}>
            <SliderLeftButton handleClick={prevSlide}></SliderLeftButton>
          </PrevBtn>
          <NextBtn ref={nextBtnRef}>
            <SliderRightButton handleClick={nextSlide}></SliderRightButton>
          </NextBtn>
        </ControlsBtn>
      </Block>
    </ContentBox>
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

const ContentBox = styled.div`
  max-width: 128rem;
`;
const Block = styled.div`
  max-width: 128rem;
  margin: 0px auto;
`;
const Content = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;
const OnlyWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  padding-top: 2rem;
`;
const OnlySlide = styled.li`
  position: relative;
`;
const ControlsBtn = styled.div`
  position: relative;
  width: 128rem;
  margin: auto 0;
`;
const PrevBtn = styled.span`
  left: -2rem;
  position: absolute;
  bottom: 20rem;
`;
const NextBtn = styled.span`
  right: -2rem;
  position: absolute;
  bottom: 20rem;
`;

export default SliderOnly;
