import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import { NavItem, Nav, NavDropdown, DropdownItem} from "react-bootstrap";
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SettingsIcon from '@material-ui/icons/Settings';
import ChatIcon from '@material-ui/icons/Chat';
import { Icon } from 'react-icons-kit';
import {home} from 'react-icons-kit/fa/home';
import {trophy} from 'react-icons-kit/fa/trophy';
import {group} from 'react-icons-kit/fa/group';
import {gears} from 'react-icons-kit/fa/gears';
import {comments} from 'react-icons-kit/fa/comments';
import {signOut} from 'react-icons-kit/fa/signOut';



class UserNavbarLinks extends Component {
    render() {
        const username = localStorage.getItem("username");
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><NavLink to="/Dashboard/feed" style={{ color: '#dcddde' }}><Icon size={32} icon={home}/></NavLink></li>
                            <li><NavLink to="/Dashboard/leaderboard" style={{ color: '#dcddde' }}><Icon size={32} icon={trophy}/></NavLink></li>
                            <li><a href="#" style={{ color: '#dcddde' }}><Icon size={32} icon={group}/></a></li>
                            <li><NavLink to="/Dashboard/profile" style={{ color: '#dcddde' }}><Icon size={32} icon={gears}/></NavLink></li>
                            <li><a href="#" style={{ color: '#dcddde' }}><Icon size={32} icon={comments}/></a></li>
                            <li><NavLink to="/" onClick={this.props.loggingout} style={{ color: '#dcddde' }}><Icon size={32} icon={signOut}/></NavLink></li>
                            <li style={{color : '#dcddde'}}>Welcome {username}</li>
                        </ul>
                        </div>
                     </div>
                </nav>
            </div>
        );
    }
}


export default UserNavbarLinks;
