import React from "react";
import Feed from "./views/Feed";
import LeaderboardPage from "./views/LeaderboardPage";
import Settings from "./views/SettingsPage";
import ProfilePage from "./views/ProfilePage";
import MessagesPage from "./views/MessagesPage";
import GuildPage from "./views/GuildPage";


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
        path: "/profile/:username",
        name: "Profile",
        component: ProfilePage,
        layout: "/Dashboard"
    },
    {
        path: "/profile",
        name: "Profile",
        component: ProfilePage,
        layout: "/Dashboard"
    },
    {
        path: "/leaderboard",
        name: "Leaderboard",
        component: LeaderboardPage,
        layout: "/Dashboard"
    },
    {
        path: "/settings",
        name: "Settings",
        component: Settings,
        layout: "/Dashboard"
    },
    {
        path: "/messages",
        name: "Messages",
        component: MessagesPage,
        layout: "/Dashboard"
    },
    {
        path: "/guild",
        name: "Guild",
        component: GuildPage,
        layout: "/Dashboard"
    }

];

export default routes;
