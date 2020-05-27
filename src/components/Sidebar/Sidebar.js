import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import API from '../../utils/API';
import '../../assets/css/Sidebar.scss';
import Listitem from "./Listitem";
import Search from "./Search";
import add from "../../assets/img/person_add.svg"


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
    }
];


class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            friends: [],
            searchText: ''
        };
    }

    componentDidMount() {

        this.setState({friends: Friends});

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
                <List className={"root"}>
                    <div className="Online"><p>Friends Online ({this.state.friends.length})</p></div>
                    <div><button><img src={add}/></button></div><p className="Invite">Invite</p>
                    <Search searchText={this.searchText}/>
                    {

                        this.state.friends.filter(friend => (friend.username.includes(this.state.searchText)))
                            .map((friend, index) => (
                                <Listitem
                                alt={friend.username}
                                src={friend.image}
                                username={friend.username}
                                level={friend.level}
                                />
                            ))
                    }
                </List>
            </div>

        );
    }
}

export default Sidebar;


