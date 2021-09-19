import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDetectOutsideClick } from '../../../../hooks/useDetectOutsideClick';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import SearchButton from './SearchButton';

const SearchCarBox = () => {
  const dropdownRef = useRef(null);
  const [isPeople, setIsPeopleBox] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => {
    setIsPeopleBox(!isPeople);
  };

  return (
    <>
      <MenuContainer>
        <SearchPeopleWrapper onClick={onClick}>
          <img
            className='buttonImg'
            src='/img/search_box/people.png'
            alt='location'
          />
          <span className='buttonText'>차종</span>
        </SearchPeopleWrapper>
        <nav
          ref={dropdownRef}
          className={`menu ${isPeople ? 'active' : 'inactive'}`}>
          <ul>
            <li>
              <NumberBlock>
                <TypeText>객실</TypeText>
                <ButtonBlock>
                  <button className='numberBtn'>
                    <AiOutlineMinus size='1.3rem' />
                  </button>
                  <p className='number'>1</p>
                  <button className='numberBtn'>
                    <AiOutlinePlus size='1.3rem' />
                  </button>
                </ButtonBlock>
              </NumberBlock>
            </li>
            <li style={{ border: 'none', marginTop: '2rem' }}>
              <NumberBlock>
                <TypeText>성인</TypeText>
                <ButtonBlock>
                  <button className='numberBtn'>
                    <AiOutlineMinus size='1.3rem' />
                  </button>
                  <p className='number'>1</p>
                  <button className='numberBtn'>
                    <AiOutlinePlus size='1.3rem' />
                  </button>
                </ButtonBlock>
              </NumberBlock>
            </li>
            <li>
              <NumberBlock>
                <TypeText>
                  어린이
                  <br />
                  <span className='subText'>( 만 12세 미만)</span>
                </TypeText>
                <ButtonBlock>
                  <button className='numberBtn'>
                    <AiOutlineMinus size='1.3rem' />
                  </button>
                  <p className='number'>1</p>
                  <button className='numberBtn'>
                    <AiOutlinePlus size='1.3rem' />
                  </button>
                </ButtonBlock>
              </NumberBlock>
            </li>
            <dl style={{ border: 'none' }}>
              <SearchButton>소형견</SearchButton>
              <SearchButton>중형견</SearchButton>
              <SearchButton>대형견</SearchButton>
              <SearchButton style={{ marginRight: 0 }}>고양이</SearchButton>
            </dl>
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
  dl {
    float: left;
  }
`;

const NumberBlock = styled.div`
  display: flex;
  width: 30rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const TypeText = styled.p`
  font-size: 1.4rem;
  font-weight: normal;
  text-align: left;
  color: ${(props) => props.theme.grey1_color};
  .subText {
    font-size: 1rem;
    margin-top: 0.5rem;
    letter-spacing: -0.8px;
  }
`;
const ButtonBlock = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  .numberBtn {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 1.4rem;
    border: solid 1px ${(props) => props.theme.grey2_color};
    color: ${(props) => props.theme.grey2_color};
    background-color: #fff;
    display: block;
    margin: auto;
    &:active {
      color: ${(props) => props.theme.main_color};
      border: solid 1px ${(props) => props.theme.main_color};
    }
  }
  .number {
    font-size: 1.4rem;
    font-weight: normal;
    color: ${(props) => props.theme.grey1_color};
    margin: 0 1.5rem;
  }
`;
const SearchPeopleWrapper = styled.button`
  display: flex;
  width: 14.3rem;
  height: 4.8rem;
  border-radius: 7px;
  outline: none;
  align-items: center;
  background-color: ${(props) => props.theme.grey5_color};
  margin-right: 1rem;
  border: solid 1px ${(props) => props.theme.grey5_color};
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

export default SearchCarBox;
