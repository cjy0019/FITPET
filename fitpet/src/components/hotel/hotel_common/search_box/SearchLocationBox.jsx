import React, { useRef } from 'react';
import styled from 'styled-components';
import { RoundSquareBtn } from '../../../../common';
import { useDetectOutsideClick } from '../../../../hooks/useDetectOutsideClick';

const SearchLocationBox = () => {
  const dropdownRef = useRef(null);
  const [isLocation, setIsLocationBox] = useDetectOutsideClick(
    dropdownRef,
    false,
  );
  const onClick = () => {
    setIsLocationBox(!isLocation);
  };
  return (
    <>
      <MenuContainer>
        <SearchLocationWrapper onClick={onClick}>
          <span>어디로 떠날까요?</span>
        </SearchLocationWrapper>
        <nav
          ref={dropdownRef}
          className={`menu ${isLocation ? 'active' : 'inactive'}`}>
          <ul>
            <li>
              <LocationText>최근 검색한 곳</LocationText>
              <RoundSquareBtn search_btn>제주도</RoundSquareBtn>
            </li>
            <li style={{ marginTop: '3.2rem' }}>
              <LocationText>핏펫 인기 여행지</LocationText>
              <RoundSquareBtn search_btn>제주도</RoundSquareBtn>
              <RoundSquareBtn search_btn>서울</RoundSquareBtn>
              <RoundSquareBtn search_btn>전주</RoundSquareBtn>
              <RoundSquareBtn search_btn>강릉</RoundSquareBtn>
              <RoundSquareBtn search_btn>부산</RoundSquareBtn>
            </li>
          </ul>
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
  // 버튼 클릭 시 나오는 창
  .menu {
    width: 38rem;
    height: 28rem;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.16);
    background-color: ${(props) => props.theme.white_color};
    position: absolute;
    padding: 2.4rem;
    top: 5.8rem;
    left: 0;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
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
    align-items: center;
  }
`;

const LocationText = styled.p`
  height: 1.6rem;
  font-size: 1.4rem;
  font-weight: normal;
  text-align: left;
  color: ${(props) => props.theme.black1_color};
`;
const SearchLocationWrapper = styled.button`
  width: 30rem;
  height: 4.8rem;
  border-radius: 7px;
  background-color: ${(props) => props.theme.grey5_color};
  outline: none;
  background-image: url('/img/search_box/location.png');
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

export default SearchLocationBox;
