import {REMEMBER_USER_CREDENTIALS, SET_TOKEN, SET_USER} from './action-types';

import {REHYDRATE} from 'redux-persist/src/constants';

let initial = {
    user: null,
    token: null,
    credential: null,
};

const reducer = (state = initial, action) => {
    switch (action.type) {
        case SET_USER:
            return Object.assign({}, state, {user: action.user});
        case SET_TOKEN:
            return Object.assign({}, state, {token: action.token});
        case REMEMBER_USER_CREDENTIALS:
            return Object.assign({}, state, {credential: action.credential});
        case REHYDRATE:
            return {...state, ...action.payload};
        default:
            return state;
    }
};

export default reducer;
