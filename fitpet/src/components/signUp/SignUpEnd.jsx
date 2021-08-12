import React from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { signupSuccessClose } from '../../redux/modules/modal';

const SignUpEnd = ({ goLogin }) => {
  const dispatch = useDispatch();

  return (
    <Overlay>
      <div className='center'>
        <SignUpEndWrapper>
          <Logo />
          <EndText>
            회원가입이 완료되었습니다!
            <br />
            반려동물과 함께 맞춤 여행을 떠나보세요 &#58;&#41;
          </EndText>

          <BtnBlock>
            <GotoBtn onClick={goHome}>홈으로</GotoBtn>
            <GotoBtn primary onClick={goLogin}>
              로그인
            </GotoBtn>
          </BtnBlock>
        </SignUpEndWrapper>
      </div>
    </Overlay>
  );

  function goHome() {
    dispatch(signupSuccessClose());
  }
};

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.7);

  .center {
    position: absolute;
    top: 50vh;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const SignUpEndWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 52.4rem;
  height: 47.6rem;
  border-radius: 30px;
  border: solid 1px #707070;
  background-color: #ffffff;
`;
const Logo = styled.img.attrs({
  src: '/img/auth/signuplogo.svg',
  alt: 'FitPet',
})`
  display: block;
  width: 14.8rem;
  height: 16.6rem;
`;

const EndText = styled.p`
  margin: 2rem 0 5rem 0;
  font-size: 2.2rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: -0.44px;
  text-align: center;
  color: ${(props) => props.black1_color};
`;

const BtnBlock = styled.div`
  display: flex;
  gap: 3rem;
`;

const GotoBtn = styled.button`
  width: 17.2rem;
  height: 5.2rem;
  font-size: 1.8rem;
  color: ${(props) => props.theme.main_color};
  border-radius: 26px;
  border: none;

  ${(props) =>
    props.primary &&
    css`
      background-color: ${props.theme.main_color};
      color: #fff;
    `}
`;

export default SignUpEnd;
