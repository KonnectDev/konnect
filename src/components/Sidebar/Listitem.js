import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import '../../assets/css/Sidebar.scss';

class ListitemFriend extends React.Component {
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
                                Level {this.props.level}
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
