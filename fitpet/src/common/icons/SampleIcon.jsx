import React from 'react';
import styled from 'styled-components';

const SampleIcon = (props) => {
  const {
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
  } = props;

  const styles = {
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
  };

  return <Icon {...styles} />;
};

SampleIcon.defaultProps = {
  color: '#fff',
  margin: '0',
  padding: '0',
  width: '28px',
  height: '28px',
  backColor: '#979797',
};

const Icon = styled.div`
  right: ${({ right }) => right};
  top: ${({ top }) => top};
  position: ${({ position }) => position};
  background-color: ${(props) => props.backColor};
  color: ${(props) => props.color};
  ${(props) => (props.margin ? `margin:${props.margin};` : 'margin:0px')}
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
`;

export default SampleIcon;
