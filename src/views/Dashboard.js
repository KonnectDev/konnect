import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import { connect } from "react-redux";
import * as actions from '../store/actions/auth';



class Dashboard extends React.Component {


    render() {
        return (
            <div>
                <Navbar/>
                <h1>Dashboard</h1>
                <NavLink to="/sign-in" isActive={this.props.logout}>
                    Logout
                </NavLink>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(actions.logout());
        }
    }
};

export default withRouter(connect(null, mapDispatchToProps)(Dashboard));

