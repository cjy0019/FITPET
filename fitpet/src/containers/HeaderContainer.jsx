import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/common/header/Header';
import {
  closeLogin,
  closeSignUp,
  openLogin,
  openSignUp,
} from '../redux/modules/modal';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const loginOpen = useSelector((state) => state.modal.loginOpen);
  const signupOpen = useSelector((state) => state.modal.signupOpen);

  // 로그인 팝업 & 숨김
  const showLogin = useCallback(() => {
    dispatch(openLogin());
  }, [dispatch]);

  const hideLogin = useCallback(() => {
    dispatch(closeLogin());
  }, [dispatch]);

  // 회원가입 팝업 & 숨김
  const showSignUp = useCallback(() => {
    dispatch(openSignUp());
  }, [dispatch]);

  const hideSignUp = useCallback(() => {
    dispatch(closeSignUp());
  }, [dispatch]);

  useEffect(() => {
    if (loginOpen || signupOpen) {
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
  }, [loginOpen, signupOpen]);

  return (
    <Header
      showLogin={showLogin}
      hideLogin={hideLogin}
      loginOpen={loginOpen}
      showSignUp={showSignUp}
      hideSignUp={hideSignUp}
      signupOpen={signupOpen}
    />
  );
};

export default HeaderContainer;
