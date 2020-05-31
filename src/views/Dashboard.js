import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import { connect } from "react-redux";
import * as actions from '../store/actions/auth';
import ReactSidebar from "../components/Sidebar/Sidebar";
import '../assets/css/Dashboard.scss';



class Dashboard extends React.Component {


    render() {
        console.log(localStorage.getItem("token"));
        return (
            <div>
                <ReactSidebar {...this.props}/>
            </div>
        );
    }
}



export default withRouter(connect(null, null)(Dashboard));

