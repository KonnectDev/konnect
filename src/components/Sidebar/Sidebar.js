import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import API from "../../utils/API";
import add from "../../assets/img/person_add.svg";
import Search from "./Search";
import {ListitemFriend, ListitemGuild} from "./Listitem";
import List from "@material-ui/core/List";
import SearchGuild from "./SearchGuild";


const Friends = [
    {
        username: "Henk",
        image: "https://picsum.photos/200/300",
        level: 10
    },
    {
        username: "Jan",
        image: "https://picsum.photos/200/300",
        level: 58
    },
    {
        username: "Peter",
        image: "https://picsum.photos/200/300",
        level: 560
    },
    {
        username: "Sandra",
        image: "https://picsum.photos/200/300",
        level: 1
    },


];

const Guild = [

    {

        username: "Superstars",
        image: "https://picsum.photos/200/300",
        rank: 25
    },
    {
        username: "Idk",
        image: "https://picsum.photos/200/300",
        rank: 45
    },
    {
        username: "JumpSquad",
        image: "https://picsum.photos/200/300",
        rank: 89
    },

    ]

const StyledSideNav = styled.div`

`;

export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            friends: [],
            guild: [],
            searchText: '',
            searchGuild: '',
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

    searchGuild = res => {
        this.setState({searchGuild: res});
    };


    render() {
        return (
                <div className={"sidebar"}>
                        <div className="Online"><p>Friends Online ({this.state.friends.length})</p></div>
                        <p className="Invite">Invite</p>
                        <Search searchText={this.searchText}/>
                    <List>
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
                    </List>

                        <div className="Online"><p>Guild Members ({this.state.guild.length})</p></div>
                        <Search searchText={this.searchGuild}/>
                        <List>
                        {

                            this.state.guild.filter(guild => (guild.username.toLowerCase().includes(this.state.searchGuild.toLowerCase())))
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

        );
    }
}
