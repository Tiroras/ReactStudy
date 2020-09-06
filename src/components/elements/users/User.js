import React from 'react';
import classes from '../../styles/users/User.module.css'
import userPhoto from '../../../assets/images/user.png'
import {NavLink} from "react-router-dom";

const User = (props) =>{
    return(
        <div id={props.id} className={classes.container}>

            <div className={classes.rightSection}>

                <NavLink to={`/profile/${props.id}`}>
                    <div className={classes.img}>
                        <img
                            src={props.img != null ?
                                props.img : userPhoto}
                        />
                    </div>
                </NavLink>


                <div className={classes.button}>
                    {props.followed ?
                        <button onClick={() => {props.unfollow(props.id)}}>
                            Unfollow</button>
                        :
                        <button onClick={() => {props.follow(props.id)}}>
                            Follow</button>
                    }
                </div>

            </div>



            <div className={classes.leftSection}>

                <div className={classes.userInformation} >

                    <NavLink to={`/profile/${props.id}`}>
                        <div className="name">
                            {props.name}
                        </div>
                    </NavLink>

                    <div className="location">
                        {/*{props.country}, {props.city}*/}
                    </div>

                </div>


                <div className={props.status}>
                    <hr />
                    {props.status}
                </div>

            </div>

        </div>
    )
}

export default User;