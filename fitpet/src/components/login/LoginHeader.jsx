import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const LoginHeader = () => {
  return (
    <StyledDiv>
      <h1>로그인</h1>
      <StyledX>
        <CloseOutlined style={{ fontSize: '2.2rem', color: '#979797' }} />
      </StyledX>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2.2rem;
  font-weight: bold;
  color: #979797;
`;

const StyledX = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
`;

export default LoginHeader;
