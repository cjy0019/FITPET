import React from 'react';
import styled from 'styled-components';
import { Font } from '../../../common';

const GotoCourseCard = () => {
  return (
    <GotoCourseCardWrapper>
      <CardLeft>
        <Font fontSize='1.8rem' fontWeight='500' mb='2.8rem' color='#ffffff'>
          강원도에서 6박 7일의 일정
        </Font>
        <Font fontSize='2.8rem' mb='3rem' lineHeight='2.4rem' color='#ffffff'>
          도시가 지칠 땐 조용한 숲 속으로
        </Font>
        <Font fontSize='1.6rem' lineHeight='2.4rem' mb='2rem' color='#ffffff'>
          최근 편하게 밖을 나다닐 수 없는 상황 속에서 도시가 어쩌 구저쩌구 하는
          설명글을 이 공간에 적을 것이다. 나도 ...
        </Font>
        <div className='tagBlock'>
          <Font fontSize='1.8rem' mr='2.8rem' color='#ffffff'>
            #강원도
          </Font>
          <Font fontSize='1.8rem' mr='2.8rem' color='#ffffff'>
            #숲
          </Font>
          <Font fontSize='1.8rem' mr='2.8rem' color='#ffffff'>
            #일상의 힐링
          </Font>
          <Font fontSize='1.8rem' mr='2.8rem' color='#ffffff'>
            #소형견
          </Font>
        </div>
        <GotoCourseBtn>코스 보러가기</GotoCourseBtn>
      </CardLeft>
      <CardRight></CardRight>
    </GotoCourseCardWrapper>
  );
};
const GotoCourseCardWrapper = styled.div`
  display: flex;
  margin-bottom: 6rem;
`;

const CardLeft = styled.div`
  width: 54.8rem;
  height: 43.6rem;
  padding: 6.3rem 9rem 6.3rem 6rem;
  background-color: #2fd2b6;
  border-radius: 25px 0 0 25px;
  .tagBlock {
    display: flex;
    margin-bottom: 6rem;
  }
`;

const GotoCourseBtn = styled.div`
  margin: 0 auto;
  width: 17rem;
  height: 5.4rem;
  padding: 1.5rem 2.6rem 1.4rem;
  border-radius: 27px;
  font-size: 2.1rem;
  font-weight: bold;
  color: ${(props) => props.theme.main_color};
  background-color: ${(props) => props.theme.white_color};
  cursor: pointer;
`;

const CardRight = styled.div`
  border-radius: 0 25px 25px 0;
  background-color: #fafafafa;
  width: 73.2rem;
  height: 43.6rem;
`;
export default GotoCourseCard;
