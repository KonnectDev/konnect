import React, { Component } from "react";
import { Link } from "react-router-dom";
import Countrycodeoptions from '../../utils/countrycode';
import AsyncSelect from 'react-select/async';

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            birthdate: null,
            firstname: "",
            lastname: "",
            username: "",
            hasAgreed: false,
            countrycode: null,
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let target = event.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;


        this.setState({
            [name]: value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();



        console.log("The form was submitted with the following data:");
        console.log(this.state);
    }

// email: "",
//             password: "",
//             birthdate: null,
//             firstname: "",
//             lastname: "",
//             username: "",
//
//             countrycode: null,



    render() {



        const filterCountrycodes = (inputValue) => {
            return Countrycodeoptions.filter(i =>
                i.label.toLowerCase().includes(inputValue.toLowerCase())
            );
        };

        const promiseOptions = inputValue =>
            new Promise(resolve => {
                setTimeout(() => {
                    resolve(filterCountrycodes(inputValue));
                }, 1000);
            });

        const colourStyles = {
            menu: styles => ({ ...styles, backgroundColor: '#2f3136'})
        }

        return (
            <div className="formCenter">
                <form onSubmit={this.handleSubmit} className="formFields" autoComplete="new-password" autoCorrect="off" autoCapitalize="none" spellCheck="false">
                    <div className="formField">
                        <label className="formFieldLabel" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="formFieldInput"
                            placeholder="Enter your Username"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="formField">
                        <label className="formFieldLabel" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="formFieldInput"
                            placeholder="Enter your password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="formField">
                        <label className="formFieldLabel" htmlFor="firstname">
                            First name
                        </label>
                        <input
                            type="text"
                            id="firstname"
                            className="formFieldInput"
                            placeholder="Enter your first name"
                            name="firstname"
                            value={this.state.firstname}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="formField">
                        <label className="formFieldLabel" htmlFor="lastname">
                            Last name
                        </label>
                        <input
                            type="text"
                            id="lastname"
                            className="formFieldInput"
                            placeholder="Enter your last name"
                            name="lastname"
                            value={this.state.lastname}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="formField">
                        <label className="formFieldLabel" htmlFor="email">
                            E-Mail Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="formFieldInput"
                            placeholder="Enter your email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="formField">
                        <label className="formFieldLabel" htmlFor="birthdate">
                            Birthdate
                        </label>
                        <input
                            type="date"
                            id="birthdate"
                            className="formFieldInput"
                            placeholder="Enter your birthdate"
                            name="birthdate"
                            value={this.state.birthdate}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="formField">
                        <label className="formFieldLabel" htmlFor="countrycode">
                            Countrycode
                        </label>
                        <select onChange={this.handleChange} name="countrycode" id="countrycode" className="formSelectLabel">
                            {Countrycodeoptions.map((country, index) => (
                                <option value={country.value} label={country.label} />
                            ))}
                        </select>


                    </div>
                    <div className="formField">
                        <label className="formFieldCheckboxLabel">
                            <input
                                className="formFieldCheckbox"
                                type="checkbox"
                                name="hasAgreed"
                                value={this.state.hasAgreed}
                                required
                            />{" "}
                            I agree all statements in{" "}
                            <a href="null" className="formFieldTermsLink">
                                terms of service
                            </a>
                        </label>
                    </div>
                    <div className="formField">
                        <button className="formFieldButton">Sign Up</button>{" "}
                        <Link to="/sign-in" className="formFieldLink">
                            I'm already member
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}
export default SignUpForm;
