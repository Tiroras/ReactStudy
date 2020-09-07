import React from 'react';
import classes from '../../styles/users/User.module.css';
import userPhoto from '../../../assets/images/user.png';
import {NavLink} from "react-router-dom";
import * as axios from 'axios';

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
                        <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': 'ba23bfd9-1b2b-421e-863e-643a2feb144a'
                                }
                            }).then(response =>{
                                if(response.data.resultCode === 0){
                                    props.unfollow(props.id)
                                }
                            });
                        }}>Unfollow</button>

                        :
                        <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': 'ba23bfd9-1b2b-421e-863e-643a2feb144a'
                                }
                            }).then(response =>{
                                if(response.data.resultCode === 0){
                                    props.follow(props.id)
                                }
                            });
                        }}>Follow</button>
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