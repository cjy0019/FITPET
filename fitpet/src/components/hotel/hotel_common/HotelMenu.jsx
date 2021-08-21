import React from 'react';
import styled from 'styled-components';
import { Font } from '../../../common';
import { Link } from 'react-scroll';
import theme from '../../../assets/theme';

const HotelMenu = () => {
  return (
    <div>
      <MenuContainer>
        <ul className='menu'>
          <li>
            <Link to='roomChoose' spy={true} smooth={true}>
              <Font color='#2a2a2a' fontSize='1.6rem' fontWeight='500'>
                객실선택
              </Font>
            </Link>
          </li>
          <li>
            <Link to='roomDetailInfo' spy={true} smooth={true}>
              <Font color='#2a2a2a' fontSize='1.6rem' fontWeight='500'>
                숙소상세정보
              </Font>
            </Link>
          </li>
          <li>
            <Link to='roomService' spy={true} smooth={true}>
              <Font color='#2a2a2a' fontSize='1.6rem' fontWeight='500'>
                편의시설 및 서비스
              </Font>
            </Link>
          </li>
          {/* <Link to='hotelService' spy={true} smooth={true}>
            <Font fontSize='1.6rem' fontWeight='500'>
              후기
            </Font>
          </Link> */}
          <li>
            <Link to='othertravelersHotels' spy={true} smooth={true}>
              <Font color='#2a2a2a' fontSize='1.6rem' fontWeight='500'>
                다른 추천 호텔
              </Font>
            </Link>
          </li>
        </ul>
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
    display: flex;
    li {
      margin-right: 5rem;
      height: 8rem;
      align-items: center;
      cursor: pointer;
      display: flex;
      border-bottom: solid 4px transparent;
      &:active {
        border-bottom: 4px solid ${theme.main_color};
      }
      p {
        text-align: center;
        &:active {
          font-weight: 600;
        }
      }
    }
  }
`;

export default HotelMenu;
