import React from "react";
import {ListitemFriend} from "../Sidebar/Listitem";
import API from "../../utils/API";
import ListItemUser from "./ListItemUser";
import image from '../../assets/img/face-3.jpg';


class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                {
                    username: "Henk",
                    image: image,
                    koins: 50,
                    lvl: 50,
                },
                {
                    username: "Jan",
                    image: image,
                    koins: 10,
                    level: 70,
                },
            ],
        }
    }

    componentDidMount() {

        const id = localStorage.getItem("id");
        const auth_key = localStorage.getItem("token");

        // API
        //     .post(`users`)
        //     .then(response => {
        //         console.log(response);
        //         this.setState({users: response.data});
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });

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
                            <ListItemUser
                                username={user.username}
                                image={user.image}
                                koins={user.koins}
                                lvl={user.level}
                            />
                        ))
                    }
                    </tbody>

                </table>
            </div>
        );
    }
}

export default List;
