import {createSelector} from "reselect";

export const getUsers = (state) =>{
    return state.usersData.users;
}

export const getSuperUserSelector = createSelector(getUsers, (users) =>{
    return users.filter( user => true)
})

export const getPageSize = (state) =>{
    return state.usersData.pageSize;
}

export const getTotalUsersCount = (state) =>{
    return state.usersData.totalUsersCount;
}

export const getCurrentPage = (state) =>{
    return state.usersData.currentPage;
}

export const getFetching = (state) =>{
    return state.usersData.isFetching;
}

export const getFollowingInProgress = (state) =>{
    return state.usersData.followingInProgress;
}