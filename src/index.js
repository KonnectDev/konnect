import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import routes from "./routes";
import Error from "./404";


console.log(localStorage);


ReactDOM.render(

    <Router>
        <Switch>
            {routes.map((route, i) => (
                <Route
                exact path={route.path}
                component={route.component}
                />
            ))}
            <Route path="*">
                <Error />
            </Route>
        </Switch>
    </Router>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
