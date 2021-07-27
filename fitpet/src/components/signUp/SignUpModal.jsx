import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import SignUp from './SignUp';

const SignUpModal = (show) =>
  ReactDOM.createPortal(
    <>
      <SignUpModalWrapper>
        <div className='center'>
          <SignUp show={show} />
        </div>
      </SignUpModalWrapper>
    </>,
    document.querySelector('#signupModal'),
  );

const SignUpModalWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
  .center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
`;

export default SignUpModal;
