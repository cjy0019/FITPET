import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import SignUp from '../components/signUp/SignUp';
import { signupSagaStart } from '../redux/modules/signup';

const SignupContainer = ({ hideSignUp }) => {
  const dispatch = useDispatch();
  const signup = useCallback(
    (userId, userPW) => {
      dispatch(signupSagaStart(userId, userPW));
    },
    [dispatch],
  );

  return <SignUp hideSignUp={hideSignUp} signup={signup} />;
};

export default SignupContainer;
