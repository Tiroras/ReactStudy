import React from 'react';
import Message from "./Message";
import classes from "../../../styles/dialogs/Messages.module.css"
import NewMessage from "./NewMessage";

const Messages = (props) => {
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessage)
    }

    return(
        <div className={classes.block}>

            <div>
                {props.data.map((prop) => (
                    <Message key={props.id} name={prop.name} message={prop.message}/>
                ))}
            </div>

            <NewMessage
                onSubmit={addNewMessage}
                newMessageBody={props.newMessageBody}
                sendMessage={props.sendMessage}
                onMessageChange={props.onMessageChange}
            />

        </div>
    )
}

export default Messages;