import React from "react";
import {ListitemFriend} from "../Sidebar/Listitem";
import API from "../../utils/API";
import ListItemUser from "./ListItemUser";

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
            .post(`user/friends?user_id=${id}&auth_key=${auth_key}`)
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
                        <th scope="col">mmr</th>
                        <th scope="col">lvl</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.slice(0, this.props.max).map((user, index) => (
                            <ListItemUser

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
