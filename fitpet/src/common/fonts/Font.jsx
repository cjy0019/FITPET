import React from 'react';
import styled from 'styled-components';

const Font = (props) => {
  const { color, children, _onClick, margin, padding } = props;

  const styles = {
    color: color,
    margin: margin,
    padding: padding,
  };

  return (
    <H1 {...styles} onClick={_onClick}>
      {children}
    </H1>
  );
};

export default Font;

const H1 = styled.h1`
  font-family: Pretendard;
  font-weight: bold;
  font-size: 42px;
  color: ${(props) => props.color};
  ${(props) => (props.margin ? `margin:${props.margin};` : 'margin:0px')}
  padding: ${(props) => props.padding};
`;
