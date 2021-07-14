import React from 'react';
import styled from 'styled-components';

const ToggleButton = () => {
  return (
    <div>
      <Toggle />
    </div>
  );
};

const Toggle = styled.input.attrs({
  type: 'checkbox',
})`
  position: relative;
  width: 7.6rem;
  height: 4rem;
  padding: 0.6rem 4.2rem 0.6rem 0.6rem;
  appearance: none;
  --webkit-appearance: none;
  --moz-appearance: none;
  border-radius: 20px;
  background-color: #cbcbcb;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 0.5s;

  &:checked {
    background-color: #636363;
  }

  &::before {
    content: '';
    position: absolute;
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }

  &:checked::before {
    transform: translateX(3.7rem);
  }
`;

export default ToggleButton;
