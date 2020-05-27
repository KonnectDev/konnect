import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import { connect } from "react-redux";
import * as actions from '../store/actions/auth';
import Sidebar from "../components/Sidebar/Sidebar";
import '../assets/css/Dashboard.scss';



class Dashboard extends React.Component {


    render() {
        console.log(localStorage.getItem("token"));
        return (
            <div>

                <h1></h1>
                <NavLink to="/sign-in" className="Logout">
                    Logout
                </NavLink>
                <Sidebar />
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

