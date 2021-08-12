import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Login from '../components/login/Login';
import { loginSagaStart } from '../redux/modules/login';
import { closeLogin } from '../redux/modules/modal';

const LoginContainer = () => {
  const dispatch = useDispatch();

  // 로그인 창 닫기
  const hideLogin = useCallback(() => {
    dispatch(closeLogin());
  }, [dispatch]);

  const login = useCallback(
    (userId, userPW) => {
      dispatch(loginSagaStart(userId, userPW));
    },
    [dispatch],
  );

  return <Login login={login} hideLogin={hideLogin} />;
};

export default LoginContainer;
