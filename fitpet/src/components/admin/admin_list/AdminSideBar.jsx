import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideBar = styled.div`
  width: 23rem;
  height: 25rem;
  position: sticky;
  top: 10rem;

  h3 {
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 1.21;
    color: ${(props) => props.theme.black1_color};
    padding-left: 4.5rem;
    margin-bottom: 2rem;
  }

  ul {
    width: 23rem;
    border-top: solid 2px ${(props) => props.theme.main_color};
    border-bottom: solid 2px ${(props) => props.theme.main_color};
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.2;

    li {
      cursor: pointer;
    }

    li > a {
      display: block;
      padding: 1.7rem 0 1.7rem 4.5rem;
      width: 100%;
      color: ${(props) => props.theme.black1_color};
      &:hover {
        background-color: #dae0ff;
      }
    }
  }
`;

const AdminSideBar = () => {
  return (
    <SideBar>
      <h3>데이터 관리</h3>
      <ul>
        <li>
          <Link to='/admin'>숙소 리스트</Link>
        </li>
        <li>
          <Link to='/admin'>객실 리스트</Link>
        </li>
        <li>
          <Link to='/admin'>렌트카 리스트</Link>
        </li>
      </ul>
    </SideBar>
  );
};

export default AdminSideBar;
