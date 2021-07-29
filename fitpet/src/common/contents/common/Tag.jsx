import React from 'react';
import styled from 'styled-components';

const Tag = (props) => {
  const { margin, handleClick } = props;

  const styles = {
    margin: margin,
  };
  return (
    <TagBox {...styles} onClick={handleClick}>
      <TagBlock>
        <Text>제주도</Text>
        <TagTextBox>
          <TagText>#섬</TagText>
          <TagText>#아름다운</TagText>
          <TagText>#바닷가</TagText>
        </TagTextBox>
      </TagBlock>
    </TagBox>
  );
};

export default Tag;

const TagBox = styled.div`
  width: 29rem;
  height: 40rem;
  background-color: #979797;
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    margin-top: -1rem;
  }
  ${(props) => (props.margin ? `margin:${props.margin};` : 'margin:0')}
`;
const TagBlock = styled.div`
  display: inline-block;
  margin: 30.4rem 3rem 3.6rem 3rem;
  color: #fff;
`;
const Text = styled.p`
  height: 3.5rem;
  font-size: 3rem;
  margin-bottom: 0.9rem;
`;
const TagTextBox = styled.div`
  display: flex;
  font-size: 2rem;
`;
const TagText = styled.p`
  margin-right: 1.5rem;
`;
