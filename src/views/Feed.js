import React from 'react';
import 'react-activity-feed/dist/index.css';
import axios from 'axios';
import Post from '../components/Feed/Post';


class Feed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: null
        }
    }

    componentDidMount() {
        const userid = localStorage.getItem("id");
        const auth_key = localStorage.getItem("token");
        axios.get(`http://35.187.9.64/public/api/posts?user_id=${userid}&auth_key=${auth_key}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    posts: res.data
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        let recentPostsMarkup = this.state.posts ? (
            this.state.posts.map(post => <Post post={post}/>)
        ) : <p>Loading ...</p>;
        return (
            <div>
                {recentPostsMarkup}
            </div>
        );
    }
}

export default Feed;
