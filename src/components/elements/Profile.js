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
                    dispatch={props.dispatch}
                    newPostText={props.data.newPostText}
                />

                <ListPosts posts={props.data.posts}/>
            </div>
        </div>
    )
}
