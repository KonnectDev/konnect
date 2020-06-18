import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import '../../assets/css/Sidebar.scss';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Switch from "@material-ui/core/Switch";
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';
import API from "../../utils/API";
import * as actions from "../../store/actions/acceptDeclineFriend";
import {connect} from "react-redux";
import {FingerprintSpinner} from "react-epic-spinners";


const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);


class ListitemRequest extends React.Component {

    acceptFriend(id, username, account_id, auth_key) {
        this.props.onAccept(id, username, account_id, auth_key);
    }

    declineFriend(id, username, account_id, auth_key) {
        console.log(id, auth_key, username, account_id);
        API.put(`user/friend/request/decline?user_id=${account_id}&auth_key=${auth_key}&friend_id=${id}`)
            .then(res => {
                console.log(res.data.user_id, res.data.friend_id, res.data.id)
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (

            <React.Fragment>

                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <StyledBadge
                                    overlap="circle"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    variant="dot"
                                >
                                    <Avatar alt="" src={this.props.src}/>
                                </StyledBadge>
                            </ListItemAvatar>
                            <ListItemText
                                style={{color: "#dcddde"}}
                                primary={this.props.username}
                                secondary={
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        color="textPrimary"
                                    >
                                        <button className="button"
                                                onClick={() => this.acceptFriend(this.props.id, this.props.username, localStorage.getItem("id"), localStorage.getItem("token"))}>
                                            <CheckIcon fontSize="small" style={{color: "green"}}/>
                                        </button>
                                        <button className="button"
                                                onClick={() => this.declineFriend(this.props.id, this.props.username, localStorage.getItem("id"), localStorage.getItem("token"))}>
                                            <ClearIcon fontSize="small" style={{color: "red"}}/>
                                        </button>
                                    </Typography>
                                }
                            />
                        </ListItem>
            </React.Fragment>
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
        onAccept: (id, username, account_id, auth_key) => dispatch(actions.acceptFriend(id, username, account_id, auth_key)),
    }
};


export default connect(MapStateToProps, mapDispatchToProps)(ListitemRequest);
