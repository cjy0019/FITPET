// Common 테스트 파일입니다.
import React from 'react';
import styled from 'styled-components';

import { Font, CoursePage, Tag, Only } from '../common';

const CommonPage = () => {
  return (
    <div>
      <Font color='#23223'> 반려동물 맞춤 여행 플랫폼 FitPet</Font>
      <hr />
      <br />
      <Font>코스페이지 컨텐츠 박스</Font>
      <br />
      <CoursePage></CoursePage>
      <TagBlock>
        <Tag margin='0 4rem 0 0'></Tag>
        <Tag></Tag>
      </TagBlock>
      <OnlyBlock>
        <Only></Only>
        <Only></Only>
      </OnlyBlock>
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
