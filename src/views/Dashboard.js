import React from "react";
import { Link, NavLink, withRouter, Switch, BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from '../components/Navbar/NavigationBar';
import { connect } from "react-redux";
import * as actions from '../store/actions/auth';
import '../assets/css/Dashboard.scss';
import Sidebar from "../components/Sidebar/Sidebar";
import Feed from "./Feed";
import Leaderboard from "./Leaderboard";
import Error from "../404";
import 'bootstrap/dist/css/bootstrap.min.css';





class Dashboard extends React.Component {



    render() {
        console.log(localStorage.getItem("token"));
        return (
            <Router>
                <NavigationBar />

                <Sidebar />
                <div className={"content"}>
                <Switch>
                    <Route exact path="/Dashboard/" component={Feed} {...this.props}/>
                    <Route exact path="/Dashboard/Leaderboard/" component={Leaderboard} />
                    <Route component={Error}/>
                </Switch>
                </div>
            </Router>

        )
    }
}



export default withRouter(connect(null, null)(Dashboard));

