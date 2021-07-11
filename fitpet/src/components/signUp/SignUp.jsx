import React from 'react';
import styled from 'styled-components';
import SignUpContent from './SignUpContent';
import SignUpHeader from './SignUpHeader';

const SignUp = () => {
  return (
    <form>
      <SignUpWrapper>
        {/* 회원가입 헤더 부분 */}
        <SignUpHeader />
        {/* 회원가입 내용 */}
        <SignUpContent />
      </SignUpWrapper>
    </form>
  );
};

const SignUpWrapper = styled.div`
  width: 52.4rem;
  height: 62.7rem;
  padding: 5rem 3.9rem 4.7rem;
  border-radius: 30px;
  border: solid 1px #707070;
  background-color: #ffffff;
`;

export default SignUp;
