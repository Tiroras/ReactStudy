import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.setUsers(response.items);
            this.props.setUsersTotalCount(response.totalCount);
            this.props.toggleIsFetching(false);
        });
    }


    onPageChanged = (pageNumber) =>{
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(response => {
            this.props.setUsers(response.items);
            this.props.toggleIsFetching(false);
        });
    }


    render()
    {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}

                    onPageChanged={this.onPageChanged}

                    unfollow={this.props.unfollow}
                    follow={this.props.follow}

                    users={this.props.users}

                />
            </>
        )
    }
}



let mapStateToProps = (state) =>{
    return{
        users: state.usersData.users,
        pageSize: state.usersData.pageSize,
        totalUsersCount: state.usersData.totalUsersCount,
        currentPage: state.usersData.currentPage,
        isFetching: state.usersData.isFetching
    }
}

// let mapDispatchToProps = (dispatch) =>{
//     return {
//         follow: (userID) =>{
//             dispatch(followAC(userID));
//         },
//
//         unfollow: (userID) =>{
//             dispatch(unfollowAC(userID));
//         },
//
//         setUsers: (users) =>{
//             dispatch(setUsersAC(users));
//         },
//
//         setCurrentPage: (currentPage) =>{
//             dispatch(setCurrentPageAC(currentPage))
//         },
//
//         setTotalUsersCount: (totalCount) =>{
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//
//         toggleIsFetching: (isFetching) =>{
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

const UsersContainer = connect(mapStateToProps, {
    follow: follow,
    unfollow: unfollow,
    setUsers: setUsers,
    setCurrentPage: setCurrentPage,
    setUsersTotalCount: setUsersTotalCount,
    toggleIsFetching: toggleIsFetching
    })
(UsersAPIComponent);

export default UsersContainer;