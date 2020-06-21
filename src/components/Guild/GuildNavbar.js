import React from "react";
import "../../assets/css/GuildNavbar.css";
import {NavLink} from "react-router-dom";

class guildNavbar extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink className="active" to="/Dashboard/guild/feed">Guild</NavLink>
                <NavLink to="/Dashboard/guild/settings">Settings</NavLink>
                <NavLink to="/Dashboard/guild/members">Members</NavLink>
                <NavLink to="/Dashboard/guild/leaderboards">Leaderboards</NavLink>
            </div>
        );
    }
}


export default guildNavbar;
