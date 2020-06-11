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
import {bell} from 'react-icons-kit/fa/bell';
import profile from '../../assets/img/face-3.jpg';
import {plus} from 'react-icons-kit/fa/plus';




class UserNavbarLinks extends Component {
    render() {
        const username = localStorage.getItem("username");
        return (

                <nav className="navbar navbar-inverse" style={{width: '100%'}}>
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><NavLink to="/Dashboard/feed" style={{ color: '#dcddde' }}><Icon size={26} icon={home}/></NavLink></li>
                            <li><NavLink to="/Dashboard/leaderboard" style={{ color: '#dcddde' }}><Icon size={26} icon={trophy}/></NavLink></li>
                            <li><a href="#" style={{ color: '#dcddde' }}><Icon size={26} icon={group}/></a></li>
                            <li><NavLink to="/Dashboard/profile" style={{ color: '#dcddde' }}><Icon size={26} icon={gears}/></NavLink></li>
                            <li><a href="#" style={{ color: '#dcddde' }}><Icon size={26} icon={comments}/></a></li>


                        </ul>

                        </div>
                        <div className="navbar-header justify-content-end">
                            <ul className="nav navbar-nav ">
                                <li><p>6969</p></li>
                                <li><a href="#" style={{ color: '#dcddde'}}><Icon size={26} icon={plus}/></a></li>
                                <li><img src={profile} style={{width: "50%" , float: "right" , paddingRight: "10px"}}/></li>
                                <li><p>Emilia<br/>
                                Level 69</p></li>
                                <li><a href="#" style={{ color: '#dcddde' }}><Icon size={26} icon={bell}/></a></li>
                                <li><NavLink to="/" onClick={this.props.loggingout} style={{ color: '#dcddde' }}><Icon size={26} icon={signOut}/></NavLink></li>
                            </ul>

                        </div>
                     </div>
                </nav>

        );
    }K
}K


export default UserNavbarLinks;
