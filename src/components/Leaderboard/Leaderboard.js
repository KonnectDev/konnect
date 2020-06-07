import React from "react";
import List from '../../components/Leaderboard/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/Leaderboard.scss';

class Leaderboard extends React.Component {

    render() {
        return (
            <div className="Leaderboard">
                <div className="Title">
                    {this.props.title}
                </div>
                <List />
                <div className="Title updates">
                    Last Updated : {this.props.LastUpdated}
                </div>
            </div>
        );
    }
}


export default Leaderboard;
