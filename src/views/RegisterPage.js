import React from "react";
import ReactDOM from 'react-dom'
import { FormProvider } from 'react-advanced-form';

import RegistrationForm from "../components/RegistrationForm";

class RegisterPage extends React.Component {
    render() {
        return (
            <div>
                <RegistrationForm />
            </div>
        );
    }
}

export default RegisterPage;
