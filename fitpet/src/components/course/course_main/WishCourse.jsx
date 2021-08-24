import React from 'react';
import styled from 'styled-components';
import { Font } from '../../../common';

const WishCourse = (props) => {
  const { margin, handleClick } = props;

  const styles = {
    margin: margin,
  };
  return (
    <WishCourseBox {...styles} onClick={handleClick}>
      <div className='imageBox'>
        <LikeBtn />
      </div>
      <div className='textBox'>
        {/* 카드 제목 */}
        <Font
          fontSize='2.4rem'
          color='#2a2a2a'
          fontWeight='600'
          lineHeight='1.33'
          mb='2.4rem'>
          반려동물과 호텔에서 2박 3일 제주도 여행! &#40;feat. 렌트카&#41;
        </Font>
        {/* 태그 모음 */}
        <div className='tagBox'>
          <span>
            <Font fontSize='1.6rem' color='#2a2a2a'>
              #여유로운
            </Font>
          </span>
          <span>
            <Font fontSize='1.6rem' color='#2a2a2a'>
              #대형견
            </Font>
          </span>
          <span>
            <Font fontSize='1.6rem' color='#2a2a2a'>
              #가족여행
            </Font>
          </span>
          <span>
            <Font fontSize='1.6rem' color='#2a2a2a'>
              #펜션에서하루
            </Font>
          </span>
        </div>
        {/* 날짜 */}
        <Font fontSize='1.4rem' color='#979797' fontWeight='300'>
          21.09.12
        </Font>
      </div>
    </WishCourseBox>
  );
};

const WishCourseBox = styled.div`
  width: 40rem;
  background-color: ${(props) => props.theme.grey4_color};
  cursor: pointer;
  border-radius: 25px;
  .imageBox {
    position: relative;
    height: 40rem;
  }
  .textBox {
    //height: 18.2rem;
    background-color: ${(props) => props.theme.white_color};
    border-radius: 0 0 25px 25px;
    padding: 2.6rem 4rem 2.6rem 2.6rem;
    border: solid 1px ${(props) => props.theme.grey4_color};
    display: block;
    .tagBox {
      display: flex;
      margin-bottom: 1rem;
      span {
        margin-right: 1.4rem;
      }
    }
  }

  ${(props) => (props.margin ? `margin:${props.margin};` : 'margin:0')}
`;
const LikeBtn = styled.div`
  position: absolute;
  top: 3.8rem;
  right: 2.8rem;
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  background: url('/img/icon/likeicon.png') no-repeat;
`;

export default WishCourse;
