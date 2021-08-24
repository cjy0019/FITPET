// Modal.js
import { createPortal } from 'react-dom';
import styled from 'styled-components';
// We get hold of the div with the id modal that we have created in index.html

const Modal = (props) => {
  // modal id값의 DOM을 취득한다.
  const modalRoot = document.getElementById('modal');

  return createPortal(<Overlay>{props.children}</Overlay>, modalRoot);
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999999;
  background-color: rgba(0, 0, 0, 0.7);
  box-sizing: inherit;
`;

export default Modal;
