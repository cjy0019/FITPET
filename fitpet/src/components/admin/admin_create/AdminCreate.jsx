import React from 'react';
import styled from 'styled-components';
import { Font, RoundSquareBtn } from '../../../common';
import AdminInputContents from './AdminInputContents';

// 211009 by.dy 어드민 등록, 수정 페이지 추가
const AdminCreate = () => {
  return (
    <AdminCreateWrapper>
      <InputBoxWrapper>
        <Font fontSize='2.4rem' mb='2rem' color='#2a2a2a' fontWeight='bold'>
          숙소 등록
        </Font>
        {/* 등록, 수정 form 내용 */}
        <AdminInputContents />
        <ButtonWrapper>
          <div>
            <RoundSquareBtn grey_color style={{ padding: '0 4.4rem 0 4.4rem' }}>
              취소
            </RoundSquareBtn>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <RoundSquareBtn
              mint_color
              style={{ padding: '0 3rem 0 3rem', marginRight: '2rem' }}>
              미리보기
            </RoundSquareBtn>
            <RoundSquareBtn main_color style={{ padding: '0 4.4rem 0 4.4rem' }}>
              등록
            </RoundSquareBtn>
          </div>
        </ButtonWrapper>
      </InputBoxWrapper>
    </AdminCreateWrapper>
  );
};

const AdminCreateWrapper = styled.div`
  max-width: 100%;
  margin-top: 18rem;
`;
const InputBoxWrapper = styled.div`
  width: 128rem;
  margin: 0 auto;
`;
const ButtonWrapper = styled.div`
  margin: 4rem 0 12.3rem 0;
  display: flex;
`;

export default AdminCreate;
