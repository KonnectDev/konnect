import React, {Component} from "react";
import {NavLink} from 'react-router-dom';
import {Icon} from 'react-icons-kit';
import {home} from 'react-icons-kit/fa/home';
import {trophy} from 'react-icons-kit/fa/trophy';
import {group} from 'react-icons-kit/fa/group';
import {gears} from 'react-icons-kit/fa/gears';
import {comments} from 'react-icons-kit/fa/comments';
import {signOut} from 'react-icons-kit/fa/signOut';
import {bell} from 'react-icons-kit/fa/bell';
import profile from '../../assets/img/face-3.jpg';
import {plus} from 'react-icons-kit/iconic/plus'
import "../../assets/css/Navbar.scss";
import koin from '../../assets/img/Konnect_koin.svg';


class UserNavbarLinks extends Component {
    render() {
        const username = localStorage.getItem("username");
        return (

            <nav className="navbar navbar-inverse" style={{width: '100%', padding: "0"}}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><NavLink to="/Dashboard/feed" style={{color: '#dcddde'}}><Icon size={26}
                                                                                               icon={home}/></NavLink>
                            </li>
                            <li><NavLink to="/Dashboard/leaderboard" style={{color: '#dcddde'}}><Icon size={26}
                                                                                                      icon={trophy}/></NavLink>
                            </li>
                            <li><a href="#" style={{color: '#dcddde'}}><Icon size={30} icon={group}/></a></li>
                            <li><NavLink to="/Dashboard/profile" style={{color: '#dcddde'}}><Icon size={26}
                                                                                                  icon={gears}/></NavLink>
                            </li>
                            <li><a href="#" style={{color: '#dcddde'}}><Icon size={30} icon={comments}/></a></li>
                            <li><NavLink to="/" onClick={this.props.loggingout} style={{color: '#dcddde'}}><Icon
                                size={26} icon={signOut}/></NavLink></li>


                        </ul>
                    </div>
                    <div className="navbar-header justify-content-end">
                        <ul className="nav navbar-nav ">
                            <li style={{width: "30px", margin: "7px 10px"}}><img src={koin} style={{width: "100%"}}/>
                            </li>
                            <li><p style={{
                                color: '#dcddde',
                                fontSize: "20px",
                                lineHeight: "45px",
                                margin: "0",
                                padding: "0"
                            }}>1234</p></li>
                            <li><a href="#" style={{color: '#dcddde', fontSize: "26px"}}><Icon size={22}
                                                                                               icon={plus}/></a></li>
                            <li style={{width: "45px", margin: "0px 5px"}}><img src={profile} style={{width: "100%"}}/>
                            </li>
                            <li>
                                <span style={{display: "block", fontSize: "14px", color: "#dcddde"}}>Obama Obama</span>
                                <span style={{display: "block", fontSize: "14px", color: "#dcddde"}}>Lvl 50</span>
                            </li>
                            <li><a href="#" style={{color: '#dcddde', fontSize: "26px"}}><Icon size={22}
                                                                                               icon={bell}/></a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}


export default UserNavbarLinks;
