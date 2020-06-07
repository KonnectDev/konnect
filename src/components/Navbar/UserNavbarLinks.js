import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, DropdownItem} from "react-bootstrap";
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SettingsIcon from '@material-ui/icons/Settings';
import ChatIcon from '@material-ui/icons/Chat';
import { FaTrophy } from 'react-icons/fa';


class UserNavbarLinks extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        </div>
                        <ul className="nav navbar-nav">
                            <li><a href="#"><HomeIcon></HomeIcon></a></li>
                            <li><a href="#"><FaTrophy /></a></li>
                            <li><a href="#"><PeopleAltIcon></PeopleAltIcon></a></li>
                            <li><a href="#"><SettingsIcon></SettingsIcon></a></li>
                            <li><a href="#"><ChatIcon></ChatIcon></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}


export default UserNavbarLinks;
