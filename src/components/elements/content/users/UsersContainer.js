import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    followSuccess, getUsers,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleFollowingInProgress,
    toggleIsFetching, unfollow,
    unfollowSuccess
} from "../../../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../../common/preloader/Preloader";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }


    onPageChanged = (pageNumber) =>{
        this.props.getUsers(pageNumber);
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

                    followSuccess={this.props.followSuccess}
                    unfollowSuccess={this.props.unfollowSuccess}
                    toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                    followingInProgress={this.props.followingInProgress}

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
        isFetching: state.usersData.isFetching,
        followingInProgress: state.usersData.followingInProgress,
    }
}



export default compose(connect(mapStateToProps, {
    followSuccess, unfollowSuccess, setUsers,
    setCurrentPage, setUsersTotalCount, toggleIsFetching,
    toggleFollowingInProgress, getUsers, follow, unfollow
}), withAuthRedirect)(UsersAPIComponent);