import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/common/header/Header';
import { logoutSagaStart } from '../redux/modules/login';
import { closeLoginFail, openLogin, openSignUp } from '../redux/modules/modal';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const isLoginOpen = useSelector((state) => state.modal.isLoginOpen);
  const isSignupOpen = useSelector((state) => state.modal.isSignupOpen);
  const isSignupSuccessOpen = useSelector(
    (state) => state.modal.isSignupSuccessOpen,
  );
  const isLoginFailOpen = useSelector((state) => state.modal.isLoginFailOpen);
  const token = useSelector((state) => state.login.token);

  // 로그인 팝업
  const showLogin = useCallback(() => {
    dispatch(openLogin());
  }, [dispatch]);

  // 로그인 실패 팝업닫기
  const hideLoginFail = useCallback(() => {
    dispatch(closeLoginFail());
  }, [dispatch]);

  // 로그인 실패 팝업닫으면서 다시 로그인창으로 이동
  const retryLogin = useCallback(() => {
    hideLoginFail();
    showLogin();
  }, [hideLoginFail, showLogin]);

  // 회원가입 팝업
  const showSignUp = useCallback(() => {
    dispatch(openSignUp());
  }, [dispatch]);

  // 로그아웃
  const logOut = useCallback(() => {
    dispatch(logoutSagaStart());
  }, [dispatch]);

  useEffect(() => {
    if (isLoginOpen || isSignupOpen || isSignupSuccessOpen || isLoginFailOpen) {
      document.body.style.cssText = `
      position:fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;
    `;
    }

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(window.scrollY, parseInt(scrollY || '0', 10) * -1);
    };
  }, [isLoginFailOpen, isLoginOpen, isSignupOpen, isSignupSuccessOpen]);

  return (
    <Header
      showLogin={showLogin}
      isLoginOpen={isLoginOpen}
      isLoginFailOpen={isLoginFailOpen}
      retryLogin={retryLogin}
      hideLoginFail={hideLoginFail}
      isSignupOpen={isSignupOpen}
      isSignupSuccessOpen={isSignupSuccessOpen}
      showSignUp={showSignUp}
      token={token}
      logOut={logOut}
    />
  );
};

export default HeaderContainer;
