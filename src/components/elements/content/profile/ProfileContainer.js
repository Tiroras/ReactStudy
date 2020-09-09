import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {usersAPI} from "../../../../api/api";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId){
            userId = this.props.myId;
        }
        usersAPI.getProfile(userId).then(response =>{
            this.props.setUserProfile(response)
        });
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profileData.profile,
    myId: state.auth.userId,
})


export default compose(connect(mapStateToProps, {setUserProfile}), withRouter, withAuthRedirect)(ProfileContainer)