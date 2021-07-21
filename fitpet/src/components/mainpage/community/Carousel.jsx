import React from 'react';
import styled from 'styled-components';

const Carousel = ({ carouselRef, imgArr }) => {
  return (
    <CardWrapper ref={carouselRef}>
      {/* <CommunityCard>
        <ImgWrapper src='/img/start.jpg'></ImgWrapper>

        <h3>Hva er Lorem Ipsum?</h3>
        <p>
          I motsättning till vad många tror, är inte Lorem Ipsum slumpvisa ord.
          Det har sina rötter i ett stycke klassiskt litter atur på latin från 45
          år före år 0, och är alltså över 2000 år gammalt. Richard McClintock,
          en professor i latin på Hampden-Sydney College i Virginia, översatte
          ett av de mer ovanliga orden, consectetur, från ett stycke Lorem Ipsum
        </p>
        <span>by.민정</span>
      </CommunityCard>*/}

      {imgArr.map((img, i) => {
        return (
          <>
            <CommunityCard>
              <ImgWrapper src={img} key={i}></ImgWrapper>
            </CommunityCard>
          </>
        );
      })}
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  transform: translateX(25.4rem);
`;

const CommunityCard = styled.div`
  width: 25.4rem;
  margin-right: 2.2rem;
  color: #979797;

  h3 {
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 1.17;
    letter-spacing: -0.36;
    margin-top: 2rem;
  }

  p {
    font-size: 1.4rem;
    line-height: 1.14;
    margin-top: 1.4rem;
    margin-bottom: 2.4rem;
    letter-spacing: -0.28px;
  }

  span {
    font-size: 1.6rem;
    letter-spacing: -0.28px;
  }
`;

const ImgWrapper = styled.img`
  width: 25.4rem;
  height: 25rem;
  background-color: #979797;
`;

export default Carousel;
