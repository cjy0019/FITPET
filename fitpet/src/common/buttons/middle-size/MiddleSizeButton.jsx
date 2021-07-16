import React from 'react';
import styled from 'styled-components';

const MiddleSizeButton = (props) => {
  const {
    text,
    children,
    height,
    bgc,
    _onClick,
    br,
    width,
    pt,
    pb,
    pr,
    pl,
    mt,
    mb,
    mr,
    ml,
    color,
    fs,
    fw,
    border,
  } = props;

  const styles = {
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
    fs: fs,
    fw: fw,
    border: border,
    bgc: bgc,
    br: br,
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
  br: '1.2rem',
  fs: '2.4rem',
  fw: 'normal',
  color: 'black',
  border: 'solid 1px #707070',

  _onClick: () => {},
};

const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: pointer;
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  outline: none;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgc};
  border-radius: ${(props) => props.br};
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  margin-top: ${(props) => props.mt};
  margin-right: ${(props) => props.mr};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  border: ${(props) => props.border};
`;

export default MiddleSizeButton;
