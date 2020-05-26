import React from "react";
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import SignInForm from "../components/SignUp-in/SignInForm";
import SignUpForm from "../components/SignUp-in/SignUpForm";
import '../assets/css/SignUp-In.css';
import Dashboard from "./Dashboard";
import RegistrationForm from "../components/SignUp-in/SignUpForm";
import Appsvg from "../components/SignUp-in/Appsvg";
import trailer from '../assets/video/trailer.mp4';
import ReactPlayer from 'react-player';


class SignUpInPage extends React.Component {
    render() {
        return (
            <Router basename="/">
                <div className="App">

                       <ReactPlayer
                           className="react-player"
                       url={trailer}
                       playing={true}
                       loop={true}
                       volume={0}
                       width='80%'
                       height='100%'
                       />

                    <div className="appForm">
                        <div className="pageSwitcher">
                            <NavLink
                                to="/sign-in"
                                activeClassName="pageSwitcherItem-active"
                                className="pageSwitcherItem"
                            >
                                Sign In
                            </NavLink>
                            <NavLink
                                exact
                                to="/sign-up"
                                activeClassName="pageSwitcherItem-active"
                                className="pageSwitcherItem"
                            >
                                Sign Up
                            </NavLink>
                        </div>

                        <div className="formTitle">
                            <NavLink
                                to="/sign-in"
                                activeClassName="formTitleLink-active"
                                className="formTitleLink"
                            >
                                Sign In
                            </NavLink>{" "}
                            or{" "}
                            <NavLink
                                exact
                                to="/sign-up"
                                activeClassName="formTitleLink-active"
                                className="formTitleLink"
                            >
                                Sign Up
                            </NavLink>
                        </div>

                        <Route exact path="/sign-up">
                            <SignUpForm {...this.props}/>
                        </Route>
                        <Route exact path="/sign-in">
                            <SignInForm {...this.props}/>
                        </Route>

                    </div>
                </div>
            </Router>
        );
    }
}

export default SignUpInPage;
