import React from 'react';
import Person from "./elements/profile/Person";
import classes from "./styles/Profile.module.css"
import ListPosts from "./elements/profile/ListPosts";
import NewPost from "./elements/profile/NewPost";

export default function Profile(){
    return(
        <div className={classes.profile}>

            <Person />

            <hr />

            <div className="posts">

                <NewPost />

                <ListPosts />
            </div>
        </div>
    )
}
