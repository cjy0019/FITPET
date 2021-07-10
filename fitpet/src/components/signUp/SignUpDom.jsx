import ReactDom from 'react-dom';

const SignUpDom = ({ children }) => {
  const el = document.getElementById('signUpDom');
  return ReactDom.createPortal(children, el);
};

export default SignUpDom;
