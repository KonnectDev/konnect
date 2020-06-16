import React from "react";
import API from "../utils/API";


class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: "",
        }
    }

    componentDidMount() {
        let user
        if(this.props.match.params.username) {
            user = this.props.match.params.username
        } else {
           user = localStorage.getItem("username")
        }
        API
            .get(`user/` + user)
            .then(response => {
                console.log(response);
                this.setState({user: response.data});
            })
            .catch(err => {
                console.log(err);
            });

    }

    render() {
        return (
            <div>
                <h1>{this.state.user.username}</h1>
                <p>{this.state.user.bio}</p>
            </div>
        );
    }
}


export default ProfilePage;
