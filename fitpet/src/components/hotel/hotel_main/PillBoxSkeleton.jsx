import { Skeleton } from 'antd';
import React from 'react';
import styled from 'styled-components';

const PillBoxSkeleton = () => {
  return (
    <>
      <PillBoxWrapper>
        <PillImageBox>
          <Skeleton.Image style={{ width: '28.4rem', height: '20.4rem' }} />
        </PillImageBox>
        <PillTextBox>
          <Skeleton active={true} paragraph={{ rows: 3 }} />
        </PillTextBox>
      </PillBoxWrapper>
    </>
  );
};

const PillBoxWrapper = styled.div`
  cursor: pointer;
  ${(props) => (props.margin ? `margin:${props.margin};` : 'margin:0')}
`;
const PillImageBox = styled.div`
  img {
    width: 28.4rem;
    height: 20.4rem;
  }
  background-image: url(${(props) => props.img});
  border-radius: 25px 25px 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${(props) => props.theme.grey1_color};
`;
const PillTextBox = styled.div`
  width: 28.4rem;
  height: 27rem;
  padding: 2.8rem 1rem;
  border-radius: 0 0 25px 25px;
  background-color: ${(props) => props.theme.white_color};
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.16);
`;

export default PillBoxSkeleton;
