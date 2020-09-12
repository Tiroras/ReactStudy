import React from 'react';
import Person from "./Person";
import classes from "../../../styles/Profile.module.css"
import PostsContainer from "./PostsContainer";

export default function Profile(props){


    return(
        <div className={classes.profile}>

            <Person
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />


            <PostsContainer />
        </div>
    )
}
