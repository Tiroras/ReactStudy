import React from "react";
import {NavLink} from "react-router-dom";
import classes from '../styles/NavLinks.module.css'
import StoreContext from "../../store-context";

export default function NavLinks(props){
    return(
        <StoreContext.Consumer>
            {(store)=> {
                let state = store.getState().sidebarData.navLinks;
                return (
                    <div>
                        {state.map((navLink) => (
                            <div className={classes.elementContainer}>
                                <NavLink to={navLink.href}>{navLink.title}</NavLink>
                            </div>
                        ))}
                    </div>)
            }}
        </StoreContext.Consumer>
    )
}