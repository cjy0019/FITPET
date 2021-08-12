import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { closeLogin, openSignUp } from '../../redux/modules/modal';

const GotoSignUp = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <StyledP>아직 핏펫 회원이 아니신가요?</StyledP>

      <button className='signUp' onClick={goSignUp}>
        회원가입
      </button>
    </Container>
  );

  function goSignUp() {
    dispatch(closeLogin());
    dispatch(openSignUp());
  }
};

const Container = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 1.4rem;

  .signUp {
    display: inline-block;
    height: 1.6rem;
    margin: 0 0.3rem 0.2rem 1.5rem;
    font-size: 1.4rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: -0.28px;
    padding-bottom: 2rem;
    text-align: center;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.black1_color};
    color: ${(props) => props.theme.black1_color};

    background-color: transparent;
    &:hover {
      color: ${(props) => props.theme.main_color};
      border-bottom: 1px solid ${(props) => props.theme.main_color};
    }
  }
`;

const StyledP = styled.p`
  display: inline-block;
  text-align: center;
`;

export default GotoSignUp;
