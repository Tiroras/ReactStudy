import React from "react";
import classes from '../../../styles/dialogs/NewMessage.module.css';
import {Field, reduxForm} from "redux-form";

const NewMessage = (props) => {
    let newMessageElement = React.createRef();

    return(
        <form onSubmit={props.handleSubmit} className={classes.newMessage}>
            <div className={classes.input}>
                <Field
                    component={'textarea'}
                    name={'newMessage'}
                    ref={newMessageElement}
                    placeholder="Enter message"
                />
            </div>

            <div className={classes.button}>
                <button>Отправить</button>
            </div>
        </form>
    )
}

const NewMessageReduxForm = reduxForm({form: 'newMessageForm'})(NewMessage);

export default NewMessageReduxForm;