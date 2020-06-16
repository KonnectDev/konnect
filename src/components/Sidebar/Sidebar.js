import React from 'react';
import {NavLink} from "react-router-dom";
import API from "../../utils/API";
import Invite from '../../assets/img/Invite.svg';
import Search from "./Search";
import ListitemRequest from "./ListitemRequest";
import List from "@material-ui/core/List";
import UserNavbarLinks from "../Navbar/UserNavbarLinks";
import logo from '../../assets/img/Konnect-logo-text.svg'
import Modal, {closeStyle} from 'simple-react-modal'
import InviteFriends from "../InviteFriends/InviteFriends";
import ListitemGuild from "./ListItemGuild";
import ListitemFriend from "./ListItemFriend";


export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            friends: [],
            guild: [],
            friendRequests: [],
            searchText: '',
            searchGuild: '',
            width: window.innerWidth,
        };

    }

    updateDimensions() {
        this.setState({width: window.innerWidth});
    }


    componentDidMount() {

        const id = localStorage.getItem("id");
        const auth_key = localStorage.getItem("token");

        API
            .post(`user/friends?user_id=${id}&auth_key=${auth_key}`)
            .then(response => {
                this.setState({friends: response.data});
                console.log(this.state.friends)
            })
            .catch(err => {
                console.log(err);
            });

        API
            .post(`user/friends/requests?user_id=${id}&auth_key=${auth_key}`)
            .then(response => {
                console.log(response.data);
                this.setState({friendRequests: response.data})
            })
            .catch(err => {
                console.log(err)
            });


        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }


    searchText = res => {
        this.setState({searchText: res});
    };

    searchGuild = res => {
        this.setState({searchGuild: res});
    };

    show() {
        this.setState({show: true})
    }

    close() {
        this.setState({show: false})
    }


    render() {

        return (
            <div
                id="sidebar"
                className="sidebar"
                data-color={this.props.color}
                data-image={this.props.image}
                style={{marginTop: "0px"}}
            >

                <div className="logo">
                    <NavLink to=""><img src={logo} alt="logo_image" width="200px"/></NavLink>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        {this.state.width <= 991 ? <UserNavbarLinks/> : null}
                        <div className="Online"><p>Total
                            Friends {this.state.friends === null ? "0" : this.state.friends.length}</p></div>
                        <div className="parent">
                            <div className="img">
                                <img src={Invite} onClick={this.show.bind(this)}/>
                            </div>
                            <div className="text">
                                <a>Add Friend</a>

                            </div>
                        </div>
                        <Modal
                            style={{color: "black"}}
                            containerStyle={{background: '#26262b;'}} //changes styling on the inner content area
                            closeOnOuterClick={true}
                            show={this.state.show}
                            onClose={this.close.bind(this)}

                        >

                            <a style={closeStyle} onClick={this.close.bind(this)}>X</a>
                            <InviteFriends/>

                        </Modal>
                        <Search searchText={this.searchText}/>
                        <List>
                            {

                                this.state.friends === null ?
                                    <div/>


                                    :
                                    this.state.friends.filter(friend => (friend.username.toLowerCase().includes(this.state.searchText.toLowerCase())))
                                        .map((friend, index) => (
                                            <ListitemFriend
                                                src={friend.img_small}
                                                username={friend.username}
                                                level={friend.level}
                                                koins={1003}
                                            />
                                        ))
                            }
                        </List>
                        <div className="Online"><p>Friend Requests ({this.state.friendRequests.length})</p></div>
                        <List>
                            {

                                this.state.friendRequests
                                    .map((request, index) => (
                                        <ListitemRequest
                                            src={request.img_small}
                                            username={request.username}
                                            id={request.id}
                                        />
                                    ))
                            }
                        </List>
                        <div className="Online"><p>Guild Members ({this.state.guild.length})</p></div>
                        <Search searchText={this.searchGuild}/>
                        <List>
                            {

                                this.state.guild.filter(guild => (guild.username.toLowerCase().includes(this.state.searchGuild.toLowerCase())))
                                    .map((guild, index) => (
                                        <ListitemGuild
                                            src={guild.image}
                                            username={guild.username}
                                            level={guild.level}
                                        />
                                    ))
                            }
                        </List>
                    </ul>
                </div>
            </div>

        );
    }
}
