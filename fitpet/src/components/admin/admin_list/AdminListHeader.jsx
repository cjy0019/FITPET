import React from 'react';
import styled from 'styled-components';
import AdminListButton from './AdminListButton';

const AdminListHeader = () => {
  return (
    <StyledHeader>
      <h2>숙소리스트</h2>
      <AdminListButton register>숙소등록</AdminListButton>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.main_color};
  h2 {
    font-family: PretendardVariable;
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 1.21;
    color: ${(props) => props.theme.black1_color};
  }
`;

export default AdminListHeader;
