// 회원가입
import React, { Component } from 'react';
import SignUpDom from '../components/signUp/SignUpDom';
import SignUpContent from '../components/signUp/SignUpContent';

class SignUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenSignUp: false,
    };
    this.openSignUp = this.openSignUp.bind(this);
    this.closeSignUp = this.closeSignUp.bind(this);
  }

  // 회원가입 팝업 창 열기
  openSignUp() {
    this.setState({
      isOpenSignUp: true,
    });
  }

  // 회원가입 팝업 창 닫기
  closeSignUp() {
    this.setState({
      isOpenSignUp: false,
    });
  }

  render() {
    return (
      <div>
        <div>
          <button type='button' id='signUpDom' onClick={this.openSignUp}>
            {' '}
            회원가입{' '}
          </button>
          {this.state.isOpenSignUp && (
            <SignUpDom>
              <SignUpContent onClose={this.closeSignUp} />
            </SignUpDom>
          )}
        </div>
      </div>
    );
  }
}

export default SignUpPage;
