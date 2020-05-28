import React from 'react';
import List from '@material-ui/core/List';
import API from '../../utils/API';
import '../../assets/css/Sidebar.scss';
import {ListitemFriend , ListitemGuild} from "./Listitem";
import Search from "./Search";
import add from "../../assets/img/person_add.svg"
import Sidebar from "react-sidebar";


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


class ReactSidebar extends React.Component {
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
            <div>
            <Sidebar
                docked={true}
                styles={{ sidebar: { background: "#36393f"}}}
                children={
                    <h1>hoi</h1>
                }
                sidebar={


                    <List className={"root"}>
                        <div className="Online"><p>Friends Online ({this.state.friends.length})</p></div>
                        <div>
                            <button><img src={add}/></button>
                        </div>
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

            }/>

            </div>
        );
    }
}

export default ReactSidebar;


