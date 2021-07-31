import React from 'react';
import styled from 'styled-components';

const LicenseButton = ({ children, name }) => {
  return (
    <RadioLabel htmlFor={name}>
      <RadioStyled type='radio' id={name} name='licences' />
      <RadioCircle></RadioCircle>
      {children}
    </RadioLabel>
  );
};

const RadioLabel = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.19;
  color: ${({ theme }) => theme.grey1_color};
  margin-right: 1rem;
`;

const RadioStyled = styled.input`
  display: none;
`;

const RadioCircle = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.5rem;
  border: 2px solid #d8e4e2;
  border-radius: 50%;
  margin-right: 1rem;
  box-sizing: border-box;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    background-color: #009879;
    border-radius: 50%;

    transform: scale(0);
  }
  input:checked + &::after {
    transform: scale(1.1);
    transition: transform 0.3s;
  }
`;

export default LicenseButton;
