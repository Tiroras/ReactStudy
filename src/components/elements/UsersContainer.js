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

class UsersAPIComponent extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);
                this.props.toggleIsFetching(false);
            });
    }


    onPageChanged = (pageNumber) =>{
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)});
                this.props.toggleIsFetching(false);
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