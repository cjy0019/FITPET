import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FindId = () => {
  return (
    <AboutId>
      <div>
        <input type='checkbox' id='saveId' />
        <label htmlFor='saveId'>
          <span>아이디 저장</span>
        </label>
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
  letter-spacing: -0.24px;
  text-align: left;
  margin: 0.6rem 0 3.6rem;
  line-height: 1.17;
  color: #979797;

  span {
    vertical-align: bottom;
    cursor: pointer;
  }
  input {
    vertical-align: bottom;
    cursor: pointer;
  }
  a {
    transform: translateY(0.5rem);
  }
`;

export default FindId;
