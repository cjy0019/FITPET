import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FindId = () => {
  return (
    <AboutId>
      <div>
        <input type='checkbox' />
        <span>아이디 저장</span>
      </div>
      <Link to='/signup'>아이디/비밀번호 찾기</Link>
    </AboutId>
  );
};

// 아이디 찾기 및 저장
const AboutId = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: -0.24px;
  text-align: left;
  background-color: antiquewhite;
  margin-bottom: 3.6rem;
  color: #979797;

  span {
    vertical-align: bottom;
  }
  input {
    vertical-align: bottom;
  }
`;

export default FindId;
