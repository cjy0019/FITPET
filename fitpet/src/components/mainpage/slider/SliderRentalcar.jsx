import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  Font,
  SliderLeftButton,
  SliderRightButton,
  WishSmall,
} from '../../../common';
import { filteringCarSagaStart } from '../../../redux/modules/filteringCar';

const TOTAL_SLIDES = 1;

const SliderRentalcar = ({ cars }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const dispatch = useDispatch();
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

  useEffect(() => {
    dispatch(filteringCarSagaStart());
  }, [dispatch]);

  return (
    <ContentBox>
      <Block>
        <Content>
          <RentalcarWrapper ref={slideRef}>
            {cars ? (
              cars.map((car) => {
                return (
                  <Rentalcar key={car._id}>
                    <WishSmall
                      picture={car.picture}
                      margin='0 4rem 0 0'></WishSmall>
                    <Font
                      color='#2A2A2A'
                      fontSize='1.8rem'
                      margin='1.4rem 0 3.8rem 2.3rem'>
                      <span>
                        [{car.carType}]<br />
                        {car.carName}
                        <br />
                        {car.minPrice.toLocaleString()}{' '}
                      </span>
                      ~ {car.maxPrice.toLocaleString()}
                    </Font>
                  </Rentalcar>
                );
              })
            ) : (
              <Rentalcar />
            )}
          </RentalcarWrapper>
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
const RentalcarWrapper = styled.ul`
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

export default SliderRentalcar;
