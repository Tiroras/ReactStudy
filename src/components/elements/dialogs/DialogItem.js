import React from 'react';
import {BrowserRouter, NavLink} from "react-router-dom";

export default function DialogItem(props) {
    return(
        <BrowserRouter>
            <NavLink to={`/dialogs/${props.name}`}>

                <div className="item">

                    <div className="userImage">
                        {props.image}
                    </div>

                    <div className="userName">
                        {props.name}
                    </div>

                    <div className="userLastMessage">
                        {props.message}
                    </div>

                </div>

            </NavLink>
        </BrowserRouter>
    )
}