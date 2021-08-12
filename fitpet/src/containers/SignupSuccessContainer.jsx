import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import SignUpEnd from '../components/signUp/SignUpEnd';
import { openLogin, signupSuccessClose } from '../redux/modules/modal';

const SignupSuccessContainer = () => {
  const dispatch = useDispatch();

  const goHome = useCallback(() => {
    dispatch(signupSuccessClose());
  }, [dispatch]);

  const goLogin = useCallback(() => {
    dispatch(signupSuccessClose());
    dispatch(openLogin());
  }, [dispatch]);

  return <SignUpEnd goHome={goHome} goLogin={goLogin} />;
};

export default SignupSuccessContainer;
