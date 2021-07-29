// Common 테스트 파일입니다.
import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowRight } from 'react-icons/ai';

import {
  Font,
  CoursePage,
  Tag,
  Only,
  SliderRightButton,
  SliderLeftButton,
  IconButton,
  WishSmall,
} from '../common';

const CommonPage = () => {
  return (
    <div>
      <Font color='#23223'> 반려동물 맞춤 여행 플랫폼 FitPet</Font>
      <hr />
      <IconButton
        Icon={AiOutlineArrowRight}
        bgc='DarkBlue'
        color='red'
        p='2rem 3rem 2rem 3rem'
        // border-radius
        br='1rem'
        hoColor='green'
      />
      <br />
      <Font>코스페이지 컨텐츠 박스</Font>
      <br />
      <CoursePage></CoursePage>
      <TagBlock>
        <SliderLeftButton />
        <SliderRightButton />
        <Tag margin='0 4rem 0 0'></Tag>
        <Tag></Tag>
      </TagBlock>
      <OnlyBlock>
        <Only></Only>
        <Only></Only>
      </OnlyBlock>
      <WishBlock>
        <WishSmall></WishSmall>
        <WishSmall></WishSmall>
      </WishBlock>
    </div>
  );
};

export default CommonPage;

const TagBlock = styled.div`
  display: float;
`;

const OnlyBlock = styled.div`
  display: float;
`;
const WishBlock = styled.div`
  display: float;
`;
