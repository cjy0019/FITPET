import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RightButton } from '../hotel/hotel_common/filterCommon';
import { FlexC, IconBox, StyledP } from './rentcarCommonStyle';

const CarOptions = () => {
  return (
    <OptionSection>
      <StyledTitle>차량 옵션</StyledTitle>

      <FlexC justi='space-between' mb='4rem'>
        <div>
          <FlexC mt='1.4rem'>
            <IconBox />
            <StyledP fs='1.6rem'>2018</StyledP>
          </FlexC>
          <FlexC mt='0.8rem'>
            <IconBox />
            <StyledP fs='1.6rem'>최대 5인</StyledP>
          </FlexC>
          <FlexC mt='0.8rem'>
            <IconBox />
            <StyledP fs='1.6rem'>네비게이션</StyledP>
          </FlexC>
          <FlexC mt='0.8rem'>
            <IconBox />
            <StyledP fs='1.6rem'>휘발유(가솔린)</StyledP>
          </FlexC>
        </div>
        <div>
          <FlexC mt='1.4rem'>
            <IconBox />
            <StyledP fs='1.6rem'>후방카메라</StyledP>
          </FlexC>
          <FlexC mt='0.8rem'>
            <IconBox />
            <StyledP fs='1.6rem'>네비게이션</StyledP>
          </FlexC>
          <FlexC mt='0.8rem'>
            <IconBox />
            <StyledP fs='1.6rem'>블루투스</StyledP>
          </FlexC>
          <FlexC mt='0.8rem'>
            <IconBox />
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

const StyledTitle = styled.p`
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 1;
  color: ${(props) => props.theme.grey1_color};
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
