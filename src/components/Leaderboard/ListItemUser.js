import React from "react";

let count=0;
class ListItemUser extends React.Component {

    render() {

        return (
                <tr>
                    <th scope="row">{count+=1}.</th>
                    <td><img src={this.props.image}/></td>
                    <td>{this.props.username}</td>
                    <td>{this.props.koins}</td>
                    <td>{this.props.lvl}</td>
                </tr>
        );
    }
}

export default ListItemUser;
