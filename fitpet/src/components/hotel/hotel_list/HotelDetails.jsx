import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HotelDetails = ({ hotel }) => {
  const hotelAboutLink = '/accomodations/hotels/';
  return (
    <DetailWrapper>
      <StyledP>1박 기준</StyledP>
      <Price>
        {hotel.lodgingMinMoney.toLocaleString()} ~ <span>원</span>
      </Price>
      <DetailLink to={hotelAboutLink + hotel._id}>상세보기</DetailLink>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  position: absolute;
  bottom: 4rem;
  right: 0;
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
  color: ${(props) => props.theme.black1_color};

  span {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.71;
  }
`;

// 210904 by.jy 상세보기 버튼 스타일 변경 버튼 => 링크
const DetailLink = styled(Link)`
  margin-top: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  font-size: 1.6rem;
  font-weight: 500;
  background-color: ${(props) => props.theme.main_color};
  width: 11.6rem;
  height: 4.8rem;
  color: #fff;
`;

export default HotelDetails;
