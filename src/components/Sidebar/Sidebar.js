import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import API from "../../utils/API";
import add from "../../assets/img/person_add.svg";
import Search from "./Search";
import {ListitemFriend, ListitemGuild} from "./Listitem";
import List from "@material-ui/core/List";


const Friends = [
    {
        key: "Henk",
        value: "Henk",
        username: "Henk",
        image: "https://unsplash.com/s/photos/person",
        level: 10
    },
    {
        username: "Jan",
        image: "https://unsplash.com/s/photos/person/",
        level: 58
    },
    {
        username: "Peter",
        image: "https://unsplash.com/s/photos/person",
        level: 560
    },
    {
        username: "Sandra",
        image: "https://unsplash.com/s/photos/person/",
        level: 1
    },

];

const Guild = [

    {

        username: "Superstars",
        image: "https://unsplash.com/s/photos/person",
        rank: 25
    },
    {
        username: "Idk",
        image: "https://unsplash.com/s/photos/person/",
        rank: 45
    },
    {
        username: "JumpSquad",
        image: "https://unsplash.com/s/photos/person",
        rank: 89
    }

]

const StyledSideNav = styled.div`
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 200px;     /* Set the width of the sidebar */
    z-index: 0;      /* Stay on top of everything */
    top: 3.4em;      /* Stay at the top */
    background-color: #222; /* Black */
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 10px;
    color: white;
`;

export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            friends: [],
            guild: [],
            searchText: '',
        };

    }




    componentDidMount() {

        this.setState({friends: Friends});
        this.setState({guild: Guild});

        API
            .get("")
            .then(response => {
                console.log(response);
                this.setState({friends: response.data});
                console.log(this.state.friends)
            })
            .catch(err => {
                console.log(err);
            })
    }


    searchText = res => {
        this.setState({searchText: res});
    };


    render() {
        return (
            <StyledSideNav>
                <div>
                    <List>
                        <div className="Online"><p>Friends Online ({this.state.friends.length})</p></div>
                        <p className="Invite">Invite</p>
                        <Search searchText={this.searchText}/>
                        {

                            this.state.friends.filter(friend => (friend.username.toLowerCase().includes(this.state.searchText.toLowerCase())))
                                .map((friend, index) => (
                                    <ListitemFriend
                                        alt={friend.username}
                                        src={friend.image}
                                        username={friend.username}
                                        level={friend.level}
                                    />
                                ))
                        }

                        <div className="Online"><p>Guild Members ({this.state.guild.length})</p></div>
                        <Search searchText={this.searchText}/>
                        {

                            this.state.guild.filter(guild => (guild.username.toLowerCase().includes(this.state.searchText.toLowerCase())))
                                .map((guild, index) => (
                                    <ListitemGuild
                                        alt={guild.username}
                                        src={guild.image}
                                        username={guild.username}
                                        rank={guild.rank}
                                    />
                                ))
                        }
                    </List>
                </div>
            </StyledSideNav>
        );
    }
}
