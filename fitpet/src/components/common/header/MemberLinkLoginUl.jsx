import React from 'react';
import styled from 'styled-components';
import MemberLinkLi from './MemberLinkLi';

//로그인 모달
const MemberLinkLoginUl = ({ showLogin }) => {
  return (
    <MemberWrapper>
      <MemberLinkLi showLogin={showLogin} />
    </MemberWrapper>
  );
};

// const MemberLinkLoginUl = ({ showSignUp, showLogin }) => {
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

export default MemberLinkLoginUl;
