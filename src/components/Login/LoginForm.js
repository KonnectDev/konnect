import React from "react";
import Konnectlogo from '../../assets/img/Konnect-logo.svg';
import Konnectlogotext from '../../assets/img/Konnect-logo-text.svg';
import '../../assets/css/LoginRegisterForm.scss';
import {FingerprintSpinner} from "react-epic-spinners";
import {connect} from 'react-redux';
import * as actions from '../../store/actions/auth';
import {withRouter, Link} from "react-router-dom";
import $ from 'jquery';
import images from '../../utils/images';


class LoginForm extends React.Component {
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

        this.props.onAuth(this.state.username, this.state.password);

        const token = localStorage.getItem("token");
        const id = localStorage.getItem("id");
        const username = localStorage.getItem("username");


        if (token && id && username === null){
            this.props.history.push("/sign-in")
        }
        else {
            this.props.history.push("/Dashboard")
        }



    }

    componentDidMount() {

        $('#container').append('<style>#container, .acceptContainer:before, #logoContainer:before {background: url(' + images[Math.floor(Math.random() * images.length)] + ') center fixed }');
    }


    render() {




        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            )
        }


        return (

            <div id="container">


                {

                    this.props.loading ?

                        <FingerprintSpinner className="loader" size={200}/>

                        :

                        <div id="inviteContainer">
                            <div className="logoContainer"><img className="logo" src={Konnectlogo}/><img
                                className="text" src={Konnectlogotext}/></div>
                            <div className="acceptContainer">
                                <form onSubmit={this.handleSubmit}>
                                    <h1>WELCOME BACK!</h1>
                                    <div className="formContainer">
                                        <div className="formDiv">
                                            <p>USERNAME</p>
                                            <input
                                                type="text"
                                                id="username"
                                                name="username"
                                                value={this.state.username}
                                                onChange={this.handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="formDiv">
                                            <p>PASSWORD</p>
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                value={this.state.password}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <a className="forgotPas" href="#">FORGOT
                                                YOUR PASSWORD</a>
                                        </div>
                                        <div className="formDiv">
                                            <button className="acceptBtn" type="submit">Login</button>
                                            <span className="register">Need an account?<Link to="/sign-up">Register</Link></span>
                                            {errorMessage}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
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


export default withRouter(connect(MapStateToProps, mapDispatchToProps)(LoginForm));
