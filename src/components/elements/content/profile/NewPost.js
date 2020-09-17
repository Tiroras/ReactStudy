import React from 'react'
import classes from '../../../styles/profile/NewPost.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/formscontrol/FormsControls";

const maxLength10 = maxLengthCreator(30);

function NewPost(props){

    return(
        <form onSubmit={props.handleSubmit} className={classes.newPost}>
            <div className={classes.input}>

                <Field
                    component={Textarea}
                    name={'newPostField'}
                    validate={[required, maxLength10]}
                    placeholder={'Post message'}
                />

            </div>

            <div className={classes.button}>
                <button>Опубликовать</button>
            </div>
        </form>
    )
}

const NewPostReduxForm = reduxForm({form: 'newPost'})(NewPost)

export default NewPostReduxForm;