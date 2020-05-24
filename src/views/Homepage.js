import React from 'react';
import API from "../utils/API"
import "../assets/css/Homepage.css"
import { Link } from "react-router-dom";


class Homepage extends React.Component {
    render() {

    return (
        <div className="App">
            <h1>Homepage</h1>
            {
                this.props.isAuthenticated ?
                    <button>Logout</button>

                :
                    <Link to="/sign-in">Login</Link>

            }
        </div>
    )
    }
}

export default Homepage;
