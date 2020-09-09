import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";


let mapStateToProps = (state) =>{
    return{
        posts: state.profileData.posts,
        newPostText: state.profileData.newPostText
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addPost: () =>{
            dispatch(addPostActionCreator());
        },

        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;