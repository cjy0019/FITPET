import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RightButton } from '../../hotel/hotel_common/filterCommon';
import { FlexC, StyledP, StyledTitle } from './rentcarCommonStyle';

const img_url = '/img/rentalcar/rentcar_about';

const CarOptions = ({ rentcarDetail }) => {
  const [date, setDate] = useState('');
  const info = rentcarDetail.rentcarDetail;
  console.log(info);

  useEffect(() => {
    if (rentcarDetail.rentcarDetail.registeredDate) {
      setDate(rentcarDetail.rentcarDetail.registeredDate.split('T'));
    }
  }, [rentcarDetail.rentcarDetail.registeredDate]);

  return (
    <OptionSection>
      <StyledTitle>차량 옵션</StyledTitle>

      <FlexC justi='space-between' mb='4rem'>
        <div>
          <FlexC align='center' mt='1.4rem'>
            <img src={`${img_url}/calandaricon.svg`} alt='날짜' />
            <StyledP fs='1.6rem'>{date[0]}</StyledP>
          </FlexC>
          <FlexC align='center' mt='0.8rem'>
            <img src={`${img_url}/personicon.svg`} alt='최대 사람수' />
            <StyledP fs='1.6rem'>최대 {info.maximumPeople}인</StyledP>
          </FlexC>
          <FlexC align='center' mt='0.8rem'>
            <img src={`${img_url}/naviicon.svg`} alt='네비게이션' />
            <StyledP fs='1.6rem'>네비게이션</StyledP>
          </FlexC>
          <FlexC align='center' mt='0.8rem'>
            <img src={`${img_url}/gasolineicon.svg`} alt='가솔린' />
            <StyledP fs='1.6rem'>
              {/* {rentcarDetail.rentcarDetail.options.fuelType} */}
              가솔린
            </StyledP>
          </FlexC>
        </div>
        <div>
          <FlexC align='center' mt='1.4rem'>
            <img src={`${img_url}/cameraicon.svg`} alt='카메라' />
            <StyledP fs='1.6rem'>후방카메라</StyledP>
          </FlexC>
          <FlexC align='center' mt='0.8rem'>
            <img src={`${img_url}/blackboxicon.svg`} alt='가솔린' />
            <StyledP fs='1.6rem'>네비게이션</StyledP>
          </FlexC>
          <FlexC align='center' mt='0.8rem'>
            <img src={`${img_url}/bluetoothicon.svg`} alt='블루투스' />
            <StyledP fs='1.6rem'>블루투스</StyledP>
          </FlexC>
          <FlexC align='center' mt='0.8rem'>
            <img src={`${img_url}/autoicon.svg`} alt='가솔린' />
            <StyledP fs='1.6rem'>오토</StyledP>
          </FlexC>
        </div>

        <More to='/'>
          MORE &nbsp;
          <RightButton />
        </More>
      </FlexC>
    </OptionSection>
  );
};

const OptionSection = styled.section`
  margin-top: 4rem;
`;

const More = styled(Link)`
  display: flex;
  transform: translateY(60%);
  align-items: center;
  text-decoration: none;
  font-size: 1.4rem;
  color: ${(props) => props.theme.grey1_color};
`;

export default CarOptions;
