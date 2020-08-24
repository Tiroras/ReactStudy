import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import NewPost from "./NewPost";
import StoreContext from "../../../store-context";

export default function NewPostContainer(props){


    return(
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().profileData;

                let onAddPost = () =>{
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) =>{
                    store.dispatch(updateNewPostTextActionCreator(text));
                }
                return (
                    <NewPost
                    updateNewPostText={onPostChange}
                    addPost={onAddPost}
                    newPostText={state.newPostText}
                />
                )}}
        </StoreContext.Consumer>
    )
}