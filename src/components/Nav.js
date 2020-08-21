import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";

export default function Nav(props){
    return(
        <nav className={classes.nav}>



            <div>
                <NavLink to="/profile">Profile</NavLink>
            </div>



            <div>
                <NavLink to="/dialogs">Dialogs</NavLink>
            </div>



            <div>
                <NavLink to="/news">News</NavLink>
            </div>



            <div>
                <NavLink to="/music">Music</NavLink>
            </div>



            <div>
                <NavLink to="/settings">Settings</NavLink>
            </div>



            <div>
                {}
            </div>
        </nav>
    )
}