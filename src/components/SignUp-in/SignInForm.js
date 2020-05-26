import React, { Component } from "react";
import { Link, withRouter} from "react-router-dom";
import {
    FacebookLoginButton,
    InstagramLoginButton,
    GithubLoginButton,
    GoogleLoginButton
} from "react-social-login-buttons";
import { FingerprintSpinner } from 'react-epic-spinners';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/auth';
import GoogleButton from "../Buttons/GoogleButton";
import {} from 'passport-steam';


class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let target = event.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }



    handleSubmit(event) {
        event.preventDefault();

    this.props.onAuth(this.state.username, this.state.password );


    this.props.history.push('/Dashboard');

    window.location.reload();



    }



    render() {

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            )
        }




        return (
            <div className="formCenter">
                {errorMessage}
                {

                    this.props.loading ?

                    <FingerprintSpinner className="loader" size={200}/>

                    :

                    <form className="formFields" onSubmit={this.handleSubmit}>
                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="username">
                                Username
                            </label>
                            <input
                                type="username"
                                id="username"
                                className="formFieldInput"
                                placeholder="Enter your Username"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange}
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
                            />
                        </div>

                        <div className="formField">
                            <button className="formFieldButton">Sign In</button>
                            {" "}
                            <Link to="/sign-up" className="formFieldLink">
                                Create an account
                            </Link>
                        </div>

                        <div className="socialMediaButtons">
                            <GoogleLoginButton onClick={() => alert("Hello")} />

                            <div className="instagramButton">
                                <GithubLoginButton onClick={() => alert("Hello")}/>
                            </div>
                        </div>
                    </form>
                }
            </div>
        );
    }
}

const MapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
};



export default withRouter(connect(MapStateToProps, mapDispatchToProps)(SignInForm));
