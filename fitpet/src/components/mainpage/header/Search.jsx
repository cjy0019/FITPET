import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ph = '여행지나 상품을 검색해보세요';

const Search = () => {
  return (
    <SearchWrapper>
      <h1>
        <NavLink to='/'>
          <StyledImg />
        </NavLink>
      </h1>
      <SearchInput placeholder={ph} />
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.6rem;
  margin-left: 2rem;
`;

const StyledImg = styled.img.attrs({
  src: '/img/logo-social.png',
  alt: 'FITPET 홈',
})`
  width: 11rem;
  height: 2.9rem;
`;

const SearchInput = styled.input`
  width: 40rem;
  padding: 1.4rem 12.4rem 1.3rem 7rem;
  border: none;
  outline: none;
  border-radius: 24px;
  margin-left: 3.08rem;
  line-height: 1.17;
  background-color: #cbcbcb;

  background-image: url('/img/logo-social.png');
  background-size: 3.4rem 3.4rem;
  background-repeat: no-repeat;
  background-position: 2.4rem center;

  &::placeholder {
    color: #ffffff;
  }
`;
export default Search;
