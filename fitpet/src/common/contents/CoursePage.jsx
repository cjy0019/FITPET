// 코스페이지 컨텐츠 박스(별도)

import React from 'react';
import styled from 'styled-components';

const CoursePage = () => {
  return (
    <>
      <CoursePageBox>
        <TextBlock>
          <SubText>강원도에서 6박 7일의 일정</SubText>
          <MainText>도시가 지칠 땐 조용한 숲 속으로</MainText>
          <Text>
            최근 편하게 밖을 나다닐 수 없는 상황 속에서 도시가 어쩌 구저쩌구
            하는 설명글을 이 공간에 적을 것이다. 나도 열심 히 글을 쓰고는 싶은데
            마감이 나에게서 모든 ...
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
    </>
  );
};

export default CoursePage;

const CoursePageBox = styled.div`
  display: flex;
`;

const TextBlock = styled.div`
  width: 548px;
  height: 620px;

  border-radius: 25px 0 0 25px;
  box-shadow: 3px 6px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #979797;
  display: block;
  color: #fff;
`;
const SubText = styled.div`
  margin: 49px 0 74px 49px;
  font-size: 30px;
`;
const MainText = styled.div`
  margin: 0 65px 24px 48px;
  font-size: 36px;
  font-weight: bold;
`;
const Text = styled.div`
  margin: 0 65px 40px 48px;
  font-size: 20px;
`;
const TagBlock = styled.div`
  margin: 0 65px 95px 48px;
  display: flex;
`;
const Tag = styled.div`
  font-size: 18px;
  margin-right: 21px;
`;
const GotoCourse = styled.div`
  margin: 0 174px 40px 48px;
  width: 326px;
  height: 54px;
  padding: 16px 107px 13px;
  border-radius: 27px;
  font-size: 20px;
  color: #707070;
  background-color: #ffffff;
`;

const Map = styled.div`
  width: 732px;
  height: 620px;
  border-radius: 0 25px 25px 0;
  background-color: #ffffff;
  box-shadow: 3px 6px 6px 0 rgba(0, 0, 0, 0.16);
`;

const WishBlock = styled.div`
  margin: 43px 46px 0 0;
  float: right;
  display: block;
`;
const WishBtn = styled.button`
  width: 80px;
  height: 80px;
  background-color: #cbcbcb;
  border: none;
  border-radius: 50px;
`;

const WishNumber = styled.p`
  margin-top: 14px;
  color: #cbcbcb;
  text-align: center;
  font-size: 20px;
`;
