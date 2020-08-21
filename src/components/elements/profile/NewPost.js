import React from 'react'
import classes from '../../styles/profile/NewPost.module.css'

export default function NewPost(props){
    debugger;
    let newPostElement = React.createRef();

    let addPost = () =>{
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPost(text);
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