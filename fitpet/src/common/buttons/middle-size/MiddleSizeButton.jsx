import React from 'react';
import styled from 'styled-components';

const MiddleSizeButton = (props) => {
  const {
    text,
    float,
    top,
    right,
    position,
    children,
    backColor,
    handleClick,
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
    size,
    bgp,
    url,
  } = props;

  const styles = {
    p: p,
    position: position,
    float: float,
    top: top,
    right: right,
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
    size: size,
    bgp: bgp,
    url: url,
  };

  return (
    <StyledButton {...styles} onClick={handleClick}>
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

  handleClick: () => {},
};

const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: pointer;
  float: ${(props) => props.float};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  outline: none;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backColor};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.p};
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
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  right: ${(props) => props.right};

  cursor: pointer;
  white-space: nowrap;
  background-repeat: no-repeat;
  outline: none;
`;

export default MiddleSizeButton;
