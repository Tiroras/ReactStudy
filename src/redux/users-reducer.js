import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UN-FOLLOW';

const SET_USERS = 'SET-USERS';

const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';

const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
    users:[ ],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) =>{

    switch (action.type) {



        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if(user.id === action.userID){
                        return {...user, followed: true}
                    }
                    return user
                })
            }
            break;



        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if(user.id === action.userID){
                        return {...user, followed: false}
                    }
                    return user
                })
            }
            break;



        case SET_USERS:
            return { ...state, users: action.users};
            break;



        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage}
            break;



        case SET_TOTAL_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount}
            break;



        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
            break;



        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state, followingInProgress: action.isFetching
                    ?[...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id != action.userID)}
            break;


        default: return state;



    }
}



export const followSuccess = (userID) => ({type: FOLLOW, userID});
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID});

export const setUsers = (users) => ({type: SET_USERS, users})

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, totalUsersCount})

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (followingInProgress) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress})


export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(setUsers(response.items));
            dispatch(setUsersTotalCount(response.totalCount));
            dispatch(toggleIsFetching(false));
        });
    }
}

export const follow = (id) =>{
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id))
        usersAPI.follow(id).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(id))
            }
            dispatch(toggleFollowingInProgress(false, id))
        })
    }
}

export const unfollow = (id) =>{
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id))
        usersAPI.unfollow(id).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(id))
            }
            dispatch(toggleFollowingInProgress(false, id))
        })
    }
}

export default usersReducer;