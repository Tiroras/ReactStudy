import React from "react";
import {NavLink} from "react-router-dom";
import classes from '../styles/NavLinks.module.css'

export default function NavLinks(props){
    return(
        <div>
            {props.data.map((navLink)=>(
                <div className={classes.elementContainer}>
                    <NavLink to={navLink.href}>{navLink.title}</NavLink>
                </div>
            ))}
        </div>
    )
}