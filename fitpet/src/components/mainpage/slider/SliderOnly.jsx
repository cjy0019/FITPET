import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Only, SliderLeftButton, SliderRightButton } from '../../../common';

const TOTAL_SLIDES = 1; // 전체 슬라이드 개수(총1개. 배열로 계산)

function SliderOnly() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide * 4}0%)`;
  }, [currentSlide]);

  // Next 버튼 클릭 시
  const NextSlide = () => {
    console.log('next');

    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면
      console.log('다음 슬라이드가 없습니다.');
      return; // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  // Prev 버튼 클릭 시
  const PrevSlide = () => {
    console.log('prev');
    if (currentSlide === 0) {
      console.log('다음 슬라이드가 없습니다.');
      return; // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

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
          <PrevBtn>
            <SliderLeftButton handleClick={PrevSlide}></SliderLeftButton>
          </PrevBtn>
          <NextBtn>
            <SliderRightButton handleClick={NextSlide}></SliderRightButton>
          </NextBtn>
        </ControlsBtn>
      </Block>
    </ContentBox>
  );
}

export default SliderOnly;
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
  box-sizing: border-box;
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
