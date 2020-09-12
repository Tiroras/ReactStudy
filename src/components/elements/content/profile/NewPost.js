import React from 'react'
import classes from '../../../styles/profile/NewPost.module.css'
import {Field, reduxForm} from "redux-form";

function NewPost(props){
    let newPostElement = React.createRef();

    let addPost = () =>{
        props.addPost();
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return(
        <form onSubmit={props.handleSubmit} className={classes.newPost}>
            <div className={classes.input}>

                <Field
                    component={'textarea'}
                    name={'newPostField'}
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}
                />

            </div>

            <div className={classes.button}>
                <button onClick={addPost}>Опубликовать</button>
            </div>
        </form>
    )
}

const NewPostReduxForm = reduxForm({form: 'newPost'})(NewPost)

export default NewPostReduxForm;