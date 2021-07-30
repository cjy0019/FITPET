import React from 'react';
import styled from 'styled-components';
import Font from '../../fonts/Font';

const MagazineBox = () => {
  return (
    <MagazineWrapper>
      <Font fontSize='2.4rem' fontWeight='bold' mb='2rem'>
        반려동물과 함께 차량 탑승시, 이건 꼭 알아두자!
      </Font>
      <Font fontSize='1.6rem' fontWeight='normal' mb='3rem'>
        ' 함께 차타고 여행가보는건 처음인데..괜찮을까.. ' 고민된다면?
      </Font>
      <Font fontSize='1.4rem' fontWeight='normal'>
        <span className='btn'>MORE</span>
      </Font>
    </MagazineWrapper>
  );
};
const MagazineWrapper = styled.div`
  width: 64rem;
  height: 24rem;
  padding: 6rem 8rem;
  border: solid 1px ${(props) => props.theme.grey1_color};
  text-align: center;
  .btn {
    border-bottom: 1px solid ${(props) => props.theme.grey3_color};
    padding-bottom: 6px;
  }
`;
export default MagazineBox;
