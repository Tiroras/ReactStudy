import React from 'react'
import classes from '../../../styles/profile/NewPost.module.css'
import {Field, reduxForm} from "redux-form";

function NewPost(props){

    return(
        <form onSubmit={props.handleSubmit} className={classes.newPost}>
            <div className={classes.input}>

                <Field
                    component={'textarea'}
                    name={'newPostField'}
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