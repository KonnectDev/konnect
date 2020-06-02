import React from 'react';
import styled from 'styled-components';
import '../assets/css/Feed.scss';


class Feed extends React.Component {
    render() {
        return (
            <div>
                <p>This is a paragraph and I am writing on the home page</p>
                <p>This is another paragraph, hi hey hello whatsup yo</p>
                <p>token: {localStorage.getItem("token")}</p>
                <p>username: {localStorage.getItem("username")}</p>
            </div>
        );
    }
}


export default Feed;
