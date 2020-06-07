import React from "react";

class Leaderboard extends React.Component {
    render() {
        return (
            <div className="Leaderboard">
                <div className="Title">
                    {this.props.title}
                </div>
                <div className="Title updates">
                    Last Updated : {this.props.LastUpdated}
                </div>
            </div>
        );
    }
}


export default Leaderboard;
