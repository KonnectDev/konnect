import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { connect } from 'react-redux';
import Error from "./404";
import * as actions from './store/actions/auth';

import Homepage from "./views/Homepage";
import Dashboard from "./views/Dashboard";

import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import LeaderboardPage from "./views/LeaderboardPage";



class App extends React.Component {

    componentDidMount() {
        this.props.onTryAutoSignup();
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Homepage {...this.props}/>
                    </Route>
                    <Route exact path="/sign-in">
                        <LoginPage {...this.props} />
                    </Route>
                    <Route exact path="/sign-up">
                        <RegisterPage {...this.props}/>
                    </Route>
                    <Route path="/Dashboard" render={props => <Dashboard {...props} />} />
                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
