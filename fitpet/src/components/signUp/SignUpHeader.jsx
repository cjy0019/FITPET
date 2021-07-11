import React from 'react';
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';

const SignUpHeader = () => {
  return (
    <Header>
      <HeaderText>회원가입</HeaderText>
      <CloseBtn>
        <CloseOutlined styled={{ color: '#979797' }} />
      </CloseBtn>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HeaderText = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  letter-spacing: -0.44px;
  line-height: 1.18;
  color: #979797;
  text-align: left;
`;
const CloseBtn = styled.div`
  cursor: pointer;
  margin: 0 0 0 337px;
  font-size: 2.2rem;
  width: 15.2px;
  height: 15.2px;
  color: #707070;
  background-color: #ffffff;
`;

export default SignUpHeader;
