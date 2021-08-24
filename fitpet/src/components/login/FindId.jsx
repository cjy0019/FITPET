import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FindId = () => {
  return (
    <AboutId>
      <div>
        <input type='checkbox' id='saveId' />
        <label htmlFor='saveId'>
          <p>아이디 저장</p>
        </label>
      </div>
      <NavLink style={{ color: '#2a2a2a' }} to='/signup'>
        아이디/비밀번호 찾기
      </NavLink>
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
  margin-top: 1rem;

  line-height: 1.17;
  color: ${(props) => props.theme.black1_color};

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  label {
    transform: translateY(0.14rem);
    cursor: pointer;
  }

  span {
    vertical-align: bottom;
    cursor: pointer;
  }
  input {
    vertical-align: bottom;
    cursor: pointer;
  }
`;

const NavLink = styled(Link)`
  transform: translateY(20%);
`;

export default FindId;
