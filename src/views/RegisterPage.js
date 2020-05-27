import React from "react";
import RegisterForm from "../components/Register/RegisterForm";

class RegisterPage extends React.Component {
    render() {
        return (
            <div>
                <RegisterForm {...this.props}/>
            </div>
        );
    }
}

export default RegisterPage;
