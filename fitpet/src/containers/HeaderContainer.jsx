import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/common/header/Header';
import { closeLogin, openLogin } from '../redux/modules/modal';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const loginOpen = useSelector((state) => state.modal.loginOpen);

  const hideLogin = useCallback(() => {
    dispatch(closeLogin());
  }, [dispatch]);

  const showLogin = useCallback(() => {
    dispatch(openLogin());
  }, [dispatch]);

  useEffect(() => {
    if (loginOpen) {
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
  }, [loginOpen]);

  return (
    <Header showLogin={showLogin} hideLogin={hideLogin} loginOpen={loginOpen} />
  );
};

export default HeaderContainer;
