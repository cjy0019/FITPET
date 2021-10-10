import React from 'react';
import styled, { css } from 'styled-components';

const AdminListButton = ({ children, register, del, modify }) => {
  return (
    <StyledButton register={register} modify={modify} del={del}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 11.6rem;
  height: 5rem;
  white-space: nowrap;
  font-family: PretendardVariable;
  font-size: 1.6rem;
  font-weight: 500;
  border-radius: 7px;
  padding: 1.5rem 3rem;

  ${(props) =>
    props.register &&
    css`
      background-color: ${(props) => props.theme.main_color};
      color: #fff;
    `}

  ${(props) =>
    props.del &&
    css`
      background-color: #ff9d53;
      color: #fff;
    `}
  ${(props) =>
    props.modify &&
    css`
      background-color: #f6f6f6;
      color: #4765ff;
    `}
`;

export default AdminListButton;
