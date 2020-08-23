import React from "react";
import {NavLink} from "react-router-dom";

export default function NavLinks(props){
    return(
        <div>
            {props.data.map((navLink)=>(
                <div>
                    <NavLink to={navLink.href}>{navLink.title}</NavLink>
                </div>
            ))}
        </div>
    )
}