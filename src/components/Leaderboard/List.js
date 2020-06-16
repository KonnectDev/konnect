import React from "react";
import {ListitemFriend} from "../Sidebar/ListitemRequest";
import API from "../../utils/API";
import ListItemUser from "./ListItemUser";
import image from '../../assets/img/face-3.jpg';

let count = 0;

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        }
    }

    componentDidMount() {

        const id = localStorage.getItem("id");
        const auth_key = localStorage.getItem("token");

        API
            .get(`users`)
            .then(response => {
                console.log(response);
                this.setState({users: response.data});
            })
            .catch(err => {
                console.log(err);
            });

    }

    render() {

        return (
            <div>
                <table className="table table-striped table-dark table-hover table-borderless">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Profile picture</th>
                        <th scope="col">Name</th>
                        <th scope="col">Koins</th>
                        <th scope="col">Level</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.slice(0, this.props.max).map((user, index) => (
                            <tr>
                                <th scope="row">{count += 1}.</th>
                                <td><img src={user.img_small} style={{width: "50px"}}/></td>
                                <td>{user.username}</td>
                                <td>{user.koins}</td>
                                <td>{user.level}</td>
                            </tr>
                        ))
                    }
                    </tbody>

                </table>
            </div>
        );
    }
}

export default List;
