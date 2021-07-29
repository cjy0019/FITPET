import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Carousel from './Carousel';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
const Community = () => {
  const totalSlides = 5;
  const [ImgArr] = useState([
    '/img/start.jpg',
    '/img/dog1.jpg',
    '/img/dog2.jpg',
    '/img/dog3.jpg',
    '/img/dog4.jpg',
    '/img/finish.jpg',
    '/img/start.jpg',
    '/img/dog1.jpg',
    '/img/dog2.jpg',
    '/img/dog3.jpg',
    '/img/dog4.jpg',
    '/img/finish.jpg',
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const _prevRef = useRef(null);

  useEffect(() => {
    if (currentSlide === 0) {
      carouselRef.current.style = 'margin-left : 18rem';
      _prevRef.current.style = 'opacity : 0; visibility:hidden;';
    } else if (currentSlide === 1) {
      carouselRef.current.style.transform = `translate(-${
        currentSlide * 94.2
      }rem)`;
      _prevRef.current.style =
        'visibility : visible; transition : all 0.3s ease; opacity : 0.4;';
    }

    carouselRef.current.style.transition = 'all 0.5s ease';
    carouselRef.current.style.transform = `translate(-${
      currentSlide * 76.2
    }rem)`;
  }, [currentSlide]);

  return (
    <StyledSection>
      <StyledH2>커뮤니티</StyledH2>

      {/* 캐러셀 */}
      <Carousel carouselRef={carouselRef} imgArr={ImgArr} />

      {/* 다음버튼 */}
      <NextButton next onClick={slideNext}>
        <AiOutlineArrowRight />
      </NextButton>

      {/* 이전버튼 */}
      <NextButton prev onClick={slidePrev} ref={_prevRef}>
        <AiOutlineArrowLeft />
      </NextButton>
    </StyledSection>
  );

  function slideNext() {
    if (currentSlide >= totalSlides) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  function slidePrev() {
    if (currentSlide === 0) {
      setCurrentSlide(totalSlides);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }
};

// styling
const StyledSection = styled.section`
  position: relative;
  overflow: hidden;
  width: 128rem;
  margin: 0 auto;
`;

const StyledH2 = styled.h2`
  font-size: 4.2rem;
  font-weight: bold;
  line-height: 1.19;
  margin-bottom: 1.6rem;
  color: #707070;
  text-align: left;
`;

// button styling
const NextButton = styled.button`
  position: absolute;
  top: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.8rem;
  height: 5.8rem;
  font-size: 3rem;
  opacity: 0.4;
  border: none;
  border-radius: 50%;
  color: #ffffff;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.16);
  background-color: #707070;

  &:hover {
    transform: scale(1.2);
    transition: all ease 0.2s;
  }
  ${(props) =>
    props.next &&
    css`
      right: 1rem;
    `}

  ${(props) =>
    props.prev &&
    css`
      left: 1rem;
    `}
`;

export default Community;
