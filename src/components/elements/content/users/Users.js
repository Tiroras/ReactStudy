import React from "react";
import styles from "../../../styles/Users.module.css";
import User from "./User";
import {Redirect} from "react-router-dom";


const Users = (props) =>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for(let i=0; i <= pagesCount; i++){
        pages.push(i+1);
    }

    if(props.isAuth === false){
        return <Redirect to={"/login"} />
    }

    return (
        <div>

            <div className={styles.pages}>
                {pages.map((page) => (
                    <span
                        className={props.currentPage === page && styles.selectedPage}
                        onClick={(e)=> {props.onPageChanged(page)}}
                    >{page}</span>
                ))}
            </div>



            {props.users.map((user) => (
                <User
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    img={user.photos.small}
                    status={user.status}
                    // country={user.location.country}
                    // city={user.location.city}
                    followed={user.followed}
                    followSuccess={props.followSuccess}
                    unfollowSuccess={props.unfollowSuccess}
                    toggleFollowingInProgress={props.toggleFollowingInProgress}
                    followingInProgress={props.followingInProgress}

                />))}
        </div>

    )
}

export default Users;