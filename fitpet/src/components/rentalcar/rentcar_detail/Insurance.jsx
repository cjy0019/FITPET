import React, { useEffect, useRef, useState } from 'react';
import { HiCheck } from 'react-icons/hi';
import styled, { css } from 'styled-components';
import { StyledTitle } from './rentcarCommonStyle';

const Insurance = ({ setInsuranceFee }) => {
  const [selected, setSelected] = useState({ normal: false, luxury: false });
  const normalRef = useRef(null);
  const luxuryRef = useRef(null);

  useEffect(() => {
    if (selected.normal && !selected.luxury) {
      normalRef.current.style = 'border : solid 2px blue; color : #4765ff;';
      luxuryRef.current.style = 'border : solid 2px #e9e9e9';
    } else {
      normalRef.current.style = 'border :solid 2px #e9e9e9';
      luxuryRef.current.style = 'border : solid 2px blue; color : #4765ff;';
    }
  }, [selected]);

  return (
    <InsuranceSection>
      <StyledTitle>보험 선택</StyledTitle>

      <SelectContainer>
        <SelectBox
          htmlFor='normal'
          ref={normalRef}
          onClick={() => {
            setSelected((state) => ({ ...state, normal: true, luxury: false }));
          }}>
          <Text>일반자차</Text>
          <Checkbox
            onClick={() => {
              setInsuranceFee(156000);
            }}
            type='radio'
            id='normal'
            name='insurance'
          />

          <Check>
            <IconWrapper>
              <HiCheck />
            </IconWrapper>
          </Check>
          <Text bold>
            156,000 <span>원</span>
          </Text>
        </SelectBox>

        <SelectBox
          htmlFor='prestige'
          ref={luxuryRef}
          onClick={() =>
            setSelected((state) => ({ ...state, normal: false, luxury: true }))
          }>
          <Text>고급자차</Text>
          <Checkbox
            onClick={() => {
              setInsuranceFee(256000);
            }}
            type='radio'
            id='prestige'
            name='insurance'
          />

          <Check>
            <IconWrapper>
              <HiCheck />
            </IconWrapper>
          </Check>
          <Text bold>
            256,000 <span>원</span>
          </Text>
        </SelectBox>
      </SelectContainer>

      {/* 보험 상세내용 */}

      <DetailWrapper>
        <Text bold fs='1.8rem' line>
          보험 상세내용
        </Text>
        <TextWrapper>
          <div>
            <Text mint>조건</Text>
            <Text>만 21세 이상, 운전 경력 1년 이상</Text>

            <Text mint mt='2.8rem'>
              포함보험
            </Text>
            <Text>차량사고 면책보험(CDW)</Text>
            <Text> - 자기부담금 50만원(사고시 1건당 면책금 청구)</Text>
            <Text>도난보험(TP)</Text>
            <Text>제 3자 책임보험</Text>

            <Text mint mt='2.8rem'>
              취소규정
            </Text>
            <Text>픽업 최대 24시간 전까지 무료취소</Text>
          </div>

          <div>
            <Text mint>한도</Text>
            <Text>200만원</Text>

            <Text mint mt='2.8rem'>
              포함서비스
            </Text>
            <Text>운전자 2인까지 무료 등록</Text>
            <Text>무료 GPS</Text>

            <Text mint mt='2.8rem'>
              주행거리규정
            </Text>
            <Text>주행거리 무제한</Text>
          </div>
        </TextWrapper>
      </DetailWrapper>
    </InsuranceSection>
  );
};

const InsuranceSection = styled.section`
  margin-top: 4rem;
  padding-bottom: 4rem;
  border-bottom: solid 1px #979797;
`;

const SelectContainer = styled.div`
  display: flex;
  margin: 1.8rem 0 2rem;
  gap: 0 2rem;
`;

const SelectBox = styled.label`
  position: relative;
  padding: 2rem 9.3rem 2rem 2rem;
  white-space: nowrap;
  width: 23rem;
  height: 10.8rem;
  border-radius: 10px;
  border: solid 2px #eee;
  font-weight: 500;
  font-size: 1.8rem;
  cursor: pointer;
`;

const Text = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.33;
  margin-top: ${(props) => props.mt || 0};

  ${(props) =>
    props.mint &&
    css`
      color: #32d8b8;
    `}

  ${(props) =>
    props.line &&
    css`
      padding-bottom: 2.4rem;
      border-bottom: solid 1px #eee;
    `}

  ${(props) =>
    props.bold &&
    css`
      font-size: ${props.fs} || 2.4rem;
      font-weight: bold;
      line-height: 1;
      letter-spacing: -0.48px;
      margin-top: 1.8rem;

      span {
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 1.33;
      }
    `}
`;

const Checkbox = styled.input`
  margin: 0;
  display: none;
`;

const Check = styled.div`
  position: absolute;
  top: 1.4rem;
  right: 1.4rem;
  width: 2.8rem;
  height: 2.8rem;
  border: solid 1px #e9e9e9;
  border-radius: 18px;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 50%;
    transform: scale(0);
  }
  input:checked + &::after {
    background-color: ${(props) => props.theme.main_color};
    transform: scale(1);
  }

  input:checked + & div {
    color: #fff;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  z-index: 10;
  color: #000000;
  transform: translate(-50%, -50%);
`;

const DetailWrapper = styled.div`
  width: 85rem;
  height: 39.5rem;
  padding: 2.4rem;
  border: solid 1px #cbcbcb;
  background-color: #fff;
`;

const TextWrapper = styled.div`
  display: flex;
  gap: 11.9rem;
  margin-top: 2.4rem;
`;

export default Insurance;
