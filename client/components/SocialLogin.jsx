import React from "react";
import { connect } from "react-redux";

import { FacebookLoginButton } from "react-social-login-buttons";

import SocialButton from "./SocialButton";
import { facebookLogin } from "../actions/login";

class SocialLogin extends React.Component {
  constructor() {
    super();
    this.handleSocialLogin = this.handleSocialLogin.bind(this);
  }

  handleSocialLogin(user) {
    console.log(user);
    let fbuser = {
      user_name: user.profile.firstName,
      iat: "",
      exp: user.token.expiresAt
    };
    console.log("social", fbuser);
    console.log(new Date());
    this.props.facebook(fbuser);
  }

  handleSocialLoginFailure = err => {
    console.error(err);
  };

  render() {
    return (
      <div>
        <SocialButton
          provider="facebook"
          appId="487940821612033"
          onLoginSuccess={this.handleSocialLogin}
          onLoginFailure={this.handleSocialLoginFailure}
        >
          <FacebookLoginButton />
        </SocialButton>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    facebook: fbuser => dispatch(facebookLogin(fbuser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialLogin);
