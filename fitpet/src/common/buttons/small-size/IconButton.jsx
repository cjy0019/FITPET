import React from 'react';
import styled from 'styled-components';

const IconButton = (props) => {
  const { Icon, text, bgc, hoColor, border, br, p, _onClick, color } = props;

  const styles = {
    bgc: bgc,
    hoColor: hoColor,
    border: border,
    color: color,
    p: p,
    br: br,
  };

  return (
    <IconWrapper {...styles} onClick={_onClick}>
      {Icon && text ? <Icon /> : text}
    </IconWrapper>
  );
};

IconButton.defaultProps = {
  text: '버튼',
  transition: 0,
  border: 'solid 1px #707070',
  br: '1000px',
  color: '#fff',
  _onClick: () => {},
};

const IconWrapper = styled.button`
  outline: none;
  cursor: pointer;
  transition: 0.4s;
  background-color: ${(props) => props.bgc};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.br};
  padding: ${(props) => props.p};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};

  &:hover {
    background-color: ${(props) => props.hoColor};
  }
`;

export default IconButton;
