import React from "react";
import {Link, NavLink, withRouter, Switch, Route, Redirect} from "react-router-dom";
import UserNavbar from '../components/Navbar/UserNavbar';
import { connect } from "react-redux";
import * as actions from '../store/actions/auth';
import Sidebar from "../components/Sidebar/Sidebar";
import LeaderboardPage from "./LeaderboardPage";
import Error from "../404";
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../assets/img/Konnect-logo-text.svg';
import routes from "../routes";
import FixedPlugin from "../components/FixedPlugin/FixedPlugin";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/animate.min.css";
import "../assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "../assets/css/demo.css";
import "../assets/css/pe-icon-7-stroke.css";
import SettingsPanel from "../components/Settings/SettingsPanel";
import '../assets/css/Dashboard.scss';
import '../assets/css/Dashboard.css';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: image,
            color: "black",
            hasImage: true,
            fixedClasses: "dropdown show-dropdown open"
        };
    }


    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === "/Dashboard") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        render={props => (
                            <prop.component
                                {...props}
                            />
                        )}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };

    getBrandText = path => {
        for (let i = 0; i < routes.length; i++) {
            if (
                this.props.location.pathname.indexOf(
                    routes[i].layout + routes[i].path
                ) !== -1
            ) {
                return routes[i].name;
            }
        }
        return "Home";
    };
    handleImageClick = image => {
        this.setState({ image: image });
    };
    handleColorClick = color => {
        this.setState({ color: color });
    };
    handleHasImage = hasImage => {
        this.setState({ hasImage: hasImage });
    };
    handleFixedClick = () => {
        if (this.state.fixedClasses === "dropdown") {
            this.setState({ fixedClasses: "dropdown show-dropdown open" });
        } else {
            this.setState({ fixedClasses: "dropdown" });
        }
    };



    render() {
        console.log(localStorage.getItem("token"));
        console.log(localStorage.getItem("id"));
        console.log(localStorage.getItem("username"));
        return (
            <div className="wrapper" style={{backgroundColor: "#343a40"}}>
                <Sidebar {...this.props} routes={routes} image={this.state.image}
                         color={this.state.color}
                         hasImage={this.state.hasImage}/>
                <div id="main-panel" className="main-panel" ref="mainPanel">
                    <UserNavbar
                        color={this.state.color}
                        {...this.props}
                        brandText={this.getBrandText(this.props.location.pathname)}
                    />
                    <Switch>
                        <div className="content">
                            {this.getRoutes(routes)}
                        </div>
                        <Redirect from="/Dashboard" to="/Dashboard/feed"/>

                    </Switch>
                    <SettingsPanel/>
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }

};



export default withRouter(connect(null, mapDispatchToProps)(Dashboard));

