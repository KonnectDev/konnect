import React from "react";
import LoginForm from "../components/Login/LoginForm";
import * as actions from "../store/actions/auth";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class LoginPage extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.isAuthenticated ?
                        this.props.history.push('/Dashboard')

                        :
                        <LoginForm {...this.props}/>

                }
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
};

export default withRouter(connect(null, mapDispatchToProps)(LoginPage));
