import * as actionTypes from './actionsTypes';
import axios from 'axios';
import API from '../../utils/API';

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

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
};

export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
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
            const token = res.data[0].auth_key;
            const id = res.data[0].user_id;
            const expirationDate = new Date(new Date().getTime() + 86400 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('id', id);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(86400));
        })
            .catch(err => {
                dispatch(authFail(err))
            })
    }
};

export const authSignup = (username, password, email) => {
    return dispatch => {
        dispatch(authStart());
        API.post('user/register', {
            username: username,
            password: password,
            email: email,
        })
            .then(res => {
                const token = res.data[0].auth_key;
                const id = res.data[0].id;
                const expirationDate = new Date(new Date().getTime() + 86400 * 1000);
                localStorage.setItem('token', token);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('id', id);
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout(86400));
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
            if (expirationDate <= new Date() ) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000) );
            }
        }
    }
};


