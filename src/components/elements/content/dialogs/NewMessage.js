import React from "react";
import classes from '../../../styles/dialogs/NewMessage.module.css';
import {Field, reduxForm} from "redux-form";

function NewMessage(props){
    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) =>{
        let body = e.target.value;
        props.onMessageChange(body)
    }

    return(
        <form onSubmit={props.handleSubmit} className={classes.newMessage}>
            <div className={classes.input}>
                <Field
                    component={'textarea'}
                    name={'enterMessage'}
                    ref={newMessageElement}
                    placeholder="Enter message"
                    value={props.newMessageBody}
                    onChange={onMessageChange}
                />
            </div>

            <div className={classes.button}>
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </form>
    )
}

const NewMessageReduxForm = reduxForm({form: 'newMessageForm'})(NewMessage);

export default NewMessageReduxForm;