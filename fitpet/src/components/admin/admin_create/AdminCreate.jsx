import React from 'react';
import styled from 'styled-components';
import { Font, RoundSquareBtn } from '../../../common';

const hotelTypes = [
  '호텔',
  '리조트',
  '펜션',
  '풀빌라',
  '캠핑',
  '글램핑',
  '기타',
];
const hotelClass = ['5성급', '4성급', '3성급', '2성급', '1성급 이하'];
const options = [
  '소형견 여부',
  '중형견 여부',
  '대형견 여부',
  '고양이 여부',
  '드라이룸',
  '실내 수영장',
  '애견 운동장',
  '셀프 목욕',
  '애견 스파',
  '애견 샤워장',
  '애견 놀이터',
  '잔디마당',
  '포토존',
  '반려동물 용품 제공',
  '반려동물 동반',
  '모든 경종',
  '맹견 출입금지',
  '와이파이',
  '개별 바베큐',
  '카페',
  '레스토랑',
  '취사가능',
  '수하물 보관',
  '24시 리셉션',
  '피트니스',
  '스파',
  '세탁',
  '수영장',
  '비즈니스시설',
  '장애인 편의시설',
];
const AdminCreate = () => {
  return (
    <AdminCreateWrapper>
      <InputBoxWrapper>
        <TitleWrapper>
          <Font fontSize='2.4rem' mb='2rem' color='#2a2a2a' fontWeight='bold'>
            숙소 등록
          </Font>
        </TitleWrapper>
        <form>
          <ContentsWrapper>
            <InputBox>
              <div className='title'>
                <Font fontSize='2.2rem' color='#2a2a2a' fontWeight='bold'>
                  숙소 유형
                </Font>
              </div>
              {hotelTypes.map((type, i) => {
                return (
                  <SelectBox>
                    <p className='selectText'>{type}</p>
                  </SelectBox>
                );
              })}
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
            <OptionBox>
              <div className='title'>
                <Font fontSize='2.2rem' color='#2a2a2a' fontWeight='bold'>
                  옵션 체크
                </Font>
              </div>
              <div className='options'>
                {options.map((option, i) => {
                  return (
                    <div className='checkBlock'>
                      <Checkbox type='checkbox' id='normal' name='check' />
                      <Font fontSize='1.4rem' color='#2a2a2a'>
                        {' '}
                        {option}
                      </Font>
                    </div>
                  );
                })}
              </div>
            </OptionBox>
          </ContentsWrapper>
        </form>
        <ButtonWrapper>
          <div>
            <RoundSquareBtn grey_color style={{ padding: '0 4.4rem 0 4.4rem' }}>
              취소
            </RoundSquareBtn>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <RoundSquareBtn
              mint_color
              style={{ padding: '0 3rem 0 3rem', marginRight: '2rem' }}>
              미리보기
            </RoundSquareBtn>
            <RoundSquareBtn main_color style={{ padding: '0 4.4rem 0 4.4rem' }}>
              등록
            </RoundSquareBtn>
          </div>
        </ButtonWrapper>
      </InputBoxWrapper>
    </AdminCreateWrapper>
  );
};

const AdminCreateWrapper = styled.div`
  max-width: 100%;
  margin-top: 18rem;
`;
const InputBoxWrapper = styled.div`
  // border: 1px solid grey;
  width: 128rem;
  margin: 0 auto;
`;
const TitleWrapper = styled.div``;
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
  //position: relative;
  padding: 1.6rem;
  //white-space: nowrap;
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
    .checkBlock {
      width: 20rem;
      margin-right: 9rem;
      margin-bottom: 1rem;
      // border: 1px solid red;
      display: flex;
      align-items: center;
    }
  }
`;
const Checkbox = styled.input`
  margin-right: 1rem;
`;

const ButtonWrapper = styled.div`
  margin: 4rem 0 12.3rem 0;
  display: flex;
`;

export default AdminCreate;
