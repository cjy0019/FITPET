import React from 'react';
import styled from 'styled-components';

const MiddleSizeButton = (props) => {
  const {
    text,
    children,
    backColor,
    _onClick,
    borderRadius,
    width,
    height,
    p,
    pt,
    pb,
    pr,
    pl,
    mt,
    mb,
    mr,
    ml,
    color,
    fontSize,
    fontWeight,
    border,
  } = props;

  const styles = {
    p: p,
    dp: 'inline-block',
    color: color,
    width: width,
    height: height,
    pt: pt,
    pb: pb,
    pl: pl,
    pr: pr,
    mt: mt,
    mb: mb,
    ml: ml,
    mr: mr,
    fontSize: fontSize,
    fontWeight: fontWeight,
    border: border,
    backColor: backColor,
    borderRadius: borderRadius,
  };

  return (
    <StyledButton {...styles} onClick={_onClick}>
      {text ? text : children}
    </StyledButton>
  );
};

MiddleSizeButton.defaultProps = {
  text: '버튼 이름',
  children: null,
  width: '31rem',
  borderRadius: '1.2rem',
  fontSize: '2.4rem',
  fontWeight: 'normal',
  color: 'black',
  border: 'solid 1px #707070',

  _onClick: () => {},
};

const StyledButton = styled.button`
  width: ${(props) => props.width};
  cursor: pointer;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  outline: none;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backColor};
  border-radius: ${(props) => props.borderRadius};
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  margin-top: ${(props) => props.mt};
  margin-right: ${(props) => props.mr};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  border: ${(props) => props.border};
  background-position: ${(props) => props.bgp};
  background-image: url(${(props) => props.url});
  background-size: ${(props) => props.size};

  cursor: pointer;
  white-space: nowrap;
  background-repeat: no-repeat;
  outline: none;
`;

export default MiddleSizeButton;
