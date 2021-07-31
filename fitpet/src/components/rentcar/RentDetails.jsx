import React from 'react';
import styled from 'styled-components';
import { MiddleSizeButton } from '../../common';

const RentDetails = () => {
  return (
    <DetailWrapper>
      <StyledP>일반자차 | 1일 기준</StyledP>
      <Price>
        156,000 ~ <span>원</span>
      </Price>
      <MiddleSizeButton
        text='상세보기'
        width='11.6rem'
        border='none'
        pt='1.5rem'
        pb='1.4rem'
        mt='1.4rem'
        color='#ffffff'
        borderRadius='0.7rem'
        fontSize='1.6rem'
        backColor='#979797'
      />
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  float: right;
`;

const StyledP = styled.p`
  text-align: right;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.71;
  color: #707070;
`;

const Price = styled.p`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.2;
  letter-spacing: -0.4px;
  color: #707070;

  span {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.71;
    color: #707070;
  }
`;

export default RentDetails;
