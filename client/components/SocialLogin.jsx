import React from "react";
import { FacebookLoginButton } from "react-social-login-buttons";

import SocialButton from "./SocialButton";

const handleSocialLogin = user => {
  console.log(user);
};

const handleSocialLoginFailure = err => {
  console.error(err);
};

export default function SocialLogin() {
  return (
    <div>
      <SocialButton
        provider="facebook"
        appId="487940821612033"
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      >
        <FacebookLoginButton />
      </SocialButton>
    </div>
  );
}

<div
  class="fb-login-button"
  data-size="large"
  data-button-type="continue_with"
  data-auto-logout-link="true"
  data-use-continue-as="true"
/>;
