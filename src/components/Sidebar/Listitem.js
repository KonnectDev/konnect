import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import '../../assets/css/Sidebar.scss';
import {makeStyles} from "@material-ui/core/styles";




class ListitemFriend extends React.Component {

    render() {
        return (
            <React.Fragment>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={this.props.alt} src={this.props.src} variant="square"/>
                </ListItemAvatar>
                <ListItemText
                    style={{color: "white"}}
                    primary={this.props.username}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={"inline"}
                                style={{color: "white"}}
                            >
                                Level {this.props.level}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
                <Divider variant="inset" component="li" color="white" classes={{root: {backgroundColor: 'white'}}}/>
            </React.Fragment>
        );
    }
}

class ListitemGuild extends React.Component {
    render() {

        return (
            <React.Fragment>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt={this.props.alt} src={this.props.src} variant="square"/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={this.props.username}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={"inline"}
                                    color="textPrimary"
                                >
                                    Rank {this.props.rank}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li"/>
            </React.Fragment>
        );
    }
}

export { ListitemFriend, ListitemGuild};
