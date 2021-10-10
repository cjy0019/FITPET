import React from 'react';
import styled from 'styled-components';
import AdminListButton from './AdminListButton';

const AdminListCard = () => {
  return (
    <CardContainer>
      <img src='/img/admin/adminList/sample.png' alt='admin' />
      <div>
        <div>
          <InfoContainer>
            <p>호텔 | 5성급</p>
            <p>롯데호텔 제주</p>
            <p>Lotte Hotel JEJU</p>
            <p>별점 4.5 | 위치 서귀포시</p>
            <p>소형견 | 중형견 | 애견동반</p>
          </InfoContainer>
        </div>

        <ButtonContainer>
          <AdminListButton del>삭제</AdminListButton>
          <AdminListButton modify>수정</AdminListButton>
          <AdminListButton register>객실등록</AdminListButton>
        </ButtonContainer>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  position: relative;
  margin-top: 3rem;
  gap: 2rem;

  img {
    width: 22rem;
  }
`;

const InfoContainer = styled.div`
  color: #2a2a2a;

  p:nth-of-type(1) {
    font-family: PretendardVariable;
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 1.71;
  }
  p:nth-of-type(2) {
    font-family: PretendardVariable;
    font-size: 1.9rem;
    font-weight: bold;
    line-height: 1.33;
  }
  p:nth-of-type(3) {
    font-family: PretendardVariable;
    font-size: 1.5rem;
    line-height: 1.71;
    color: #979797;
  }
  p:nth-of-type(4) {
    font-family: PretendardVariable;
    font-size: 1.5rem;
    line-height: 1.71;
  }
  p:nth-of-type(5) {
    font-family: PretendardVariable;
    font-size: 1.5rem;
    line-height: 1.71;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  gap: 2rem;
`;

export default AdminListCard;
