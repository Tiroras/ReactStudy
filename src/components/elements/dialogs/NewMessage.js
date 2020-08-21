import React from "react";
import classes from '../../styles/dialogs/NewMessage.module.css';

export default function NewMessage(props){
    let newMessageElement = React.createRef();

    let AddMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return(
        <div className={classes.newMessage}>

            <div className={classes.input}>
                <textarea ref={newMessageElement}/>
            </div>

            <div className={classes.button}>
                <button onClick={AddMessage}>Отправить</button>
            </div>
        </div>
    )
}