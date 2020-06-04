import React from 'react';
import API from "../utils/API"
import "../assets/css/Homepage.scss"
import {Link, withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';


class Homepage extends React.Component {
    render() {


        return (
            <div className="App">
                {
                    this.props.isAuthenticated ?
                        <div>
                            <Link to="/Dashboard">Open</Link>
                            <button onClick={this.props.logout}>Logout</button>
                        </div>

                        :
                        <Link to="/sign-in">Login</Link>

                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Homepage);
