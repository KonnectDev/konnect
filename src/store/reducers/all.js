import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from "../utility";

const initialState = {
    token: null,
    error: null,
    loading: false
};


const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token,
        error: null,
        loading: false
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const authDoesntMatch = (state, action) => {
    return updateObject(state, {
        message: action.message,
        loading: false
    })
};

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null
    });
};


// Invite Friends

const inviteFriendsStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const inviteFriendsSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: false
    });
};

const inviteFriendsFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};


// Accept Friend Request

const acceptFriendStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const acceptFriendSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: false
    });
};

const acceptFriendFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        case actionTypes.AUTH_FAIL:
            return authFail(state, action);
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action);
        case actionTypes.AUTH_DOESNT_MATCH:
            return authDoesntMatch(state, action);


        case actionTypes.INVITE_FRIEND_START:
            return inviteFriendsStart(state, action);
        case actionTypes.INVITE_FRIEND_SUCCESS:
            return inviteFriendsSuccess(state, action);
        case actionTypes.INVITE_FRIEND_FAIL:
            return inviteFriendsFail(state, action);


        case actionTypes.ACCEPT_FRIEND_START:
            return acceptFriendStart(state, action);
        case actionTypes.ACCEPT_FRIEND_SUCCESS:
            return acceptFriendSuccess(state, action);
        case actionTypes.ACCEPT_FRIEND_FAIL:
            return acceptFriendFail(state, action);


        default:
            return state;
    }
};

export default reducer;
