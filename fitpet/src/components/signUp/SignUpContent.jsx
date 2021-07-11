import React, { Component } from 'react';
import SignUpInput from './SignUpInput';
import SignUpSocial from './SignUpSocial';
import SignUpBottom from './SignUpBottom';
import styled from 'styled-components';

export class SignUpContent extends Component {
  render() {
    return (
      <ContentBlock>
        {/* 회원 정보 입력 칸, 다음으로 버튼 */}
        <SignUpInput />
        {/* sns계정으로 가입 */}
        <SignUpSocial />
        <SignUpBottom />
      </ContentBlock>
    );
  }
}

const ContentBlock = styled.div`
  padding: 5rem 3.6rem 0;
`;
export default SignUpContent;
