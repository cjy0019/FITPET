import React from 'react';
import styled from 'styled-components';

const Slogan = () => {
  return (
    <StyledSlogan>
      반려동물과 함께하는 맞춤 힐링여행!
      <br /> 핏펫에 오신걸 환영합니다&#58;&#41;
    </StyledSlogan>
  );
};

const StyledSlogan = styled.p`
  margin-top: 0.6rem;
  font-size: 14px;
  font-style: normal;
  letter-spacing: -0.28px;
  text-align: center;
  line-height: 1.43;
  color: ${(props) => props.theme.black1_color};
`;

export default Slogan;
