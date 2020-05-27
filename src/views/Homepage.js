import React from 'react';
import API from "../utils/API"
import "../assets/css/Homepage.scss"
import { Link } from "react-router-dom";


class Homepage extends React.Component {
    render() {

    return (
        <div className="App">
            <h1>Homepage</h1>
            {
                this.props.isAuthenticated ?
                    <Link to="/Dashboard">Open</Link>

                :
                    <Link to="/sign-in">Login</Link>

            }
        </div>
    )
    }
}

export default Homepage;
