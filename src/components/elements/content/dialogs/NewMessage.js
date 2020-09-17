import React from "react";
import classes from '../../../styles/dialogs/NewMessage.module.css';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/formscontrol/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";

const maxLength = maxLengthCreator(200);

const NewMessage = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className={classes.newMessage}>
            <div className={classes.input}>
                <Field
                    component={Textarea}
                    name={'newMessage'}
                    validate={[required, maxLength]}
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