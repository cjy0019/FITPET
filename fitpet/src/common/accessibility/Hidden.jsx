import styled from 'styled-components';

// 웹 접근성을 위한 a11y-hidden style
export const A11yHidden = styled.h1`
  overflow: hidden;
  position: absolute;
  clip: rect(0 0 0 0); /* IE 6,7 */
  clip: rect(0, 0, 0, 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  &:focus {
    overflow: visible;
    position: static;
    clip: auto;
    width: auto;
    height: auto;
    margin: 0;
  }
`;
