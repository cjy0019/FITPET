import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { SliderLeftButton, SliderRightButton, Tag } from '../../../common';
import { locationSlider } from './sliderData';

const SliderLocation = () => {
  const TOTAL_SLIDES = 1;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  // 6개 슬라이드 효과 주기 translateX(-51.5%)
  useEffect(() => {
    let slideValue = currentSlide * 5 * 10;
    if (currentSlide > 0) {
      slideValue += 1.5;
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
          <LocationWrapper ref={slideRef}>
            {locationSlider.map((info, index) => {
              return (
                <Location key={index * 9.12}>
                  <Tag margin='0 4rem 0 0' info={info}></Tag>
                </Location>
              );
            })}
          </LocationWrapper>
        </Content>
        {/* 슬라이드 버튼 */}
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
const LocationWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  padding-top: 2rem;
`;
const Location = styled.li`
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

export default SliderLocation;
