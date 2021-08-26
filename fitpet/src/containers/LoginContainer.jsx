import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../components/login/Login';
import { loginSagaStart } from '../redux/modules/login';
import { closeLogin } from '../redux/modules/modal';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const isLoading = useSelector((state) => state.login.isLoading);

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
  if (token) return <></>;
  return <Login login={login} hideLogin={hideLogin} isLoading={isLoading} />;
};

export default LoginContainer;
