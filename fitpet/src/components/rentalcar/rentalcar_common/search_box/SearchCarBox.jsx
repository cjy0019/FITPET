import React, { useRef } from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const SearchCarBox = () => {
  const selectList = [
    '경소형',
    '준중형',
    '중대형',
    '중대형',
    '승합차',
    '오픈카',
    '전기차',
  ];
  const [Selected, setSelected] = useState('차종');

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  return (
    <>
      <MenuContainer>
        <select onChange={handleSelect} value={Selected}>
          {selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </MenuContainer>
    </>
  );
};

const MenuContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default SearchCarBox;
