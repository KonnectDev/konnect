import React from "react";
import SocialLogin from 'react-social-login';
import {
    GoogleLoginButton
} from "react-social-login-buttons";
class GoogleButton extends React.Component {

    render() {
        return (
            <GoogleLoginButton onClick={this.props.triggerLogin} {...this.props}>

            </GoogleLoginButton>
        );
    }
}

export default SocialLogin(GoogleButton);
