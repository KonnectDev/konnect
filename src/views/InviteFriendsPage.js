import React from "react";
import '../assets/css/invite.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import IconButton from "@material-ui/core/IconButton";
import SendIcon from '@material-ui/icons/Send';
import API from "../utils/API";
import {ListitemFriend} from "../components/Sidebar/Listitem";

const users = [
    {
        username: 'henk',
        lvl: 50,
        koins: 68,
        img: ''
    },
    {
        username: 'jan',
        lvl: 56,
        koins: 90,
        img: ''
    },

];


class InviteFriendsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            searchText: ''
        };
    }

    componentDidMount(): void {
        this.setState({users: users});
        API
            .get('users/j')
            .then(res => {
                console.log(res);
                this.setState({users: res.data})
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div>
                <h1>hoi</h1>
                <List dense>

                    {
                        this.state.users.filter(user => (user.username.toLowerCase().includes(this.state.searchText.toLowerCase())))
                            .map((user, index) => (

                                <ListItem key={'value'} button>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={user.image}
                                            src={user.image}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText id={user.username} primary={user.username}/>
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="comments">
                                            <SendIcon/>
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>

                            ))
                    }




                </List>
            </div>
        );
    }
}

export default InviteFriendsPage;
