import React from 'react';

export default function DialogItem(props) {
    return(
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
    )
}