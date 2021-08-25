import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SignUp from '../components/signUp/SignUp';
import { closeSignUp, openLogin } from '../redux/modules/modal';
import { signupSagaStart } from '../redux/modules/signup';

const SignupContainer = ({ showSignupSuccess }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.signup.isLoading);

  // 회원가입창 닫기
  const hideSignUp = useCallback(() => {
    dispatch(closeSignUp());
  }, [dispatch]);

  // 로그인 이동하기 버튼
  const goLogin = useCallback(() => {
    dispatch(closeSignUp());
    dispatch(openLogin());
  }, [dispatch]);

  // 로그인 버튼 클릭시
  const signup = useCallback(
    (userId, userPW, userName) => {
      dispatch(signupSagaStart(userId, userPW, userName));
    },
    [dispatch],
  );

  return (
    <SignUp
      hideSignUp={hideSignUp}
      goLogin={goLogin}
      signup={signup}
      showSignupSuccess={showSignupSuccess}
      isLoading={isLoading}
    />
  );
};

export default SignupContainer;
