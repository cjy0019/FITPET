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
    margin-left: 0.2rem;
    border-bottom: solid 0.5px #979797;
  }
`;

const StyledP = styled.p`
  display: inline-block;
  text-align: center;
`;

export default GotoSignUp;
