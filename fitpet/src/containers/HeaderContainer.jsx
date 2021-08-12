import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/common/header/Header';
import { openLogin, openSignUp } from '../redux/modules/modal';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const loginOpen = useSelector((state) => state.modal.loginOpen);
  const signupOpen = useSelector((state) => state.modal.signupOpen);
  const signupSuccessOpen = useSelector(
    (state) => state.modal.signupSuccessOpen,
  );

  // 로그인 팝업
  const showLogin = useCallback(() => {
    dispatch(openLogin());
  }, [dispatch]);

  // 회원가입 팝업
  const showSignUp = useCallback(() => {
    dispatch(openSignUp());
  }, [dispatch]);

  useEffect(() => {
    if (loginOpen || signupOpen || signupSuccessOpen) {
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
  }, [loginOpen, signupOpen, signupSuccessOpen]);

  return (
    <Header
      showLogin={showLogin}
      loginOpen={loginOpen}
      signupOpen={signupOpen}
      signupSuccessOpen={signupSuccessOpen}
      showSignUp={showSignUp}
    />
  );
};

export default HeaderContainer;
