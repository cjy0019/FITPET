import React from 'react';
import styled from 'styled-components';
import AdminListHeader from './AdminListHeader';
import AdminSideBar from './AdminSideBar';
import AdminListCard from './AdminListCard';

const AdminHotelList = () => {
  return (
    <Container>
      <AdminSideBar />
      <Contents>
        <AdminListHeader />

        <div>
          <SearchWrapper>
            <StyledInput placeholder='숙소명을 검색해주세요.' type='text' />
            <SearchButton>검색</SearchButton>
          </SearchWrapper>
        </div>

        <AdminListCard />
        <AdminListCard />
        <AdminListCard />
        <AdminListCard />
        <AdminListCard />
        <AdminListCard />
        <AdminListCard />
      </Contents>
    </Container>
  );
};

export const Container = styled.div`
  width: 128.2rem;
  gap: 6.6rem;
  padding-top: 120px;
  margin: 0 auto;
  display: flex;
  padding-bottom: 30rem;
`;

const Contents = styled.div`
  width: 100%;
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

export default AdminHotelList;
