import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import { Font } from '../../../common';

const OptionListItem = ({ option }) => {
  const { text, checked } = option;
  return (
    <OptionListItemWrapper>
      <div className={cn('checkbox', { checked })}>
        {checked ? (
          <MdCheckBox size='3rem' color='#4765ff' />
        ) : (
          <MdCheckBoxOutlineBlank size='3rem' color='#eee' />
        )}
      </div>
      <Font fontSize='1.4rem' color='#2a2a2a' ml='1rem'>
        {text}
      </Font>
    </OptionListItemWrapper>
  );
};
const OptionListItemWrapper = styled.div`
  width: 23rem;
  margin-right: 9rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;
export default OptionListItem;
