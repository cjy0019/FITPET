import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../assets/theme';
import { Font } from '../../../common';

const NavHotelAbout = ({ pages, viewIndex, moveToPage }) => {
  return (
    <MenuContainer>
      <ul className='menu'>
        {pages.map((p, i) => (
          <li key={p} className={viewIndex == i ? 'on' : ''}>
            <Link onClick={moveToPage(i)}>
              <Font color='#2a2a2a' fontSize='1.6rem' fontWeight='500'>
                객실선택{p}
              </Font>
            </Link>
          </li>
        ))}
      </ul>
    </MenuContainer>
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

export default NavHotelAbout;
