import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data};
            break;
        }


        default: return state;

    }
}

export const setAuthUserData = (userId, email, login, isAuth) =>
    ({type: SET_USER_DATA, data: {userId, email, login, isAuth}})

export const authentication = () => (dispatch) => {
    return authAPI.me().then(response => {
        if(response.resultCode === 0){
            let {id, email, login} = response.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if(response.resultCode === 0){
            dispatch(authentication());
        }
        else{
            let message = response.data.messages ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}));
        }
    });
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if(response.resultCode === 0){
            let {id, email, login} = response.data;
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
}

export default authReducer;