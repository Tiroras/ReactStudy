import React from 'react';

export default function Message(props) {
    return(
        <div className="message">
            <div className="userImage">
                {props.image}
            </div>

            <div className="userName">
                {props.name}
            </div>

            <div className="text">
                {props.message}
            </div>
        </div>
    )
}