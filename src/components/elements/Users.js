import React from "react";
import styles from "../styles/Users.module.css";
import User from "./users/User";


const Users = (props) =>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for(let i=0; i <= pagesCount; i++){
        pages.push(i+1);
    }

    return (
        <div>

            <div className={styles.pages}>
                {pages.map((page) => (
                    <span
                        className={props.currentPage === page && styles.selectedPage}
                        onClick={(e)=> {props.onPageChanged(page)}}>

                        {page}</span>
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

                    follow={props.follow}
                    unfollow={props.unfollow}
                />))}
        </div>

    )
}

export default Users;