import { push } from 'connected-react-router';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { RoundSquareBtn } from '../../../common';

const RentDetails = ({ minPrice, _id }) => {
  const dispatch = useDispatch();

  return (
    <DetailWrapper>
      <StyledP>일반자차 | 1일 기준</StyledP>
      <Price>
        {minPrice.toLocaleString()}~ <span>원</span>
      </Price>
      <RoundSquareBtn
        move={move}
        _id={_id}
        main_color
        style={{ marginTop: '1.4rem' }}>
        상세보기
      </RoundSquareBtn>
    </DetailWrapper>
  );

  function move() {
    dispatch(push(`/rentcardetail/${_id}`));
  }
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
