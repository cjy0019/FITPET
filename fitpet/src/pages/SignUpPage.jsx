import React from 'react';
import { Route } from 'react-router-dom';
import SignUp from '../components/signUp/SignUp';
import SignUpEnd from '../components/signUp/SignUpEnd';

const SignUpPage = () => {
  return (
    <div>
      <Route path='/signUp' component={SignUp} />
      <Route path='/signUpEnd' component={SignUpEnd} />
    </div>
  );
};

export default SignUpPage;
