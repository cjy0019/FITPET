import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GotoSignUp = () => {
  return (
    <Container>
      <StyledP>아직 핏펫 회원이 아니신가요?</StyledP>
      <Link to='/signup' className='signUp'>
        회원가입
      </Link>
    </Container>
  );
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
    border-bottom: 1px solid ${(props) => props.theme.black1_color};
    color: ${(props) => props.theme.black1_color};
  }
`;

const StyledP = styled.p`
  display: inline-block;
  text-align: center;
`;

export default GotoSignUp;
