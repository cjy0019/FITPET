import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  Font,
  SliderLeftButton,
  SliderRightButton,
  WishSmall,
} from '../../../common';

const TOTAL_SLIDES = 1;

function SliderRentalcar() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    let slideValue = currentSlide * 5 * 10;
    if (currentSlide > 0) {
      slideValue += 1.5;
    }
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    console.log('slideValue: ' + slideValue);
    slideRef.current.style.transform = `translateX(-${slideValue}0%)`;
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
          <RentalcarWrapper ref={slideRef}>
            <Rentalcar>
              <WishSmall margin='0 4rem 0 0'></WishSmall>
              <Font
                color='#707070'
                fontSize='1.8rem'
                margin='1.4rem 0 3.8rem 2.3rem'>
                <span>
                  [경차] 레이
                  <br />
                  44,900
                </span>
                ~ 50,000
              </Font>
            </Rentalcar>
            <Rentalcar>
              <WishSmall margin='0 4rem 0 0'></WishSmall>
              <Font
                color='#707070'
                fontSize='1.8rem'
                margin='1.4rem 0 3.8rem 2.3rem'>
                <span>
                  [경차] 레이
                  <br />
                  44,900
                </span>
                ~ 50,000
              </Font>
            </Rentalcar>
            <Rentalcar>
              <WishSmall margin='0 4rem 0 0'></WishSmall>
              <Font
                color='#707070'
                fontSize='1.8rem'
                margin='1.4rem 0 3.8rem 2.3rem'>
                <span>
                  [경차] 레이
                  <br />
                  44,900
                </span>
                ~ 50,000
              </Font>
            </Rentalcar>
            <Rentalcar>
              <WishSmall margin='0 4rem 0 0'></WishSmall>
              <Font
                color='#707070'
                fontSize='1.8rem'
                margin='1.4rem 0 3.8rem 2.3rem'>
                <span>
                  [경차] 레이
                  <br />
                  44,900
                </span>
                ~ 50,000
              </Font>
            </Rentalcar>
            <Rentalcar>
              <WishSmall margin='0 4rem 0 0'></WishSmall>
              <Font
                color='#707070'
                fontSize='1.8rem'
                margin='1.4rem 0 3.8rem 2.3rem'>
                <span>
                  [경차] 레이
                  <br />
                  44,900
                </span>
                ~ 50,000
              </Font>
            </Rentalcar>
            <Rentalcar>
              <WishSmall></WishSmall>
              <Font
                color='#707070'
                fontSize='1.8rem'
                margin='1.4rem 0 3.8rem 2.3rem'>
                <span>
                  [경차] 레이
                  <br />
                  44,900
                </span>
                ~ 50,000
              </Font>
            </Rentalcar>
          </RentalcarWrapper>
        </Content>
        {/* 슬라이드 버튼 */}
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

export default SliderRentalcar;
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
const RentalcarWrapper = styled.ul`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  padding-top: 2rem;
`;
const Rentalcar = styled.li`
  position: relative;
  span {
    font-weight: bold;
  }
  p {
    line-height: 25px;
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
  bottom: 22.3rem;
`;
const NextBtn = styled.span`
  right: -2rem;
  position: absolute;
  bottom: 22.3rem;
`;
