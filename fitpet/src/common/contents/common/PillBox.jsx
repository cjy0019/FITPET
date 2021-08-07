import React from 'react';
import styled from 'styled-components';

const PillBox = (props) => {
  const { margin, handleClick } = props;
  const { img, text1, text2 } = props;

  const styles = {
    margin: margin,
  };
  return (
    <PillBoxWrapper {...styles} onClick={handleClick}>
      <PillImageBox img={img}></PillImageBox>
      <PillTextBox>
        <p>{text1}</p>
        <p>{text2}</p>
      </PillTextBox>
    </PillBoxWrapper>
  );
};

const PillBoxWrapper = styled.div`
  cursor: pointer;
  ${(props) => (props.margin ? `margin:${props.margin};` : 'margin:0')}
`;
const PillImageBox = styled.div`
  width: 28.4rem;
  height: 20.4rem;
  background-image: url(${(props) => props.img});
  border-radius: 25px 25px 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${(props) => props.theme.grey1_color};
`;
const PillTextBox = styled.div`
  width: 28.4rem;
  height: 27rem;
  border-radius: 0 0 25px 25px;
  background-color: ${(props) => props.theme.grey4_color};
  font-size: 3rem;
  line-height: 1.2; // 줄 간격
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.16);
  background-color: #ebebeb;
`;
export default PillBox;
