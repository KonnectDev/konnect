import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "antd/es/form";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import UserNavbarLinks from "./UserNavbarLinks";
import * as actions from "../../store/actions/auth";
import withRouter from "react-router-dom/es/withRouter";
import {connect} from "react-redux";
import "../../assets/css/navbar.scss";



class UserNavbar extends Component {

    constructor(props) {
        super(props);
        this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
        this.state = {
            sidebarExists: false
        };
    }
    mobileSidebarToggle(e) {
        if (this.state.sidebarExists === false) {
            this.setState({
                sidebarExists: true
            });
        }
        e.preventDefault();
        document.documentElement.classList.toggle("nav-open");
        var node = document.createElement("div");
        node.id = "bodyClick";
        node.onclick = function() {
            this.parentElement.removeChild(this);
            document.documentElement.classList.toggle("nav-open");
        };
        document.body.appendChild(node);
    }

    render() {
        return (
            <Navbar fluid bg="dark">
                <Navbar.Toggle onClick={this.mobileSidebarToggle} />
                <Navbar.Collapse>
                    <UserNavbarLinks loggingout={this.props.logout}/>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
};

export default withRouter(connect(null, mapDispatchToProps)(UserNavbar));
