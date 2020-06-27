import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.scss';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import store from "./store/store";
import {Provider} from 'react-redux';
import { createBrowserHistory } from 'history';



export const browserHistory = createBrowserHistory();


const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

debugger;

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
