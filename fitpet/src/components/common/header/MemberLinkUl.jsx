import React from 'react';
import styled from 'styled-components';
import MemberLinkLi from './MemberLinkLi';

// 로그인 모달
// const MemberLinkUl = ({ showLogin }) => {
//   return (
//     <MemberWrapper>
//       <MemberLinkLi showLogin={showLogin} />
//     </MemberWrapper>
//   );
// };
// 회원가입 모달
const MemberLinkUl = ({ showSignUp }) => {
  return (
    <MemberWrapper>
      <MemberLinkLi showSignUp={showSignUp} />
    </MemberWrapper>
  );
};

// const MemberLinkUl = ({ children }) => {
//   console.log('ch' + children);
//   return (
//     <MemberWrapper>
//       <MemberLinkLi children={children} />
//     </MemberWrapper>
//   );
// };

const MemberWrapper = styled.ul`
  display: flex;
`;

export default MemberLinkUl;
