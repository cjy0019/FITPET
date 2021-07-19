import React from 'react';
import styled from 'styled-components';

const Community = () => {
  return (
    <StyledSection>
      <StyledH2>커뮤니티</StyledH2>

      <CardWrapper>
        <CommunityCard>
          <ImgWrapper></ImgWrapper>
          <h3>배가 고프다</h3>
          <p>
            운동도 해야하는데 배가 고프다 마음이 서글프다 어흐흑어흐흑 이거 다
            언제 끝내지
          </p>
          <span>by.민정</span>
        </CommunityCard>

        <CommunityCard>
          <ImgWrapper></ImgWrapper>
          <h3>배가 고프다</h3>
          <p>
            운동도 해야하는데 배가 고프다 마음이 서글프다 어흐흑어흐흑 이거 다
            언제 끝내지
          </p>
          <span>by.민정</span>
        </CommunityCard>

        <CommunityCard>
          <ImgWrapper></ImgWrapper>
          <h3>배가 고프다</h3>
          <p>
            운동도 해야하는데 배가 고프다 마음이 서글프다 어흐흑어흐흑 이거 다
            언제 끝내지
          </p>
          <span>by.민정</span>
        </CommunityCard>

        <CommunityCard>
          <ImgWrapper></ImgWrapper>
          <h3>배가 고프다</h3>
          <p>
            운동도 해야하는데 배가 고프다 마음이 서글프다 어흐흑어흐흑 이거 다
            언제 끝내지
          </p>
          <span>by.민정</span>
        </CommunityCard>
        <CommunityCard>
          <ImgWrapper></ImgWrapper>
          <h3>배가 고프다</h3>
          <p>
            운동도 해야하는데 배가 고프다 마음이 서글프다 어흐흑어흐흑 이거 다
            언제 끝내지
          </p>
          <span>by.민정</span>
        </CommunityCard>
        <CommunityCard>
          <ImgWrapper></ImgWrapper>
          <h3>배가 고프다</h3>
          <p>
            운동도 해야하는데 배가 고프다 마음이 서글프다 어흐흑어흐흑 이거 다
            언제 끝내지
          </p>
          <span>by.민정</span>
        </CommunityCard>
        <CommunityCard>
          <ImgWrapper></ImgWrapper>
          <h3>배가 고프다</h3>
          <p>
            운동도 해야하는데 배가 고프다 마음이 서글프다 어흐흑어흐흑 이거 다
            언제 끝내지
          </p>
          <span>by.민정</span>
        </CommunityCard>
      </CardWrapper>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  background-color: blanchedalmond;
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

const CardWrapper = styled.div`
  display: flex;
  transform: translateX(25.4rem);
  overflow: hidden;
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

const ImgWrapper = styled.div`
  width: 25.4rem;
  height: 25rem;
  background-color: #979797;
`;

export default Community;
