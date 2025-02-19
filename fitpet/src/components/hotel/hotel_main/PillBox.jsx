import React from 'react';
import styled from 'styled-components';
import HotelTextInfo from '../hotel_list/HotelTextInfo';

const PillBox = ({ region }) => {
  // 210904 API 주소 변경
  const IMG_API = 'http://211.219.114.239:61010/public';

  return (
    <PillBoxWrapper>
      <PillImageBox>
        <img src={IMG_API + region.lodgingImg} alt={region.lodgingImg} />
      </PillImageBox>
      <PillTextBox>
        <HotelTextInfo hotel={region} />
      </PillTextBox>
    </PillBoxWrapper>
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
  padding: 2.8rem 0 0 1rem;
  border-radius: 0 0 25px 25px;
  background-color: ${(props) => props.theme.white_color};
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.16);
`;

export default PillBox;
