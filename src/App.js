import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { connect } from 'react-redux';
import Error from "./404";
import * as actions from './store/actions/auth';

import Homepage from "./views/Homepage";
import Dashboard from "./views/Dashboard";
import SignUpInPage from "./views/SignUp-InPage";
import LoginPage from "./views/LoginPage";



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
                    <Route exact path="/Dashboard">
                        <Dashboard {...this.props} />
                    </Route>
                    <Route exact path="/sign-in">
                        <LoginPage {...this.props} />
                    </Route>
                    <Route exact path="/sign-up">
                        <SignUpInPage />
                    </Route>
                    <Route exact path="/Dashboard/test">
                        <h1>test</h1>
                    </Route>
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
