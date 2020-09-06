import React from 'react';
import classes from './Nav.module.css';
import NavLinks from "./elements/NavLinks";
import NavFriends from "./elements/NavFriends";

export default function Nav(props){
    return(
        <nav className={classes.nav}>

            <NavLinks
                data={props.navLinks}
            />


            <NavFriends
                data={props.friends}
            />
        </nav>
    )
}