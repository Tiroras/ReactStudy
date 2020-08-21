import React from 'react';
import Person from "./profile/Person";
import classes from "../styles/Profile.module.css"
import ListPosts from "./profile/ListPosts";
import NewPost from "./profile/NewPost";

export default function Profile(props){

    return(
        <div className={classes.profile}>

            <Person />

            <div className="posts">

                <NewPost
                    addPost={props.addPost}
                    newPostText={props.newPostText}
                    updateNewPost={props.updateNewPost}
                />

                <ListPosts posts={props.posts}/>
            </div>
        </div>
    )
}
