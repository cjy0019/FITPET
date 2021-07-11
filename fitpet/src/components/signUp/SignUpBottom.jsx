import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SignUpBottom = () => {
  return (
    <div>
      <Line />
      {/* 라인 아래 부분 */}
      <BottomTextBlock>
        <BottomText>이미 핏펫 회원이신가요?</BottomText>
        <Link to='/login' className='login'>
          로그인
        </Link>
      </BottomTextBlock>
    </div>
  );
};

const Line = styled.hr`
  margin-bottom: 2.1rem;
`;
const BottomTextBlock = styled.div`
  text-align: center;
  .login {
    display: inline-block;
    width: 3.6rem;
    height: 1.6rem;
    margin: 0 0.3rem 0.2rem 1.5rem;
    font-size: 1.4rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: -0.28px;
    text-align: center;
    border-bottom: 1px solid #979797;
    color: #979797;
  }
`;
const BottomText = styled.p`
  display: inline-block;
  width: 13.2rem;
  height: 1.6rem;
  font-size: 1.4rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -0.28px;
  text-align: center;
  color: #979797;
`;
export default SignUpBottom;
