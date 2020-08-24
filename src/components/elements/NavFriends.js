import React from "react";
import classes from "../styles/NavFriends.module.css"
import StoreContext from "../../store-context";

export default function NavFriends(props) {
    return(
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().sidebarData.friends;
                return (
                    <div className={classes.container}>
                        {state.map((friend) => (

                            <div className={classes.element}>
                                <div className={classes.friendAvatar}>
                                    <img src={friend.img}/>
                                </div>

                                <div className='name'>
                                    {friend.name}
                                </div>
                            </div>
                    ))}
                </div>)
            }}
        </StoreContext.Consumer>
    )
}