import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDetectOutsideClick } from '../../../../hooks/useDetectOutsideClick';
import SearchButton from './SearchButton';

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
          <img
            className='buttonImg'
            src='/img/search_box/location.png'
            alt='location'
          />
          <span className='buttonText'>어디서 픽업하세요?</span>
        </SearchLocationWrapper>
        <nav
          ref={dropdownRef}
          className={`menu ${isLocation ? 'active' : 'inactive'}`}>
          <div>
            {/* <dl style={{ marginBottom: '3.2rem' }}>
              <LocationText>최근 검색한 곳</LocationText>
              <SearchButton>제주도</SearchButton>
            </dl> */}
            <dl>
              <LocationText>핏펫 인기 여행지</LocationText>
              <SearchButton>제주도</SearchButton>
              <SearchButton>서울</SearchButton>
              <SearchButton>전주</SearchButton>
              <SearchButton>강릉</SearchButton>
              <SearchButton>부산</SearchButton>
              <SearchButton>포항</SearchButton>
              <SearchButton>대구</SearchButton>
            </dl>
          </div>
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
  dl {
    float: left;
  }
  dt {
    display: block;
    margin: 0;
  }
`;

const LocationText = styled.dt`
  height: 1.6rem;
  font-size: 1.4rem;
  font-weight: normal;
  text-align: left;
  color: ${(props) => props.theme.black1_color};
`;
const SearchLocationWrapper = styled.button`
  display: flex;
  width: 21rem;
  height: 4.8rem;
  border-radius: 7px;
  margin-right: 1rem;
  padding: 0.7rem 0.8rem;
  align-items: center;
  background-color: ${(props) => props.theme.grey5_color};
  border: solid 1px ${(props) => props.theme.grey5_color};
  outline: none;
  &:focus,
  &:hover {
    border: solid 1px ${(props) => props.theme.main_color};
  }
  .buttonImg {
    width: 3.4rem;
    height: 3.4rem;
  }
  .buttonText {
    color: ${(props) => props.theme.black1_color};
    margin-left: 1.2rem;
    font-size: 1.6rem;
  }
`;

export default SearchLocationBox;
