import React from 'react';
import styled from 'styled-components';
import { Font } from '../../../common';
import { Link } from 'react-scroll';

const HotelMenu = () => {
  return (
    <div>
      <MenuContainer>
        <div className='menu'>
          <Link to='roomChoose' spy={true} smooth={true}>
            <Font fontSize='1.6rem' fontWeight='500' mr='5rem'>
              객실선택
            </Font>
          </Link>
          <Link to='hotelDetail' spy={true} smooth={true}>
            <Font fontSize='1.6rem' fontWeight='500' mr='5rem'>
              숙소상세정보
            </Font>
          </Link>
          <Link to='hotelService' spy={true} smooth={true}>
            <Font fontSize='1.6rem' fontWeight='500' mr='5rem'>
              편의시설 및 서비스
            </Font>
          </Link>
          {/* <Link to='hotelService' spy={true} smooth={true}>
            <Font fontSize='1.6rem' fontWeight='500' mr='5rem'>
              후기
            </Font>
          </Link> */}
          <Link to='othertravelersHotel' spy={true} smooth={true}>
            <Font fontSize='1.6rem' fontWeight='500'>
              다른 추천 호텔
            </Font>
          </Link>
        </div>
      </MenuContainer>
    </div>
  );
};

const MenuContainer = styled.div`
  width: 100%;
  z-index: 999;
  flex-direction: column;
  font-size: 1.6rem;
  .menu {
    margin: 0;
    display: flex;
    Link {
      cursor: pointer;
      p {
        &:hover {
          font-weight: bold;
          padding-bottom: 3.1rem;
          border-bottom: 4px solid #979797;
        }
      }
    }
  }
`;

export default HotelMenu;
