import React from 'react';
import styled from 'styled-components';

const LoginHeader = ({ hideLogin }) => {
  return (
    <StyledDiv>
      <h1>로그인</h1>
      <StyledX onClick={hideLogin} />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.black1_color};
`;

const StyledX = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 3.4rem;
  height: 3.4rem;
  object-fit: contain;
  background-image: url('/img/auth/closebutton.svg');
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export default LoginHeader;
