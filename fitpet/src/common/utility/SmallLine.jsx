import styled, { css } from 'styled-components';

const SmallLine = styled.div`
  border-bottom: solid 0.5px #979797;

  ${({ margin }) =>
    margin &&
    css`
      margin-top: 2.8rem;
    `}
`;

export default SmallLine;
