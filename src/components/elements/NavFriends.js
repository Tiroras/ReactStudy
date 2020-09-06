import React from "react";
import classes from "../styles/NavFriends.module.css"

export default function NavFriends(props) {
    return(
        <div className={classes.container}>
            {props.data.map((friend) => (

                <div className={classes.element}>
                    <div className={classes.friendAvatar}>
                        <img src={friend.img}/>
                    </div>

                    <div className='name'>
                        {friend.name}
                    </div>
                </div>))
            }
        </div>
    )
}