import React from 'react'
import classes from '../../styles/profile/NewPost.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

export default function NewPost(props){
    debugger;
    let newPostElement = React.createRef();

    let addPost = () =>{
        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return(
        <div className={classes.newPost}>
            <div className={classes.input}>

                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}
                />

            </div>

            <div className={classes.button}>
                <button onClick={addPost}>Опубликовать</button>
            </div>
        </div>
    )
}