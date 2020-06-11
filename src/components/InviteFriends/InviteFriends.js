import React from "react";
import '../../assets/css/invite.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import IconButton from "@material-ui/core/IconButton";
import SendIcon from '@material-ui/icons/Send';
import API from "../../utils/API";
import {ListitemFriend} from "../../components/Sidebar/Listitem";
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./Search";

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


class InviteFriends extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            searchText: ''
        };

    }

    componentDidMount() {


        API.get(`users`)
            .then(res => {
                console.log(res);
                this.setState({users: res.data});
                console.log(this.state.friends)
            })
            .catch(err => {
                console.log(err);
            });
    }

    searchText = res => {
        this.setState({searchText: res});
    };


    addFriend(id, username, account_id, auth_key) {
        API.put(`user/friend/add?user_id=${account_id}&auth_key=${auth_key}&friend_id=${id}`)
            .then(res => {
                console.log(res.data.user_id, res.data.friend_id, res.data.id)
            })
            .catch(err => {
                console.log(err);
            });
    }


    render() {
        return (
            <div className="invite">
                <List dense>
                    <Search searchText={this.searchText}/>
                    {

                        this.state.searchText === '' ?
                            <div/>


                            :
                            this.state.users
                                .filter(user => (user.username.toLowerCase().includes(this.state.searchText.toLowerCase())))
                                .map((user, index) => (

                                    <ListItem key={'value'} button>
                                        <ListItemAvatar>
                                            <Avatar
                                                alt={user.img_small}
                                                src={user.img_small}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText id={user.username} primary={user.username}/>
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="comments">
                                                <SendIcon onClick={() => this.addFriend(user.id, user.username, localStorage.getItem("id"), localStorage.getItem("token"))}/>
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

export default InviteFriends;
