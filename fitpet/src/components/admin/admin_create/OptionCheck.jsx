import React, { useState } from 'react';
import styled from 'styled-components';
import { Font } from '../../../common';
import OptionListItem from './OptionListItem';

const OptionCheck = () => {
  const [options, setOptions] = useState([
    {
      id: 1,
      text: '소형견 여부',
      checked: false,
    },
    {
      id: 2,
      text: '중형견 여부',
      checked: false,
    },
    {
      id: 3,
      text: '대형견 여부',
      checked: true,
    },
    {
      id: 4,
      text: '고양이 여부',
      checked: false,
    },
    {
      id: 5,
      text: '드라이룸',
      checked: false,
    },
    {
      id: 6,
      text: '실내 수영장',
      checked: false,
    },
    {
      id: 7,
      text: '애견 운동장',
      checked: false,
    },
    {
      id: 8,
      text: '셀프 목욕',
      checked: false,
    },
    {
      id: 9,
      text: '애견 스파',
      checked: false,
    },
    {
      id: 10,
      text: '애견 샤워장',
      checked: false,
    },
    {
      id: 11,
      text: '애견 놀이터',
      checked: false,
    },
    {
      id: 12,
      text: '잔디마당',
      checked: false,
    },
    {
      id: 13,
      text: '포토존',
      checked: false,
    },
    {
      id: 14,
      text: '반려동물 용품 제공',
      checked: false,
    },
    {
      id: 15,
      text: '반려동물 동반',
      checked: false,
    },
    {
      id: 16,
      text: '모든 경종',
      checked: false,
    },
    {
      id: 17,
      text: '맹견 출입금지',
      checked: false,
    },
    {
      id: 18,
      text: '와이파이',
      checked: false,
    },
    {
      id: 19,
      text: '개별 바베큐',
      checked: false,
    },
    {
      id: 20,
      text: '카페',
      checked: false,
    },
    {
      id: 21,
      text: '레스토랑',
      checked: false,
    },
    {
      id: 22,
      text: '취사가능',
      checked: false,
    },
    {
      id: 23,
      text: '수하물 보관',
      checked: false,
    },
    {
      id: 24,
      text: '24시 리셉션',
      checked: false,
    },
    {
      id: 25,
      text: '피트니스',
      checked: false,
    },
    {
      id: 26,
      text: '스파',
      checked: false,
    },
    {
      id: 27,
      text: '세탁',
      checked: false,
    },
    {
      id: 28,
      text: '수영장',
      checked: false,
    },
    {
      id: 29,
      text: '비즈니스시설',
      checked: false,
    },
    {
      id: 30,
      text: '장애인 편의시설',
      checked: false,
    },
  ]);
  return (
    <OptionBox>
      <div className='title'>
        <Font fontSize='2.2rem' color='#2a2a2a' fontWeight='bold'>
          옵션 체크
        </Font>
      </div>
      <div className='options'>
        {options.map((option) => {
          return (
            <OptionListItem option={option} key={option.id}></OptionListItem>
          );
        })}
      </div>
    </OptionBox>
  );
};

const OptionBox = styled.li`
  display: block;
  align-items: center;
  margin-bottom: 2.8rem;
  .title {
    width: 24rem;
    margin-bottom: 2.8rem;
  }
  .options {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export default OptionCheck;
