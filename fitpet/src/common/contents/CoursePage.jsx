// 코스페이지 컨텐츠 박스(별도)

import React from 'react';
import styled from 'styled-components';

const CoursePage = () => {
  return (
    <CoursePageBox>
      <TextBlock>
        <SubText>강원도에서 6박 7일의 일정</SubText>
        <MainText>도시가 지칠 땐 조용한 숲 속으로</MainText>
        <Text>
          최근 편하게 밖을 나다닐 수 없는 상황 속에서 도시가 어쩌 구저쩌구 하는
          설명글을 이 공간에 적을 것이다. 나도 열심 히 글을 쓰고는 싶은데 마감이
          나에게서 모든 ...
        </Text>
        <TagBlock>
          <Tag>#강원도</Tag>
          <Tag>#숲</Tag>
          <Tag>#일상의 힐링</Tag>
          <Tag>#소형견</Tag>
        </TagBlock>
        <GotoCourse>코스 보러가기</GotoCourse>
      </TextBlock>
      <Map>
        <WishBlock>
          <WishBtn></WishBtn>
          <WishNumber>4920</WishNumber>
        </WishBlock>
      </Map>
    </CoursePageBox>
  );
};

export default CoursePage;

const CoursePageBox = styled.div`
  display: flex;
  cursor: pointer;
`;

const TextBlock = styled.div`
  width: 54.8rem;
  height: 6.2rem;
  border-radius: 25px 0 0 25px;
  box-shadow: 3px 6px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #979797;
  display: block;
  color: #fff;
`;
const SubText = styled.div`
  margin: 4.9rem 0 7.4rem 4.9rem;
  font-size: 3rem;
`;
const MainText = styled.div`
  margin: 0 6.5rem 2.4rem 4.8rem;
  font-size: 3.6rem;
  font-weight: bold;
`;
const Text = styled.div`
  margin: 0 6.5rem 4rem 4.8rem;
  font-size: 2rem;
`;
const TagBlock = styled.div`
  margin: 0 6.5rem 9.5rem 4.8rem;
  display: flex;
`;
const Tag = styled.div`
  font-size: 1.8rem;
  margin-right: 2.1rem;
`;
const GotoCourse = styled.div`
  margin: 0 17.4rem 4rem 4.8rem;
  width: 32.6rem;
  height: 5.4rem;
  padding: 1.6rem 10.7rem 1.3rem;
  border-radius: 27px;
  font-size: 2rem;
  color: #707070;
  background-color: #ffffff;
`;

const Map = styled.div`
  width: 73.2rem;
  height: 62rem;
  border-radius: 0 25px 25px 0;
  background-color: #ffffff;
  box-shadow: 3px 6px 6px 0 rgba(0, 0, 0, 0.16);
`;

const WishBlock = styled.div`
  margin: 4.3rem 4.6rem 0 0;
  float: right;
  display: block;
`;
const WishBtn = styled.button`
  width: 8rem;
  height: 8rem;
  background-color: #cbcbcb;
  border: none;
  border-radius: 50px;
`;

const WishNumber = styled.p`
  margin-top: 1.4rem;
  color: #cbcbcb;
  text-align: center;
  font-size: 2rem;
`;
