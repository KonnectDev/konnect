import React from "react";
import API from "../utils/API";
import "../assets/css/ProfilePage.scss";


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
            <div className="gridContainerProfile">
                <div className="gridChildUsername"><h1>{this.state.user.username}</h1></div>
                <div className="gridChildFirstname"><p>{this.state.user.firstname}</p></div>
                <div className="gridChildLastname"><p>{this.state.user.lastname}</p></div>
                <div className="gridChildBio"><p>{this.state.user.bio}</p></div>
                <div className="gridChildImg"><img src={this.state.user.img_medium}/></div>
                <div className="gridChildLevel"><p>Level: {this.state.user.level}</p></div>
                <div className="gridChildKoins"><p>Koins: {this.state.user.koins}</p></div>
            </div>
        );
    }
}


export default ProfilePage;
