import * as actionTypes from './actionsTypes';
import axios from 'axios';
import API from '../../utils/API';
import {browserHistory} from '../../index';
import {authDoesntMatch, checkAuthTimeout} from "./auth";


export const inviteFriendsStart = () => {
    return {
        type: actionTypes.INVITE_FRIEND_START
    }
};

export const inviteFriendsSuccess = token => {
    return {
        type: actionTypes.INVITE_FRIEND_SUCCESS,
    }
};


export const inviteFriendsFail = error => {
    return {
        type: actionTypes.INVITE_FRIEND_FAIL,
        error: error
    }
};


export const addFriend = (id, username, account_id, auth_key) => {
    return dispatch => {
        dispatch(inviteFriendsStart());
        API.put(`user/friend/add`, {
            user_id: account_id,
            auth_key: auth_key,
            friend_id: id,
        })
            .then(res => {
                console.log(res.data);
                inviteFriendsSuccess()
            })
            .catch(err => {
                dispatch(inviteFriendsFail(err))
            })
    }
};
