import React from 'react';
import API from "../utils/API"
import "../assets/css/Homepage.scss"
import {Link, withRouter} from "react-router-dom";
import { connect} from 'react-redux';
import * as actions from '../store/actions/auth';
import {FingerprintSpinner} from "react-epic-spinners";


class Homepage extends React.Component {
    render() {


        return (
            <div className="App">
                <h1>Homepage</h1>
                {
                    this.props.isAuthenticated ?

                        <FingerprintSpinner className="loader" size={800}/>
                        &&
                        setTimeout(() => {
                            this.props.history.push("/Dashboard")
                        }, 3000)


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

export default withRouter(connect(null, mapDispatchToProps)(Homepage));
