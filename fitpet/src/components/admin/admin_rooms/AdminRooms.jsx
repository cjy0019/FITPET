import React from 'react';
import styled from 'styled-components';
import { Container } from '../admin_list/AdminHotelList';
import AdminListHeader from '../admin_list/AdminListHeader';
import AdminSideBar from '../admin_list/AdminSideBar';

const AdminRooms = () => {
  return (
    <Container>
      <AdminSideBar />
      <Contents>
        <AdminListHeader rooms />

        <div>
          <SearchWrapper>
            <StyledInput placeholder='숙소명을 검색해주세요.' type='text' />
            <SearchButton>검색</SearchButton>
          </SearchWrapper>
        </div>

        <ImgInfoBoxWrapper>
          <ImgInfoBox>
            <img src='/img/admin/adminList/sample.png' alt='hello' />
            <p>롯데호텔 제주</p>
          </ImgInfoBox>
          <ImgInfoBox>
            <img src='/img/admin/adminList/sample.png' alt='hello' />
            <p>롯데호텔 제주</p>
          </ImgInfoBox>
          <ImgInfoBox>
            <img src='/img/admin/adminList/sample.png' alt='hello' />
            <p>롯데호텔 제주</p>
          </ImgInfoBox>
          <ImgInfoBox>
            <img src='/img/admin/adminList/sample.png' alt='hello' />
            <p>롯데호텔 제주</p>
          </ImgInfoBox>
          <ImgInfoBox>
            <img src='/img/admin/adminList/sample.png' alt='hello' />
            <p>롯데호텔 제주</p>
          </ImgInfoBox>
          <ImgInfoBox>
            <img src='/img/admin/adminList/sample.png' alt='hello' />
            <p>롯데호텔 제주</p>
          </ImgInfoBox>
          <ImgInfoBox>
            <img src='/img/admin/adminList/sample.png' alt='hello' />
            <p>롯데호텔 제주</p>
          </ImgInfoBox>
          <ImgInfoBox>
            <img src='/img/admin/adminList/sample.png' alt='hello' />
            <p>롯데호텔 제주</p>
          </ImgInfoBox>
        </ImgInfoBoxWrapper>
      </Contents>
    </Container>
  );
};

const Contents = styled.div`
  width: 100%;
  img {
    width: 30rem;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  margin-top: 3rem;
  gap: 3rem;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 1.6rem;
  padding: 14px 0 14px 20px;
  border: none;
  border-radius: 7px;
  background-color: #f6f6f6;
`;

const SearchButton = styled.button`
  padding: 2rem 2.3rem 2rem 2.4rem;
  white-space: nowrap;
  border-radius: 7px;
  background-color: #4765ff;
  font-family: PretendardVariable;
  font-size: 1.6rem;
  color: #fff;
`;

const ImgInfoBoxWrapper = styled.div`
  display: flex;
  gap: 4.2rem;
  flex-wrap: wrap;
`;

const ImgInfoBox = styled.div`
  margin-top: 5rem;

  p {
    margin-top: 2rem;
    font-family: PretendardVariable;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.2;
    color: #2a2a2a;
  }
`;

export default AdminRooms;
