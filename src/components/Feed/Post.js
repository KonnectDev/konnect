import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {Link} from 'react-router-dom';
import moment from "moment";
import PropTypes from 'prop-types';

// MUI Stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// Icons
import ChatIcon from '@material-ui/icons/Chat';
// Redux
import {connect} from 'react-redux';

const styles = {
    card: {
        position: 'relative',
        display: 'flex',
        marginBottom: 20,
        backgroundColor: '#343a40'
    },
    image: {
        minWidth: 200
    },
    content: {
        padding: 25,
        objectFit: 'cover'
    }
};

class Post extends Component {
    render() {
        const {
            classes,
            post: {
                id,
                user_id,
                guild_id,
                message,
                message_id,
                created_at,
                updated_at,
                likes,
                username,
                img_small,
                comment_count,
                comments
            },
        } = this.props;


        return (
            <Card className={classes.card} variant="outlined">
                <CardMedia
                    image={img_small}
                    title="Profile image"
                    className={classes.image}
                />
                <CardContent className={classes.content}>
                    <Typography
                        variant="h5"
                        component={Link}
                        to={`profile/${username}`}
                        style={{color: 'white'}}
                    >
                        {username}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {moment(created_at).fromNow()}
                    </Typography>
                    <Typography variant="body1">{message}</Typography>
                    <span>{likes} Likes </span>

                    <span> {comment_count} comments</span>
                </CardContent>
            </Card>
        );
    }
}

Post.propTypes = {
    user: PropTypes.object.isRequired,
    scream: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    openDialog: PropTypes.bool
};

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(withStyles(styles)(Post));
