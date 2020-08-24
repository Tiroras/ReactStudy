import React from 'react';
import Person from "./profile/Person";
import classes from "../styles/Profile.module.css"
import ListPosts from "./profile/ListPosts";
import NewPostContainer from "./profile/NewPostContainer";
import PostsContainer from "./profile/PostsContainer";

export default function Profile(props){

    return(
        <div className={classes.profile}>

            <Person />

            {/*<div className="posts">*/}

            {/*    <NewPostContainer*/}
            {/*        // dispatch={props.dispatch}*/}
            {/*        // newPostText={props.data.newPostText}*/}
            {/*    />*/}

            {/*    <ListPosts*/}
            {/*        // posts={props.data.posts}*/}
            {/*    />*/}
            {/*</div>*/}

            <PostsContainer />
        </div>
    )
}
