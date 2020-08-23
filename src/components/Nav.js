import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";
import NavLinks from "./NavLinks";
import NavFriends from "./styles/NavFriends";

export default function Nav(props){
    return(
        <nav className={classes.nav}>

            <NavLinks data={props.data.navLinks} />


            <NavFriends data={props.data.friends} />
        </nav>
    )
}