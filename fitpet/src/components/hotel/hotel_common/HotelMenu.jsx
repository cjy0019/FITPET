import React, { useState } from 'react';
import styled from 'styled-components';
import { Font } from '../../../common';
import { Link } from 'react-scroll';
import theme from '../../../assets/theme';

const HotelMenu = () => {
  const [handleState] = useState(0);

  return (
    <MenuContainer>
      <ul className='menu'>
        <li>
          <Link
            to='roomChoose'
            className={handleState === 1 ? 'active' : ''}
            spy={true}
            smooth={true}
            offset={-120}>
            <Font color='#2a2a2a' fontSize='1.6rem' fontWeight='500'>
              객실선택
            </Font>
          </Link>
        </li>
        <li>
          <Link
            to='roomDetailInfo'
            className={handleState === 2 ? 'active' : ''}
            spy={true}
            smooth={true}
            offset={-150}>
            <Font color='#2a2a2a' fontSize='1.6rem' fontWeight='500'>
              숙소상세정보
            </Font>
          </Link>
        </li>
        <li>
          <Link
            to='roomService'
            className={handleState === 3 ? 'active' : ''}
            spy={true}
            smooth={true}
            offset={-130}>
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
          <Link
            to='othertravelersHotels'
            className={handleState === 4 ? 'active' : ''}
            spy={true}
            smooth={true}
            offset={-150}>
            <Font color='#2a2a2a' fontSize='1.6rem' fontWeight='500'>
              다른 추천 호텔
            </Font>
          </Link>
        </li>
      </ul>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  width: 100%;
  z-index: 999;
  flex-direction: column;
  font-size: 1.6rem;
  position: absolute;
  .menu {
    position: fixed;
    display: flex;
    li {
      margin-right: 5rem;
      height: 8rem;
      align-items: center;
      cursor: pointer;
      display: flex;
      .active {
        padding: 3rem 0;
        p {
          font-weight: 600;
        }
        border-bottom: 4px solid ${theme.main_color};
      }
      p {
        text-align: center;
      }
    }
  }
`;

export default HotelMenu;
