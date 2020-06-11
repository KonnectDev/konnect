import * as actionTypes from './actionsTypes';
import axios from 'axios';
import API from '../../utils/API';
import {browserHistory} from '../../index';


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
};

export const authDoesntMatch = message => {
    return {
        type: actionTypes.AUTH_DOESNT_MATCH,
        message: message
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
};

export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('username');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
};

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
};

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        API.post('user/login', {
            username: username,
            password: password
        })
            .then(res => {
                if (res.data.auth_key !== undefined) {
                    const token = res.data.auth_key;
                    const id = res.data.id;
                    const username = res.data.username;
                    console.log(res.data.username);
                    const expirationDate = new Date(new Date().getTime() + 86400 * 1000);
                    localStorage.setItem("token", token);
                    localStorage.setItem("expirationDate", expirationDate);
                    localStorage.setItem("id", id);
                    localStorage.setItem("username", username);
                    dispatch(checkAuthTimeout(86400));
                    dispatch(authSuccess(token));
                    browserHistory.push('/Dashboard');
                    window.location.reload()
                }
                else {
                    let message = "Username or password doesnt match"
                    dispatch(authDoesntMatch(message))
                }
            })
            .catch(err => {
                dispatch(authFail(err))
            })
    }
};

export const authSignup = (username, email, password) => {
    return dispatch => {
        dispatch(authStart());
        API.put('user/register', {
            username: username,
            email: email,
            password: password,
        })
            .then(res => {
                if (res.data.auth_key !== undefined) {
                    const token = res.data.auth_key;
                    const id = res.data.id;
                    const expirationDate = new Date(new Date().getTime() + 86400 * 1000);
                    localStorage.setItem('token', token);
                    localStorage.setItem('expirationDate', expirationDate);
                    localStorage.setItem('id', id);
                    localStorage.setItem('username', username);
                    dispatch(authSuccess(token));
                    dispatch(checkAuthTimeout(86400));
                }else {
                    let message = "Username or password doesnt match"
                    dispatch(authDoesntMatch(message))
                }
            })
            .catch(err => {
                dispatch(authFail(err));
                console.log(err)
            })
    }
};


export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
};


