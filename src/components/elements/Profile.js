import React from 'react';
import Person from "./profile/Person";
import classes from "../styles/Profile.module.css"
import PostsContainer from "./profile/PostsContainer";

export default function Profile(props){

    return(
        <div className={classes.profile}>

            <Person profile={props.profile}/>


            <PostsContainer />
        </div>
    )
}
