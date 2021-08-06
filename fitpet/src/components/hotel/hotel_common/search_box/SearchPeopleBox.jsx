import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDetectOutsideClick } from '../../../../hooks/useDetectOutsideClick';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { RoundSquareBtn } from '../../../../common';

const SearchPeopleBox = () => {
  const dropdownRef = useRef(null);
  const [isPeople, setIsPeopleBox] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => {
    setIsPeopleBox(!isPeople);
    console.log('dd');
  };

  return (
    <>
      <MenuContainer>
        <SearchPeopleWrapper onClick={onClick}>
          <span>성인1 | 객실1 | 소형견1</span>
        </SearchPeopleWrapper>
        <nav
          ref={dropdownRef}
          className={`menu ${isPeople ? 'active' : 'inactive'}`}>
          <ul>
            <li>
              <NumberBlock>
                <TypeText>객실</TypeText>
                <ButtonBlock>
                  <button>
                    <AiOutlineMinus size='13px' />
                  </button>
                  <p>1</p>
                  <button>
                    <AiOutlinePlus size='13px' />
                  </button>
                </ButtonBlock>
              </NumberBlock>
            </li>
            <li style={{ border: 'none', marginTop: '2rem' }}>
              <NumberBlock>
                <TypeText>성인</TypeText>
                <ButtonBlock>
                  <button>
                    <AiOutlineMinus size='13px' />
                  </button>
                  <p>1</p>
                  <button>
                    <AiOutlinePlus size='13px' />
                  </button>
                </ButtonBlock>
              </NumberBlock>
            </li>
            <li>
              <NumberBlock>
                <TypeText>
                  어린이
                  <br />
                  <span>( 만 12세 미만)</span>
                </TypeText>
                <ButtonBlock>
                  <button>
                    <AiOutlineMinus size='13px' />
                  </button>
                  <p>1</p>
                  <button>
                    <AiOutlinePlus size='13px' />
                  </button>
                </ButtonBlock>
              </NumberBlock>
            </li>
            <li style={{ border: 'none' }}>
              <RoundSquareBtn search_btn>소형견</RoundSquareBtn>
              <RoundSquareBtn search_btn>중형견</RoundSquareBtn>
              <RoundSquareBtn search_btn>대형견</RoundSquareBtn>
              <RoundSquareBtn style={{ marginRight: '0' }} search_btn>
                고양이
              </RoundSquareBtn>
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
  .menu {
    width: 36rem;
    height: 29rem;
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
    padding-bottom: 2rem;
    align-items: center; /* 가로 중앙 css*/
    // 검색, 재검색, 상세보기 버튼
    border-bottom: solid 1px ${(props) => props.theme.grey4_color};
  }
`;

const NumberBlock = styled.div`
  display: flex;
  width: 28.6rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const TypeText = styled.p`
  font-size: 1.4rem;
  font-weight: normal;
  text-align: left;
  color: ${(props) => props.theme.grey1_color};
  span {
    font-size: 1rem;
    margin-top: 0.5rem;
    letter-spacing: -0.8px;
  }
`;
const ButtonBlock = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  button {
    width: 28px;
    height: 28px;
    //margin: 0 4px 20px 60px;
    // padding: 14px 9px;
    border-radius: 14px;
    border: solid 1.6px ${(props) => props.theme.grey2_color};
    color: ${(props) => props.theme.grey2_color};
    background-color: #fff;
    font-size: 10px;
    &:active {
      color: ${(props) => props.theme.main_color};
      border: solid 1.6px ${(props) => props.theme.main_color};
    }
  }
  p {
    font-size: 1.4rem;
    font-weight: normal;
    //float: right;
    color: ${(props) => props.theme.grey1_color};
    margin: 0 1.5rem;
  }
`;
const SearchPeopleWrapper = styled.button`
  width: 26.6rem;
  height: 4.8rem;
  font-size: 1.6rem;
  border-radius: 7px;
  outline: none;
  background-color: ${(props) => props.theme.grey5_color};
  background-image: url('/img/search_box/people.png');
  margin-right: 1rem;
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

export default SearchPeopleBox;
