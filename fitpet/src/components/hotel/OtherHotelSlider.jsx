import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  Font,
  SliderLeftButton,
  SliderRightButton,
  WishSmall,
} from '../../common';

const TOTAL_SLIDES = 1;

const OtherHotelSlider = () => {
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
    slideRef.current.style.transform = `translateX(-${slideValue}0%)`;
  }, [currentSlide]);

  return (
    <ContentBox>
      <Block>
        <Content>
          <HotelWrapper ref={slideRef}>
            <Hotel>
              <WishSmall margin='0 4rem 0 0'></WishSmall>
              <Font
                color='#707070'
                fontSize='1.4rem'
                fontWeight='600'
                margin='1.4rem 0 0.6rem 2.3rem'>
                호텔 | 5성급
              </Font>
              <Font
                color='#707070'
                fontSize='1.8rem'
                fontWeight='bold'
                margin='0 0 0.6rem 2.3rem'>
                롯데호텔 제주
              </Font>
              <Font
                color='#707070'
                fontSize='1.8rem'
                margin='0 0 3.8rem 2.3rem'>
                <span>44,900</span>~ 50,000
              </Font>
            </Hotel>
            <Hotel>
              <WishSmall margin='0 4rem 0 0'></WishSmall>
              <Font
                color='#707070'
                fontSize='1.4rem'
                fontWeight='600'
                margin='1.4rem 0 0.6rem 2.3rem'>
                호텔 | 5성급
              </Font>
              <Font
                color='#707070'
                fontSize='1.8rem'
                fontWeight='bold'
                margin='0 0 0.6rem 2.3rem'>
                롯데호텔 제주
              </Font>
              <Font
                color='#707070'
                fontSize='1.8rem'
                margin='0 0 3.8rem 2.3rem'>
                <span>44,900</span>~ 50,000
              </Font>
            </Hotel>
            <Hotel>
              <WishSmall margin='0 4rem 0 0'></WishSmall>
              <Font
                color='#707070'
                fontSize='1.4rem'
                fontWeight='600'
                margin='1.4rem 0 0.6rem 2.3rem'>
                호텔 | 5성급
              </Font>
              <Font
                color='#707070'
                fontSize='1.8rem'
                fontWeight='bold'
                margin='0 0 0.6rem 2.3rem'>
                롯데호텔 제주
              </Font>
              <Font
                color='#707070'
                fontSize='1.8rem'
                margin='0 0 3.8rem 2.3rem'>
                <span>44,900</span>~ 50,000
              </Font>
            </Hotel>
            <Hotel>
              <WishSmall margin='0 4rem 0 0'></WishSmall>
              <Font
                color='#707070'
                fontSize='1.4rem'
                fontWeight='600'
                margin='1.4rem 0 0.6rem 2.3rem'>
                호텔 | 5성급
              </Font>
              <Font
                color='#707070'
                fontSize='1.8rem'
                fontWeight='bold'
                margin='0 0 0.6rem 2.3rem'>
                롯데호텔 제주
              </Font>
              <Font
                color='#707070'
                fontSize='1.8rem'
                margin='0 0 3.8rem 2.3rem'>
                <span>44,900</span>~ 50,000
              </Font>
            </Hotel>
            <Hotel>
              <WishSmall margin='0 4rem 0 0'></WishSmall>
              <Font
                color='#707070'
                fontSize='1.4rem'
                fontWeight='600'
                margin='1.4rem 0 0.6rem 2.3rem'>
                호텔 | 5성급
              </Font>
              <Font
                color='#707070'
                fontSize='1.8rem'
                fontWeight='bold'
                margin='0 0 0.6rem 2.3rem'>
                롯데호텔 제주
              </Font>
              <Font
                color='#707070'
                fontSize='1.8rem'
                margin='0 0 3.8rem 2.3rem'>
                <span>44,900</span>~ 50,000
              </Font>
            </Hotel>
            <Hotel>
              <WishSmall margin='0 4rem 0 0'></WishSmall>
              <Font
                color='#707070'
                fontSize='1.4rem'
                fontWeight='600'
                margin='1.4rem 0 0.6rem 2.3rem'>
                호텔 | 5성급
              </Font>
              <Font
                color='#707070'
                fontSize='1.8rem'
                fontWeight='bold'
                margin='0 0 0.6rem 2.3rem'>
                롯데호텔 제주
              </Font>
              <Font
                color='#707070'
                fontSize='1.8rem'
                margin='0 0 3.8rem 2.3rem'>
                <span>44,900</span>~ 50,000
              </Font>
            </Hotel>
          </HotelWrapper>
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
const HotelWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  padding-top: 2rem;
`;
const Hotel = styled.li`
  position: relative;
  span {
    font-weight: bold;
    margin-right: 1rem;
  }
  p {
    line-height: 20px;
  }
`;
const ControlsBtn = styled.div`
  position: relative;
  width: 128rem;
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

export default OtherHotelSlider;
