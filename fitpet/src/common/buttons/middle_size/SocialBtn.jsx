import React from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { kakaoLoginSagaStart } from '../../../redux/modules/login';
const { Kakao } = window;

const SocialBtn = () => {
  const dispatch = useDispatch();
  return (
    <SocialBtnWrapper>
      <LoginBtn naver></LoginBtn>
      <LoginBtn kakao onClick={kakaoLogin}></LoginBtn>
    </SocialBtnWrapper>
  );

  function kakaoLogin() {
    // Kakao.Auth.login({
    //   scope: 'profile_nickname, account_email, gender',
    //   success: (authObj) => {
    //     console.log(authObj);
    //     Kakao.API.request({
    //       url: '/v2/user/me',
    //       success: (res) => {
    //         const kakao_account = res.kakao_account;
    //         localStorage.setItem('token', authObj.access_token);
    //       },
    //     });
    //   },
    //   fail: (err) => {
    //     console.log(err);
    //   },
    // });
    dispatch(kakaoLoginSagaStart());
  }
};

const SocialBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 4.8rem;
`;

const LoginBtn = styled.button`
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: 4.8rem 4.8rem;
  background-color: transparent;
  border: none;

  ${(props) =>
    props.kakao &&
    css`
      background-image: url('/img/auth/kakao.svg');
    `}

  ${(props) =>
    props.naver &&
    css`
      background-image: url('/img/auth/naver.svg');
    `}
`;

export default SocialBtn;
