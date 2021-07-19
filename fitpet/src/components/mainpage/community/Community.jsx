import React from 'react';
import styled, { css } from 'styled-components';
import Carousel from './Carousel';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
const Community = () => {
  return (
    <StyledSection>
      <StyledH2>커뮤니티</StyledH2>

      {/* 캐러셀 */}
      <Carousel />

      {/* 다음버튼 */}
      <NextButton next>
        <AiOutlineArrowRight />
      </NextButton>

      {/* 이전버튼 */}
      <NextButton prev>
        <AiOutlineArrowLeft />
      </NextButton>
    </StyledSection>
  );
};

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

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 5.8rem;
  height: 5.8rem;
  font-size: 3rem;
  opacity: 0.5;
  border: none;
  border-radius: 50%;
  color: #ffffff;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.16);
  background-color: #707070;

  ${(props) =>
    props.next &&
    css`
      right: 0;
    `}

  ${(props) =>
    props.prev &&
    css`
      left: 0;
    `}
`;

export default Community;
