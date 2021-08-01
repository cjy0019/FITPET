import React from 'react';
import styled from 'styled-components';
import MemberLinkLi from './MemberLinkLi';

// 회원가입 모달
const MemberLinkSignUpUI = ({ showSignUp }) => {
  return (
    <MemberWrapper>
      <MemberLinkLi showSignUp={showSignUp} />
    </MemberWrapper>
  );
};

// const MemberLinkSignUpUI = ({ showSignUp, showLogin }) => {
//   console.log('ch' + showSignUp);

//   return (
//     <MemberWrapper>
//       <MemberLinkLi showSignUp={showSignUp} />
//     </MemberWrapper>
//   );
// };

const MemberWrapper = styled.ul`
  display: flex;
`;

export default MemberLinkSignUpUI;
