import React from "react";
import { Form, Field} from 'react-advanced-form';
import { Input, Button } from 'react-advanced-form-addons';

class RegistrationForm extends React.Component {
    registerUser = ({ serialized, fields, form }) => {
        return fetch('http://knect.nl/api', {
            body: JSON.stringify(serialized)
        })
    }

    render() {
        return (
            <Form
                action={this.registerUser}
                onSubmitStart={this.props.onSubmitStart} auro>
                <Field.Group name="primaryInfo">
                    <Input
                        name="email"
                        type="email"
                        label="E-mail"
                        required />
                </Field.Group>

                <Input
                    name="password"
                    type="password"
                    label="Password"
                    required />
                <Input
                    name="password"
                    type="password"
                    label="Confirm password"
                    required
                    skip />

                <Field.Group name="primaryInfo">
                    <Input
                        name="firstName"
                        label="First name"
                        required={({ get }) => {
                            return !!get(['primaryInfo', 'lastName', 'value'])
                        }} />
                    <Input
                        name="lastName"
                        label="Last name"
                        required={({ get }) => {
                            return !!get(['primaryInfo', 'firstName', 'value'])
                        }} />
                </Field.Group>

                <Button primary>Register</Button>
            </Form>
        )
    }
}

export default RegistrationForm;
