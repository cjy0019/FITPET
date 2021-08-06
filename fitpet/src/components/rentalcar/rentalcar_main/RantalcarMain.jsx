import React from 'react';
import styled from 'styled-components';
import { BasicBox, Font, MagazineBox, MiddleBtn } from '../../../common';
import RentalcarSearch from '../rentalcar_common/RentalcarSearch';
import SliderDrive from './SliderDrive';

const RantalcarMain = () => {
  return (
    <RentalcarMainWraper>
      {/* 숙소 검색창 */}
      <RentalcarSearchBlock>
        <div>
          <div className='searchBox'>
            <Font fontSize='3.8rem' fontWeight='bold' mb='3.4rem' color='#fff'>
              어떤 차를 타고 가볼까요?
            </Font>
            {/* 검색 입력 창 */}
            <RentalcarSearch />
          </div>
          <div className='MoreRentalcarBtn'>
            <MiddleBtn style={{ marginTop: '4.4rem' }}>
              다양한 차량 둘러보기
            </MiddleBtn>
          </div>
        </div>
      </RentalcarSearchBlock>
      <ContentsWrapper>
        <BasicBox
          width='40rem'
          height='25.1rem'
          borderRadius='15px'
          text='검증된 렌트카 파트너사'
          margin='0 4rem 0 0'></BasicBox>
        <BasicBox
          width='40rem'
          height='25.1rem'
          borderRadius='15px'
          text='검증된 렌트카 파트너사'
          margin='0 4rem 0 0'></BasicBox>
        <BasicBox
          width='40rem'
          height='25.1rem'
          borderRadius='15px'
          text='검증된 렌트카 파트너사'
          margin='0 4rem 0 0'></BasicBox>
      </ContentsWrapper>
      {/* 띠배너 부분 */}
      <BandBanner img={'/img/linebanner.png'} />
      {/* 드라이브 추천 여행지 부분 */}
      <RantalcarsBox>
        <TextBlock>
          <Font color='#2A2A2A' fontSize='4.2rem' mb='2.6rem' fontWeight='bold'>
            드라이브 추천 여행지
          </Font>
        </TextBlock>
        {/* 드라이브 추천 여행지 슬라이드 부분 */}
        <DriveWrapper>
          <SliderDrive />
        </DriveWrapper>
        {/* 매거진 박스 부분 */}
        <MagazineWrapper>
          <MagazineBox />
          <MagazineBox />
        </MagazineWrapper>
      </RantalcarsBox>
    </RentalcarMainWraper>
  );
};

const RentalcarMainWraper = styled.div`
  max-width: 100%;
  margin-top: 8rem;
`;
const RentalcarSearchBlock = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  height: 74.4rem;
  background-color: ${(props) => props.theme.grey3_color};
  .searchBox {
    width: 108rem;
  }
  .MoreRentalcarBtn {
    display: flex;
    justify-content: center;
  }
`;
const ContentsWrapper = styled.div`
  margin: 12rem auto;
  width: 128rem;
  display: flex;
  justify-content: center;
`;
const BandBanner = styled.div`
  margin: 0 auto;
  width: 128rem;
  margin-bottom: 12rem;
  height: 17rem;
  text-align: center;
  justify-content: center;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
`;
const RantalcarsBox = styled.div`
  margin: 12rem 0;
`;
const TextBlock = styled.div`
  margin: 1.6rem auto 0;
  width: 128rem;
`;
const DriveWrapper = styled.div`
  margin: 0 auto;
  width: 128rem;
  display: flex;
  justify-content: center;
`;
const MagazineWrapper = styled.div`
  margin: 0 auto;
  width: 128rem;
  display: flex;
  justify-content: center;
  margin-bottom: 30rem;
  margin-top: 12rem;
`;

export default RantalcarMain;
