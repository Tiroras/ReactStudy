import React from 'react'
import classes from '../../styles/profile/NewPost.module.css'

export default function NewPost(props){
    let newPostElement = React.createRef();

    let addPost = () =>{
        props.addPost();
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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