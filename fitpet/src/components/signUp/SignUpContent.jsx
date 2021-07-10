import React, { Component } from 'react';

export class SignUpContent extends Component {
  render() {
    return (
      <div>
        회원가입
        <button type='button' onClick={this.props.onClose}>
          close
        </button>
      </div>
    );
  }
}

export default SignUpContent;
