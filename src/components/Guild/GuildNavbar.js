import React from "react";
import "../../assets/css/GuildNavbar.css";


class guildNavbar extends React.Component {
    render() {
        return (
            <div className="topnav">
                <a className="active" href="#home">Guild</a>
                <a href="#contact">Settings</a>
                <a href="#about">Members</a>
                <a href="#leaderboards">Leaderboards</a>
            </div>
        );
    }
}


export default guildNavbar;
