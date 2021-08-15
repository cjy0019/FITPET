import React from 'react';
import styled from 'styled-components';

const SearchButton = (props) => {
  const { text, children } = props;
  return <StyledButton {...props}>{text ? text : children}</StyledButton>;
};

const StyledButton = styled.dd`
  padding: 1rem;
  height: 4rem;
  display: inline-box;
  margin: 1.6rem 1.6rem 0 0;
  align-items: center;
  border-radius: 5px;
  font-size: 1.4rem;
  letter-spacing: -0.28px;

  background-color: ${(props) => props.theme.white_color};
  border: solid 1px ${(props) => props.theme.grey2_color};
  color: ${(props) => props.theme.black1_color};
  :focus {
    color: ${(props) => props.theme.main_color};
    border: solid 1px ${(props) => props.theme.main_color};
  }
`;

export default SearchButton;
