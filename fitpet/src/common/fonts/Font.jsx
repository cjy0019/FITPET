import React from 'react';
import styled from 'styled-components';

const Font = (props) => {
  const {
    fontSize,
    fontWeight,
    color,
    children,
    _onClick,
    margin,
    padding,
    borderBottom,
    textDecoration,
  } = props;

  const styles = {
    fontSize: fontSize,
    fontWeight: fontWeight,
    color: color,
    margin: margin,
    padding: padding,
    borderBottom: borderBottom,
    textDecoration: textDecoration,
  };

  return (
    <StyledFont {...styles} onClick={_onClick}>
      {children}
    </StyledFont>
  );
};

export default Font;

/**
 * 폰트 사이즈
 * H1 : 42px / Bold
 * H2 : 28px / Medium (default)
 * H3 : 24px / Regular
 * H4 : 18px / Regular
 * H5 : 16px / Regular
 * H6 : 14px / Regular
 */

Font.defaultProps = {
  children: null,
  fontFamily: 'Pretendard',
  fontSize: '28px',
  fontWeight: 'Medium',
  color: '#707070',
  borderBottom: 'none',
  textDecoration: 'none',
  _onClick: () => {},
};

const StyledFont = styled.p`
  font-family: Pretendard;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  /* letter-spacing: -20px; */
  color: ${(props) => props.color};
  ${(props) => (props.margin ? `margin:${props.margin};` : 'margin:0px')}
  padding: ${(props) => props.padding};
  border-bottom: ${(props) => props.borderBottom};
  text-decoration: ${(props) => props.textDecoration};
`;
