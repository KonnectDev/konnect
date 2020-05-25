import React from "react";
import { NavLink } from "react-router-dom";

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <NavLink to="/">
                    Logout
                </NavLink>
            </div>
        );
    }

}

export default Dashboard;
