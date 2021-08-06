import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDetectOutsideClick } from '../../../../hooks/useDetectOutsideClick';
import Calendar from './Calendar';

const SearchDateBox = () => {
  const dropdownRef = useRef(null);
  const [isDate, setIsDateBox] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => {
    setIsDateBox(!isDate);
  };
  return (
    <>
      <MenuContainer>
        <SearchDateWrapper onClick={onClick}>
          <span>8월 6일 (금) - 8월 7일(토) | 1박</span>
        </SearchDateWrapper>

        <nav
          ref={dropdownRef}
          className={`menu ${isDate ? 'active' : 'inactive'}`}>
          <Calendar />
        </nav>
      </MenuContainer>
    </>
  );
};

const MenuContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .menu {
    width: 67.8rem;
    height: 30rem;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.16);
    background-color: ${(props) => props.theme.white_color};
    position: absolute;
    top: 5.8rem;
    left: 0;
    margin-left: 0.8rem;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  }

  .menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  .menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .menu li {
    display: block;
    // padding: 2.6rem 0;
    align-items: center; /* 가로 중앙 css*/
  }
`;

const SearchDateWrapper = styled.button`
  width: 34.4rem;
  height: 4.8rem;
  font-size: 1.6rem;
  margin: 0 1rem 0 1rem;
  border-radius: 7px;
  outline: none;
  background-color: ${(props) => props.theme.grey5_color};
  background-image: url('/img/search_box/date.png');
  background-size: 3.4rem 3.4rem;
  background-position: 1.5rem center;
  background-repeat: no-repeat;
  border: solid 1px ${(props) => props.theme.grey5_color};
  color: ${(props) => props.theme.black1_color};
  &:focus,
  &:hover {
    border: solid 1px ${(props) => props.theme.main_color};
  }
`;

export default SearchDateBox;
