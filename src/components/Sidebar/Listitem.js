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
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Badge from "@material-ui/core/Badge";



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
            animation: '$ripple 1.2s infinite ease-in-out',
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

class ListitemFriend extends React.Component {

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
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className="inline"
                                    style={{color: "white"}}
                                >
                                    Level : {this.props.level}

                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>

            {/*<ListItem alignItems="flex-start">*/}
            {/*    <ListItemAvatar>*/}
            {/*        <Avatar alt={this.props.alt} src={this.props.src} variant="square"/>*/}
            {/*    </ListItemAvatar>*/}
            {/*    <ListItemText*/}
            {/*        style={{color: "#dcddde"}}*/}
            {/*        primary={this.props.username}*/}
            {/*        secondary={*/}
            {/*            <React.Fragment>*/}
            {/*                <Typography*/}
            {/*                    component="span"*/}
            {/*                    variant="body2"*/}
            {/*                    className={"inline"}*/}
            {/*                    style={{color: "#dcddde"}}*/}
            {/*                >*/}
            {/*                    Level {this.props.level}*/}
            {/*                </Typography>*/}
            {/*            </React.Fragment>*/}
            {/*        }*/}
            {/*    />*/}
            {/*</ListItem>*/}

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
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className="inline"
                                    style={{color: "white"}}
                                >
                                    Level : {this.props.level}

                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </React.Fragment>
        );
    }
}

export { ListitemFriend, ListitemGuild};
