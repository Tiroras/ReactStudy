import React from 'react';
import Message from "./Message";
import classes from "../../styles/dialogs/Messages.module.css"
import NewMessage from "./NewMessage";

export default function Messages(props) {

    return(
        <div className={classes.block}>

            <div>
                {props.data.map((prop) => (
                    <Message name={prop.name} message={prop.message}/>
                ))}
            </div>

            <NewMessage />

        </div>
    )
}