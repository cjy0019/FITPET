import React from 'react';
import styled from 'styled-components';
import { Font } from '../../../common';

import { hotelClass, hotelTypes } from './AdminInputContentsData';
import OptionCheck from './OptionCheck';

// 211009 by.dy 어드민 등록, 수정 form 추가
const AdminInputContents = () => {
  return (
    <ContentsWrapper>
      <InputBox>
        <div className='title'>
          <Font fontSize='2.2rem' color='#2a2a2a' fontWeight='bold'>
            숙소 유형
          </Font>
        </div>
        {hotelTypes.map((type, i) => {
          return (
            <SelectBox type='radio'>
              <p className='selectText'>{type}</p>
            </SelectBox>
          );
        })}
        {/* <SelectBox
          ref={normalRef}
          onClick={() => {
            setSelected((state) => ({
              ...state,
              normal: true,
              luxury: false,
            }));
          }}>
          <p className='selectText'>1</p>
        </SelectBox>
        <SelectBox
          ref={luxuryRef}
          onClick={() => {
            setSelected((state) => ({
              ...state,
              normal: false,
              luxury: true,
            }));
          }}>
          <p className='selectText'>1</p>
        </SelectBox> */}
      </InputBox>
      <InputBox>
        <div className='title'>
          <Font fontSize='2.2rem' color='#2a2a2a' fontWeight='bold'>
            숙소 이름
          </Font>
        </div>
        <input type='text' />
      </InputBox>
      <InputBox>
        <div className='title'>
          <Font fontSize='2.2rem' color='#2a2a2a' fontWeight='bold'>
            숙소 영어 이름
          </Font>
        </div>
        <input type='text' />
      </InputBox>
      <InputBox>
        <div className='title'>
          <Font fontSize='2.2rem' color='#2a2a2a' fontWeight='bold'>
            등급
          </Font>
        </div>
        {hotelClass.map((level, i) => {
          return (
            <SelectBox>
              <p className='selectText'>{level}</p>
            </SelectBox>
          );
        })}
      </InputBox>
      <InputBox>
        <div className='title'>
          <Font fontSize='2.2rem' color='#2a2a2a' fontWeight='bold'>
            숙소 위치
          </Font>
        </div>
        <input type='text' />
      </InputBox>
      <InputBox>
        <div className='title'>
          <Font fontSize='2.2rem' color='#2a2a2a' fontWeight='bold'>
            숙소 대표 이미지
          </Font>
        </div>
        <input type='text' />
      </InputBox>
      <InputBox>
        <div className='title'>
          <Font fontSize='2.2rem' color='#2a2a2a' fontWeight='bold'>
            숙소 상세 이미지
          </Font>
        </div>
        <input type='text' />
      </InputBox>
      <InputBox>
        <div className='title'>
          <Font fontSize='2.2rem' color='#2a2a2a' fontWeight='bold'>
            숙소 슬라이드 이미지
          </Font>
        </div>
        <input type='text' />
      </InputBox>
      <InputBox>
        <div className='title'>
          <Font fontSize='2.2rem' color='#2a2a2a' fontWeight='bold'>
            인기 숙소 이미지
          </Font>
        </div>
        <input type='text' />
      </InputBox>
      <OptionCheck />
    </ContentsWrapper>
  );
};

const ContentsWrapper = styled.ul`
  padding: 4rem 0;
  border-bottom: 1px solid ${(props) => props.theme.main_color};
  border-top: 1px solid ${(props) => props.theme.main_color};
`;
const InputBox = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 3.2rem;
  .title {
    width: 24rem;
  }
  input {
    background-color: ${(props) => props.theme.grey4_color};
    padding: 0.5rem 0 0.5rem 2rem;
    border: none;
    border-radius: 7px;
    width: 100%;
    height: 4.8rem;
    font-size: 1.8rem;
  }
`;
const SelectBox = styled.label`
  padding: 1.6rem;
  border-radius: 7px;
  border: solid 1px ${(props) => props.theme.grey3_color};
  font-size: 1.8rem;
  cursor: pointer;
  margin-right: 1.2rem;
  .selectText {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
  }
`;
export default AdminInputContents;
