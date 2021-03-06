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
import {ListitemFriend} from "../Sidebar/ListitemRequest";
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./Search";
import * as actions from "../../store/actions/inviteFriends";
import {connect} from "react-redux";
import {FingerprintSpinner} from "react-epic-spinners";


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
                this.setState({users: res.data});
            })
            .catch(err => {
                console.log(err);
            });


    }

    searchText = res => {
        this.setState({searchText: res});
    };


    addFriend(id, username, account_id, auth_key) {
        this.props.onInvite(id, username, account_id, auth_key);
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
                                                        <SendIcon
                                                            onClick={() => this.addFriend(user.id, user.username, localStorage.getItem("id"), localStorage.getItem("token"))}/>
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

const MapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInvite: (id, username, account_id, auth_key) => dispatch(actions.addFriend(id, username, account_id, auth_key)),
    }
};


export default connect(MapStateToProps, mapDispatchToProps)(InviteFriends);
