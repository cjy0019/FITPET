import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { DownButton } from '../hotel/hotel_common/filterCommon';

const CourseSideBar = () => {
  return (
    <SideBar>
      <Wrapper>
        <ButtonContainer>
          <Link to='/'>
            <img src='/img/course/logo.svg' alt='코스메인' />
          </Link>
          <ResetBtn>
            <img src='/img/course/reset.svg' alt='리셋' />
            초기화
          </ResetBtn>
        </ButtonContainer>

        <SearchInput search type='text' placeholder='어디로 떠사시나요?' />
        <SearchInput people type='text' placeholder='어디로 떠사시나요?' />

        <DayContainer>
          <StyledText>Day 1 | 8월 21일</StyledText>
          <DownButton />
        </DayContainer>
        <Schedule>
          <p>입력된 일정이 없습니다</p>
          <p>저장한 코스를 불러옥나 장소를 추가해주세요 &#58;&#41;</p>
        </Schedule>
      </Wrapper>
      <BtnContainer>
        <StyledButton>Fit한 코스 완성</StyledButton>
        <StyledButton small>
          <img src='/img/course/load.svg' alt='불러오기' />
        </StyledButton>
        <StyledButton small>
          <img src='/img/course/share.svg' alt='공유하기' />
        </StyledButton>
      </BtnContainer>
    </SideBar>
  );
};
const SideBar = styled.div``;

const Wrapper = styled.div`
  width: 42rem;
  box-shadow: 3px 0 10px 0 rgba(0, 0, 0, 0.16);
  padding: 2.4rem 2.8rem 0;
  height: 94.5vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  a > img {
    display: block;
    width: 5.4rem;
    height: 5.4rem;
  }
`;

const ResetBtn = styled.button`
  font-size: 1.2rem;
  line-height: 1.17;
  cursor: pointer;
  color: ${(props) => props.theme.black1_color};

  img {
    display: block;
    width: 2.8rem;
    height: 2.8rem;
    padding-left: 0.2rem;
    padding-bottom: 0.4rem;
  }
`;

const SearchInput = styled.input`
  padding-left: 5.4rem;
  width: 100%;
  height: 48px;
  padding: 7px 0 7px 54px;
  font-size: 1.6rem;
  line-height: 1.19;
  color: ${(props) => props.theme.grey1_color};
  background-repeat: no-repeat;
  background-size: 34px 34px;
  background-position: 7px;
  background-color: #f9f9f9;
  border: none;

  ${(props) =>
    props.search &&
    css`
      background-image: url('/img/course/search.svg');
      margin-top: 2.6rem;
    `}

  ${(props) =>
    props.people &&
    css`
      background-image: url('/img/course/people.svg');
      margin-top: 1rem;
    `}
`;

const StyledText = styled.p`
  font-size: 1.6rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  color: ${(props) => props.theme.black1_color};
`;

const DayContainer = styled.div`
  display: flex;
  margin-top: 2.7rem;
  align-items: center;
  gap: 1rem;
`;

const Schedule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12.2rem;

  p:nth-child(2) {
    margin-top: 1rem;
  }

  p {
    font-size: 1.4rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    color: ${(props) => props.theme.grey1_color};
  }
`;

const BtnContainer = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  width: 31.6rem;
  height: 5.2rem;
  color: #ffffff;
  background-color: ${(props) => props.theme.main_color};

  ${(props) =>
    props.small &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 5.2rem;
      border: solid 1px #eee;
      background-color: #fff;
    `}
`;

export default CourseSideBar;
