const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UN-FOLLOW';

const SET_USERS = 'SET-USERS';

const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';

const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    users:[ ],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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



        default: return state;



    }
}



export const follow = (userID) => ({type: FOLLOW, userID});
export const unfollow = (userID) => ({type: UNFOLLOW, userID});

export const setUsers = (users) => ({type: SET_USERS, users})

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, totalUsersCount})

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})



export default usersReducer;