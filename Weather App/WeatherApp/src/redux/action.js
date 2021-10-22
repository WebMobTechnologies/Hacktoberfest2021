import {SET_TOKEN, SET_USER, REMEMBER_USER_CREDENTIALS} from './action-types';
import {REHYDRATE} from 'redux-persist/src/constants';

let initialState = {
    user: null,
    token: null,
    credential: null,
};

const setToken = (token) => ({type: SET_TOKEN, token});
const setUser = (user) => ({type: SET_USER, user});
const logout = () => ({type: REHYDRATE, payload: initialState});
const rememberUserCredentials = (credential) => ({
    type: REMEMBER_USER_CREDENTIALS,
    credential,
});

export default {
    setToken,
    setUser,
    logout,
    rememberUserCredentials,
};
