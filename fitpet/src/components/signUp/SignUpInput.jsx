import React from 'react';
import styled from 'styled-components';

const SignUpInput = () => {
  return (
    <FormBlock>
      <Input placeholder='이메일 아이디' type='email' />
      <Input placeholder='비밀번호' type='password' />
      <Input placeholder='비밀번호 확인' type='password' />
      <Button>다음으로</Button>
    </FormBlock>
  );
};

const FormBlock = styled.div`
  //padding: 3.6rem 5rem;
`;

const Input = styled.input`
  display: block;
  width: 37.39rem;
  height: 3.3rem;
  margin: 0 289px 36px 0;
  font-size: 1.6rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: 0em;
  text-align: left;
  color: #cbcbcb;
  border: none;
  border-bottom: solid 0.5px #cbcbcb;
  padding-bottom: 1.4rem;
`;
const Button = styled.button`
  cursor: pointer;
  width: 374px;
  height: 52px;
  border-radius: 26px;
  background-color: #979797;
  border: none;
  color: #ffffff;
  font-size: 1.8rem;
`;

export default SignUpInput;
