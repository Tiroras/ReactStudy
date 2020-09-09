import React from "react";
import {NavLink} from "react-router-dom";
import classes from '../../styles/NavLinks.module.css'
import StoreContext from "../../../store-context";

export default function NavLinks(props){
    return(
        <div>
            {props.data.map((navLink) => (
                <div className={classes.elementContainer} key={navLink.id}>
                    <NavLink to={navLink.href}>{navLink.title}</NavLink>
                </div>
            ))}
        </div>
    )
}