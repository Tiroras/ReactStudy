import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-USER-STATUS';

let initialState ={
    posts: [
        {id: 1, text: "fafsfasf", likesCount: 111, attachment: " "},
        {id: 2, text: "fafsfasf", likesCount: 111, attachment: " "}
    ],

    newPostText: 'Новый пост',

    profile: null,

    status: ''
}

const profileReducer = (state = initialState, action) =>{


    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: 3,
                        text: state.newPostText,
                        likesCount: 0,
                        attachment: " "
                    }
                ],
                newPostText: ''
            };
            break;
        }


        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText};
            break;
        }


        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
            break;
        }


        case SET_STATUS:{
            return {...state, status: action.status}
            break;
        }
        default:
            return state;
            break;
    }
}

export default profileReducer;


export const addPostActionCreator = () =>{
    return { type: ADD_POST}
};
export const updateNewPostTextActionCreator = (text) =>{
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
};
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type:SET_STATUS, status});


export const getUserProfile = (userId) => (dispatch) =>{
    profileAPI.getProfile(userId).then(response =>{
        dispatch(setUserProfile(response));
    });
};

export const getStatus = (userId) => (dispatch) =>{
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
};

export const updateStatus = (status) => (dispatch) =>{
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0){
            dispatch(setStatus(status))
        }
    });
}

