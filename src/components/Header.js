import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

export default function Header(props){
    return(

        <header className={classes.header}>
            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"} />

            <div className={classes.login}>
                <NavLink to={'/login'} >
                    {props.isAuth ? <div>{props.login}
                    <button onClick={props.logout}>Log out</button></div> : 'Login'}
                </NavLink>
            </div>
        </header>
    )
}