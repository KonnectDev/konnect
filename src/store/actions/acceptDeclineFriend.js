import * as actionTypes from '../actionsTypes';
import axios from 'axios';
import API from '../../utils/API';
import {browserHistory} from '../../index';
import {authDoesntMatch, checkAuthTimeout} from "./auth";


export const acceptFriendStart = () => {
    return {
        type: actionTypes.ACCEPT_FRIEND_START
    }
};

export const acceptFriendSuccess = token => {
    return {
        type: actionTypes.ACCEPT_FRIEND_SUCCESS,
    }
};


export const acceptFriendFail = error => {
    return {
        type: actionTypes.ACCEPT_FRIEND_FAIL,
        error: error
    }
};


// ACCEPT FRIEND REQUEST \\


export const acceptFriend = (id, username, account_id, auth_key) => {
    return dispatch => {
        dispatch(acceptFriendStart());
        API.put(`user/friend/request/accept`, {
            user_id: account_id,
            auth_key: auth_key,
            friend_id: id,
        })
            .then(res => {
                console.log(res.data);
                acceptFriendSuccess()
            })
            .catch(err => {
                dispatch(acceptFriendFail(err))
            })
    }
};

