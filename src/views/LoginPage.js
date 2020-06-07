import React from "react";
import LoginForm from "../components/Login/LoginForm";

class LoginPage extends React.Component {
    render() {
        return (
            <div>
                <LoginForm {...this.props}/>
            </div>
        );
    }
}

export default LoginPage;
