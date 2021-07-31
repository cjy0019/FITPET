// Modal.js
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
// We get hold of the div with the id modal that we have created in index.html

const Modal = (props) => {
  const modalRoot = document.getElementById('modal');
  const element = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(element);

    return () => {
      modalRoot.appendChild(element);
    };
  });

  return createPortal(props.children, element);
};

export default Modal;
