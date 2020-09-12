import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';

const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-USER-STATUS';

let initialState ={
    posts: [
        {id: 1, text: "fafsfasf", likesCount: 111, attachment: " "},
        {id: 2, text: "fafsfasf", likesCount: 111, attachment: " "}
    ],

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
                        text: action.newPost,
                        likesCount: 0,
                        attachment: " "
                    }
                ],
            };
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


export const addPostActionCreator = (newPost) =>{
    return ({type: ADD_POST, newPost: newPost})
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

