import React from 'react';
import styled from 'styled-components';

const Font = (props) => {
  const { bold, color, children, size, _onClick } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
  };

  return (
    <H1 {...styles} onClick={_onClick}>
      {children}
    </H1>
  );
};

export default Font;

const H1 = styled.h1`
  color: ${(props) => props.color};
  font-size: 40px;
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  ${(props) => (props.margin ? `margin:${props.margin};` : 'margin:0px')}
  padding: ${(props) => props.padding};
`;
