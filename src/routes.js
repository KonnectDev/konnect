import React from "react";
import Homepage from "./views/Homepage";
import Dashboard from "./views/Dashboard";
import RegisterPage from "./views/RegisterPage";
import Profile from "./views/Profile";
import Feed from "./views/Feed";
import LeaderboardPage from "./views/LeaderboardPage";
import InviteFriendsPage from "./views/InviteFriendsPage";


// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
const routes = [
    {
        path: "/feed",
        name: "Feed",
        component: Feed,
        layout: "/Dashboard"
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        layout: "/Dashboard"
    },
    {
        path: "/leaderboard",
        name: "Leaderboard",
        component: LeaderboardPage,
        layout: "/Dashboard"
    },

];

export default routes;
