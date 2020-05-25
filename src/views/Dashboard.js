import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <h1>Dashboard</h1>
                <NavLink to="/">
                    Logout
                </NavLink>
            </div>
        );
    }
}

export default Dashboard;
