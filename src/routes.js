import React from "react";
import Homepage from "./views/Homepage";
import Register from "./views/Register";


// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
const routes = [
    {
        path: "/",
        component: Homepage,
    },
    {
        path: "/register",
        component: Register,
    },

];

export default routes;
