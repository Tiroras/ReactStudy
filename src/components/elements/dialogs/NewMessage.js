import React from "react";
import classes from '../../styles/dialogs/NewMessage.module.css';
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../redux/dialogs-reducer";

export default function NewMessage(props){
    debugger;
    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) =>{
        let body = e.target.value;
        props.onMessageChange(body)
    }

    return(
        <div className={classes.newMessage}>

            <div className={classes.input}>
                <textarea
                    ref={newMessageElement}
                    placeholder="Enter message"
                    value={props.newMessageBody}
                    onChange={onMessageChange}
                />
            </div>

            <div className={classes.button}>
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </div>
    )
}