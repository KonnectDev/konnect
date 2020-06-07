import React from "react";
import Leaderboard from '../components/Leaderboard/Leaderboard';

class LeaderboardPage extends React.Component {
    render() {
        return (
            <div>
                <Leaderboard title="Top 50 Players"/>
            </div>
        );
    }
}

export default LeaderboardPage;
