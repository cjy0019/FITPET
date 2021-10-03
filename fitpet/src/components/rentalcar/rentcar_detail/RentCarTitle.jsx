import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlexC, IconBox, StyledP } from './rentcarCommonStyle';

const img_url = '/img/rentalcar/rentcar_list';

const RentCarTitle = ({ rentcarDetail }) => {
  return (
    <>
      <FlexC justi='space-between' align='center'>
        <div>
          <CarSize>{rentcarDetail.rentcarDetail.carType}차</CarSize>
          <CarTitle>{rentcarDetail.rentcarDetail.carName}</CarTitle>
          <StyledLink to='/'>
            <img src={`${img_url}/bluestar.svg`} alt='평점' />
            <span>
              {rentcarDetail.rentcarDetail.romStar} 이용후기{' '}
              {rentcarDetail.rentcarDetail.isUse}건 &gt;
            </span>
          </StyledLink>
          <FlexC mt='1.1rem'>
            <img
              src={`${img_url}/bluelocation.svg`}
              alt='위치'
              style={{ marginLeft: '-7px', marginRight: '0.5rem' }}
            />
            <StyledP fs='1.4rem'>
              {rentcarDetail.rentcarDetail.rentLocation}
            </StyledP>
          </FlexC>
          <StyledP fs='1.4rem' mt='1.6rem'>
            최대 {rentcarDetail.rentcarDetail.maximumPeople}인 | 딜리버리 |
            휘발유(가솔린) | 후방카메라
          </StyledP>
          <FlexC mt='1.2rem'>
            <IconBox src='/img/rentalcar/rentcar_detail/dibs.png' />
            <IconBox src='/img/rentalcar/rentcar_detail/share.svg' />
          </FlexC>
        </div>
        <div>
          {rentcarDetail.rentcarDetail.picture &&
            rentcarDetail.rentcarDetail.picture !== undefined && (
              <CarMainImg
                src={`/public/${rentcarDetail.rentcarDetail.picture}`}
              />
            )}
        </div>
      </FlexC>
    </>
  );
};

const CarSize = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: -0.32px;
  color: ${(props) => props.theme.black_color};
`;

const CarTitle = styled.p`
  font-size: 3.8rem;
  font-weight: bold;
  line-height: 0.63;
  letter-spacing: -0.76px;
  margin-top: 1.4rem;
  color: ${(props) => props.theme.black_color};
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: -0.6px;
  color: #2a2a2a;

  &:hover {
    color: #2a2a2a;
  }

  img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const CarMainImg = styled.img`
  width: 39rem;
  height: 24.5rem;
  border-radius: 25px;
`;

export default RentCarTitle;
