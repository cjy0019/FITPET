import React from 'react';
import styled from 'styled-components';

const BasicBox = (props) => {
  const {
    text,
    fontSize,
    fontWeight,
    backColor,
    textHover,
    margin,
    color,
    pt,
    pb,
    pr,
    pl,
    mt,
    mb,
    mr,
    ml,
    width,
    height,
    position,
    top,
    right,
    border,
    children,
    borderRadius,
    handleClick,
  } = props;

  const styles = {
    fontSize: fontSize,
    fontWeight: fontWeight,
    position: position,
    top: top,
    right: right,
    backColor: backColor,
    color: color,
    margin: margin,
    width: width,
    height: height,
    textHover: textHover,
    pt: pt,
    pb: pb,
    pl: pl,
    pr: pr,
    mt: mt,
    mb: mb,
    ml: ml,
    mr: mr,
    border: border,
    borderRadius: borderRadius,
  };

  return (
    <BasicBoxWrapper {...styles} onClick={handleClick}>
      <TextBox>{text ? text : children}</TextBox>
    </BasicBoxWrapper>
  );
};

BasicBox.defaultProps = {
  text: '박스 이름',
  children: null,
  position: 'relative',
  color: '#fff',
  fontSize: '2.4rem',
  fontWeight: 'normal',
  margin: '0',
  padding: '0',
  width: '28px',
  height: '28px',
  backColor: '#979797',

  handleClick: () => {},
};

const BasicBoxWrapper = styled.div`
  right: ${({ right }) => right};
  top: ${({ top }) => top};
  position: ${({ position }) => position};
  background-color: ${(props) => props.backColor};
  color: ${(props) => props.color};
  ${(props) => (props.margin ? `margin:${props.margin};` : 'margin:0px')}
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  margin-top: ${(props) => props.mt};
  margin-right: ${(props) => props.mr};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  cursor: pointer;
`;

const TextBox = styled.div`
  width: 33.9rem;
  height: 7.7rem;
  position: relative;
  top: 70%;
  //display: inline-block;
  margin: 0 0 4.2rem 3.1rem;
  //margin-bottom: 4.2rem;
  padding-bottom: 42px;
`;
export default BasicBox;
